import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useNavigate } from 'expo-router';
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from "expo-status-bar";
import Register from "./(auth)/register";


const onboardImg = require("../assets/images/winner.png")
const supportImg = require("../assets/images/support.png")
const hostImg = require("../assets/images/host.png")


export default function App() {

  const router = useRouter();

  const handleDone = () => {
    router.push('/register');
    // setItem('onboarded', 'true');
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity className="mr-5" {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };

  const StyledNextButton = ({ ...props }) => {
    return (
      <TouchableOpacity className="font-bold text-bgcolor" style={{ marginRight: 22, padding: 10 }} {...props}>
        <Text style={{ color: 'green', fontSize: 16, fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
    );
  };

  const SkipButtonComponent = ({ ...props }) => {
    return (
      <TouchableOpacity className="font-bold text-bgcolor" style={{ marginLeft: 22, padding: 10 }} {...props}>
        <Text style={{ color: 'green', fontSize: 16, fontWeight: "bold" }}>Skip</Text>
      </TouchableOpacity>
    );
  };

  


  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleDone}

      DoneButtonComponent={doneButton}
      NextButtonComponent={StyledNextButton}
      SkipButtonComponent={SkipButtonComponent}

      containerStyles={{ padding: 5 }}

      pages={[
        {
          backgroundColor: '#fff',
          image: <View className="w-full h-full justify-center items-center px-5">
            <Image source={onboardImg}
              style={{
                width: 400, height: 300,
                resizeMode: "contain"
              }} />
            <StatusBar style="auto" />
            <Text className="mt-5 font-bold text-2xl">Win a Raffle Prize!</Text>
            <Text className="mt-2 text-xl text-center">Unveil the excitement and elevate your experience as
              you stand a chance to win a coveted Raffle Prize!.</Text>
          </View>
        },
        {
          backgroundColor: '#fff',
          image: <View className="w-full h-full justify-center items-center px-5">
            <Image source={supportImg}
              style={{
                width: 400, height: 300,
                resizeMode: "contain"
              }} />
            <StatusBar style="auto" />
            <Text className="mt-5 font-bold text-2xl">Support Raffles</Text>
            <Text className="mt-2 text-xl text-center">Your contribution not only adds excitement to the game but also
              makes a meaningful impact</Text>
          </View>
        },
        {
          backgroundColor: '#fff',
          image: <View className="w-full h-full justify-center items-center px-5">
            <Image source={hostImg}
              style={{
                width: 400, height: 300,
                resizeMode: "contain"
              }} />
            <StatusBar style="auto" />
            <Text className="mt-5 font-bold text-2xl">Host a Raffles</Text>
            <Text className="mt-2 text-xl text-center">Hosting a Raffle has never been this seamless and electrifying your
              gateway to turning moments into memories!</Text>
            <View className="justify-center items-center">
              <TouchableOpacity className="bg-bgcolor px-10 py-2 mt-20 rounded">
                <Text className="text-secondary font-bold text-lg">Get Started</Text>
              </TouchableOpacity>
            </View>
          </View>,
        },
      ]}
    />
  )
}