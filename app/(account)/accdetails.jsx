import React, { useState } from 'react';
import { View, Text, ScrollView, Alert, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { updateUserDetails, loadUser } from '../../services/AuthService';
import Header from '../../components/header';
import { useNavigation } from '@react-navigation/native';

const AccountDetails = () => {
  const navigation = useNavigation();
  const router = useRouter();

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
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!form.firstname) {
      errors.firstname = 'First name is required';
      valid = false;
    }

    if (!form.lastname) {
      errors.lastname = 'Last name is required';
      valid = false;
    }

    if (!form.email) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errors.email = 'Invalid email format';
      valid = false;
    }

    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSaveChanges = async () => {
    setErrors({});
    if (!validateForm()) return;

    setLoading(true);
    try {
      await updateUserDetails({
        firstname: form.firstname,
        lastname: form.lastname,
        displayName: form.displayName,
        email: form.email,
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      });

      const updatedUser = await loadUser();
      console.log(updatedUser);

      Alert.alert('Success', 'Your account details have been updated', [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],);
      router.replace('/discover');
    } catch (e) {
      console.error('Error:', e);
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Header title="Update Your Account" />
      <View style={styles.formContainer}>
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

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <CustomButton
            title="Save Changes"
            handlePress={handleSaveChanges}
            containerStyles="mt-7"
          />
        )}

        {/* <View style={styles.linkContainer}>
          <Text style={styles.text}>Want to explore more?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
            <Text style={styles.link}>Discover</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default AccountDetails;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    // padding: 20,
  },
  formContainer: {
    padding: 20,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});
