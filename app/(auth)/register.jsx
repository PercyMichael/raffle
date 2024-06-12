import { View, Text, ScrollView, Image, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router, useRouter } from 'expo-router';
import axios from '../../utils/axios';
import Dropdown from '../../components/dropdown';
import { register, loadUser } from "../../services/AuthService";

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Logo from "../../assets/images/raffleitapp.png";

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirmation] = useState("")
  const [selectedValue, setSelectedValue] = useState('');
  const [errors, setErrors] = useState({})

  const router = useRouter();


  const handleSelect = (value) => {
    setSelectedValue(value);
  };



  async function handleRegister() {
    setErrors({});

    try {
      const userData = {
        email,
        password,
        password_confirmation,
        selectedValue: selectedValue === 'Host' ? 1 : 0, // Assign integer values based on selected value
        device_name: `${Platform.OS} ${Platform.Version}`,
        user_type: 1 // Assign an integer value for user_type
      };

      // Call the register function
      const user = await register(userData);

      // Handle successful registration
      console.log('User registered successfully:', user);

      // Navigate to another screen, etc.
      router.replace('/discover');
    } catch (error) {
      console.error('Error registering user:', error);

      // Handle registration errors
      if (error.response) {
        const status = error.response.status;
        if (status === 422) {
          console.error('Validation Error:', error.response.data);
          setErrors(error.response.data.errors || {});
        } else {
          console.error(`Error ${status}:`, error.response.data);
        }
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };




  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full px-5">
          <View className="items-center justify-center">
            <Image source={Logo} />
            <Text className="font-black mt-4 text-xl">Register to Raffleit</Text>
            <Text className="mt-2 text-lg font-gray">Start raffling on raffleitapp</Text>
          </View>

          <FormField
            title="Email"
            placeholder="Email Address"
            label={email}
            handleChangeText={(text) => setEmail(text)}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <View>
            <Text className="mt-4 font-bold text-base">Selected Value: {selectedValue}</Text>
            <Dropdown
              options={['Host']}
              onSelect={handleSelect}
              handleChangeText={(text) => setSelectedValue(text)}
              defaultValue="User"
            />
          </View>


          <FormField
            title="Password"
            placeholder="Enter password"
            label={password}
            handleChangeText={(text) => setPassword(text)}
            otherStyles="mt-5"
            secureTextEntry={true}
          />

          <FormField
            title="Confirm Password"
            placeholder="Enter password"
            label={password_confirmation}
            handleChangeText={(text) => setPasswordConfirmation(text)}
            otherStyles="mt-5"
            secureTextEntry={true}
          />

          <CustomButton
            title="Register"
            handlePress={handleRegister}
            containerStyles="mt-7"
          />

          <View className="flex-row justify-center items-center gap-4 mt-2">
            <Text className="font-bold text-lg">Don't have an account?</Text>
            <Link href="/signin" className="text-bgcolor text-lg font-bold underline">Login</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
