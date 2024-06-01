import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import welcomeImg from "../../assets/images/welcome.png"
import CustomButton from '../../components/CustomButton'

const welcomeLogin = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full px-4 justify-center items-center">
          <Image source={welcomeImg}
            style={{
              width: 350,
              height: 400,
              resizeMode: 'contain'
            }} />
          <View className="">
            <Text className="font-extrabold text-2xl">Welcome to Raffleit</Text>
            <Text className="text-lg">Welcome to the Raffleit mobile app. Where excitement and opportunity collide!</Text>

            <CustomButton
              title="Login"
              handlePress={() => { }}
              containerStyles="mt-7 mb-5" />
            <View className="flex-row justify-center items-center gap-4">
              <Text className="font-bold text-lg">Don't have an account?</Text>
              <Link href="/signin" className="text-bgcolor text-lg font-bold underline">Register</Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default welcomeLogin

const styles = StyleSheet.create({})