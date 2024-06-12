import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomText from '../../constants/fonts'
// import FormField from '../../components/FormField'

const Album = () => {
  const [form, setForm] = useState({
    name: '',
  })

  return (
    <SafeAreaView>
      <View className="w-full h-full px-5">
        <Text className="font-bold mt-2 text-2xl">What would you love to be addressed as?</Text>
        <Text className="font-medium text-gray-500 mt-2">Upload 2 photos to continue. Your first image will be your profile picture.
          Your second and third image will be used as your cover image. More changes
          can be mage in settings.</Text>
        {/* <FormField
          title="Full Name"
          placeholder="Full name"
          label={form.name}
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        /> */}
        <View className="absolute bottom-10 w-full items-center">
          <CustomButton
            title="Continue"
            handlePress={() => { }}
            containerStyles="mt-7 w-3/4 justify-center items-center" />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Album;