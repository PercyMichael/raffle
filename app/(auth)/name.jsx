import { StyleSheet, Text, View, Switch } from 'react-native'
import React, { useState } from 'react'
import FormField from '../../components/FormField'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function fullName() {
  const [form, setForm] = useState({
    name: '',
  })
  return (
    <SafeAreaView>
      <View className="w-full h-full px-5">
        <Text className="font-bold text-2xl">Let your album speak for you</Text>
        <FormField
          title="Full Name"
          placeholder="Full name"
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
