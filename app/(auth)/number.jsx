import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'
import CustomButton from '../../components/CustomButton'

const MobileNumber = () => {
  const [form, setForm] = useState({
    nnumber: '',
  })
  return (
    <SafeAreaView>
      <View className="w-full h-full px-5">
        <Text className="font-bold mt-2 text-2xl">What's your mobile number?</Text>
        <Text className="font-medium">We will send a code to verify this number</Text>
        <FormField
          title="Phone number"
          placeholder="+256 Phone number"
          label={form.name}
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <View className="absolute bottom-10 w-full items-center">
          <CustomButton
            title="Continue"
            handlePress={() => { }}
            containerStyles="mt-7 w-3/4" />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default MobileNumber;