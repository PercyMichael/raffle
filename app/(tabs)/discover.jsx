import { View, Text, ScrollView } from 'react-native'
import { Tabs, Redirect, Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

import happyImg from "../../assets/images/happy.png"

export default Discover = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="h-full w-full justify-center items-center">
          <Text class>Let's Raffleit!</Text>
          <Image source={happyImg} style={{
            height: 400,
            width: 300,
            resizeMode: 'contain'
          }
          } />
          <Link heref="/happyLogin">Happy Login</Link>
        </View >
      </ScrollView >
    </SafeAreaView >
  )
}
