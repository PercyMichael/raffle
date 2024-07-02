import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Link } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import Logo from '../../assets/images/raffleitapp.png';
import { updateUserDetails, loadUser } from '../../services/AuthService';

const AccountDetails = ({ backgroundColor, textColor }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    displayName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const router = useRouter();

  async function handleSaveChanges() {
    setErrors({});
    try {
      // Call the update function with the form data
      await updateUserDetails({
        firstname: form.firstname,
        lastname: form.lastname,
        displayName: form.displayName,
        email: form.email,
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });

      // Fetch the updated user details
      const updatedUser = await loadUser();
      console.log(updatedUser);

      // Handle the response (e.g., display a success message, navigate, etc.)
      router.replace('/discover');
    } catch (e) {
      console.error('Error:', e);  // Log the error for debugging

      if (e.response) {
        const status = e.response.status;
        if (status === 400) {
          console.error('Bad Request:', e.response.data);
        } else if (status === 401) {
          console.error('Unauthorized:', e.response.data);
        } else if (status === 422) {
          console.error('Validation Error:', e.response.data);
          setErrors(e.response.data.errors || {});
        } else {
          console.error(`Error ${status}:`, e.response.data);
        }
      } else if (e.request) {
        console.error('No response received:', e.request);
      } else {
        console.error('Error setting up request:', e.message);
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 20 }}>
          <View className="items-center justify-center">
            <Text className="font-black mt-4 text-xl">Update Your Account</Text>
          </View>

          <FormField
            title="First Name"
            placeholder="First Name"
            label={form.firstname}
            handleChangeText={(text) => setForm({ ...form, firstname: text })}
            otherStyles="mt-7"
            errors={errors.firstname}
          />

          <FormField
            title="Last Name"
            placeholder="Last Name"
            label={form.lastname}
            handleChangeText={(text) => setForm({ ...form, lastname: text })}
            otherStyles="mt-7"
            errors={errors.lastname}
          />

          <FormField
            title="Display Name"
            placeholder="Optional"
            label={form.displayName}
            handleChangeText={(text) => setForm({ ...form, displayName: text })}
            otherStyles="mt-7"
            errors={errors.displayName}
          />

          <FormField
            title="Email address"
            placeholder="Email Address"
            label={form.email}
            handleChangeText={(text) => setForm({ ...form, email: text })}
            otherStyles="mt-7"
            errors={errors.email}
          />

          <FormField
            title="Current password (leave blank to leave unchanged)"
            placeholder="********"
            label={form.currentPassword}
            handleChangeText={(text) => setForm({ ...form, currentPassword: text })}
            otherStyles="mt-7"
            secureTextEntry={true}
            errors={errors.currentPassword}
          />

          <FormField
            title="New password (leave blank to leave unchanged)"
            placeholder="********"
            label={form.newPassword}
            handleChangeText={(text) => setForm({ ...form, newPassword: text })}
            otherStyles="mt-7"
            secureTextEntry={true}
            errors={errors.newPassword}
          />

          <FormField
            title="Confirm Password"
            placeholder="********"
            label={form.confirmPassword}
            handleChangeText={(text) => setForm({ ...form, confirmPassword: text })}
            otherStyles="mt-7"
            secureTextEntry={true}
            errors={errors.confirmPassword}
          />

          <CustomButton
            title="Save Changes"
            handlePress={handleSaveChanges}
            containerStyles="mt-7"
          />

          <View className="flex-row justify-center items-center gap-4 mt-2">
            <Text className="font-bold text-lg">Want to explore more?</Text>
            <Link href="/discover" className="text-bgcolor font-bold text-lg underline ml-2">Discover</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountDetails;
