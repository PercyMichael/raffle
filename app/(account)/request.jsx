import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import Bus from "../../assets/images/bus.png"
import { SafeAreaView } from 'react-native-safe-area-context'

export default function requestFunds() {
  return (
    <SafeAreaView>
      <View className="w-full h-full justify-center items-center">
        <Image source={Bus} style={{
          width: '80%',
          height: 400,
          objectFit: 'contain'
        }} />
        <View className="w-3/4">
          <Text className="text-5xl font-bold text-bgcolor text-center">Check on the way</Text>
          <Text className="text-2xl font-light text-gray-500">Your item will arrive in 3 to 5 working days</Text>
        </View>
        <CustomButton
          title="Done"
          handlePress={() => { }}
          containerStyles="mt-3 w-3/4 " />
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({})