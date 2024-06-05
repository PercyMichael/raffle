import { View, Text, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Logo from "../../assets/images/raffleitapp.png";

const Register = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleRegister = () => {
    // Add registration logic here
    router.push('/discover');
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
            label={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="Enter password"
            label={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
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
