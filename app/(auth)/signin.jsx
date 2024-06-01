import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import FormField from "../../components/FormField"
import CustomButton from "../../components/CustomButton"
import Logo from "../../assets/images/raffleitapp.png"

export default SignIn = () => {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (newValue) => {
    setIsChecked(newValue);
  };




  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full px-5">
          <View className="items-center justify-center">
            <Image source={Logo} />
            <Text className="font-black mt-4 text-xl">Login to Raffleit</Text>
            <Text className="mt-2 text-lg font-gray">We are happy to see you again!</Text>
          </View>

          <FormField
            title="Email"
            placeholder="Enter email Address"
            label={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            placeholder="Enter your password"
            label={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
          />

          <CustomButton
            title="Login"
            handlePress={() => { }}
            containerStyles="mt-7" />
          <View className="flex-row justify-center items-center gap-4">
            <Text className="font-bold text-lg">Don't have an account?</Text>
            <Link href="/register" className="text-bgcolor font-bold text-lg underline ml-2">Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}