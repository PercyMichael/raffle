import { Text, View, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, useNavigate, Link } from 'expo-router';
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from "expo-status-bar";
import Register from "./(auth)/register";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";


const onboardImg = require("../assets/images/winner.png")
const supportImg = require("../assets/images/support.png")
const hostImg = require("../assets/images/host.png")


export default function App() {
  const [form, setForm] = useState({
    name: '',
  })
  return (
    <SafeAreaView>
      <View className="w-full h-full px-5">
        <Text className="font-bold mt-2 text-2xl">What would you love to be addressed as?</Text>
        <Text className="font-medium">Upload 2 photos to continue. Your first image will be your profile picture. 
          Your second and third image will be used as your cover image. More changes 
          can be mage in settings.</Text>
        <FormField
          title="Full Name"
          placeholder="Full name"
          label={form.name}
          handleChangeText={(e) => setForm({ ...form, name: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <Link href="/album">Full Name</Link>
        <View className="absolute bottom-10 w-full items-center">
          <CustomButton
            title="Continue"
            handlePress={() => { }}
            containerStyles="mt-7 w-3/4 justify-center items-center" />
        </View>
      </View>
    </SafeAreaView>
  )

  // const router = useRouter();

  // const handleDone = () => {
  //   router.push('/register');
  // };

  // const doneButton = ({ ...props }) => {
  //   return (
  //     <TouchableOpacity className="mr-5" {...props}>
  //       <Text>Done</Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const StyledNextButton = ({ ...props }) => {
  //   return (
  //     <TouchableOpacity className="font-bold text-bgcolor" style={{ marginRight: 22, padding: 10 }} {...props}>
  //       <Text style={{ color: 'green', fontSize: 16, fontWeight: "bold" }}>Next</Text>
  //     </TouchableOpacity>
  //   );
  // };

  // const SkipButtonComponent = ({ ...props }) => {
  //   return (
  //     <TouchableOpacity className="font-bold text-bgcolor" style={{ marginLeft: 22, padding: 10 }} {...props}>
  //       <Text style={{ color: 'green', fontSize: 16, fontWeight: "bold" }}>Skip</Text>
  //     </TouchableOpacity>
  //   );
  // };




  // return (
  //   <Onboarding
  //     onDone={handleDone}
  //     onSkip={handleDone}

  //     DoneButtonComponent={doneButton}
  //     NextButtonComponent={StyledNextButton}
  //     SkipButtonComponent={SkipButtonComponent}

  //     containerStyles={{ padding: 5 }}

  //     pages={[
  //       {
  //         backgroundColor: '#fff',
  //         image: <View className="w-full h-full justify-center items-center px-5">
  //           <Image source={onboardImg}
  //             style={{
  //               width: 400, height: 300,
  //               resizeMode: "contain"
  //             }} />
  //           <StatusBar style="auto" />
  //           <Text className="mt-5 font-bold text-2xl">Win a Raffle Prize!</Text>
  //           <Text className="mt-2 text-xl text-center">Unveil the excitement and elevate your experience as
  //             you stand a chance to win a coveted Raffle Prize!.</Text>
  //         </View>
  //       },
  //       {
  //         backgroundColor: '#fff',
  //         image: <View className="w-full h-full justify-center items-center px-5">
  //           <Image source={supportImg}
  //             style={{
  //               width: 400, height: 300,
  //               resizeMode: "contain"
  //             }} />
  //           <StatusBar style="auto" />
  //           <Text className="mt-5 font-bold text-2xl">Support Raffles</Text>
  //           <Text className="mt-2 text-xl text-center">Your contribution not only adds excitement to the game but also
  //             makes a meaningful impact</Text>
  //         </View>
  //       },
  //       {
  //         backgroundColor: '#fff',
  //         image: <View className="w-full h-full justify-center items-center px-5">
  //           <Image source={hostImg}
  //             style={{
  //               width: 400, height: 300,
  //               resizeMode: "contain"
  //             }} />
  //           <StatusBar style="auto" />
  //           <Text className="mt-5 font-bold text-2xl">Host a Raffles</Text>
  //           <Text className="mt-2 text-xl text-center">Hosting a Raffle has never been this seamless and electrifying your
  //             gateway to turning moments into memories!</Text>
  //           <View className="justify-center items-center">
  //             <TouchableOpacity className="bg-bgcolor px-10 py-2 mt-20 rounded">
  //               <Text className="text-secondary font-bold text-lg">Get Started</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>,
  //       },
  //     ]}
  //   />
  // )
}