import { StyleSheet, Text, View, ScrollView, Image, Link } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'


import CustomButton from '../../components/CustomButton'
import happyImg from "../../assets/images/happy.png"

const accountCreated = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full items-center px-4 justify-center">
          <Text className="font-bold text-5xl text-bgcolor">Let's Raffleit!</Text>
          <Text className="text-xl font-sm text-center mt-4">Congratulations your account as successfully been created. </Text>
          <Image source={happyImg} style={{
            resizeMode: 'contain',
            height: 400,
            width: 300
          }
          }/>
          <CustomButton
          title = "Sign In"
          handlePress={()=> {}}
          containerStyles="w-2/3 mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='gray' style='light'/>
    </SafeAreaView>
  )
}
export default accountCreated;

const styles = StyleSheet.create({})