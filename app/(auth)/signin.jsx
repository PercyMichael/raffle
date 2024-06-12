import { View, Text, ScrollView, Image, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Logo from "../../assets/images/raffleitapp.png";
import { login, loadUser } from "../../services/AuthService";


const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const router = useRouter();

  async function handleLogin() {
    setErrors({});

    try {
      await login({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      });


      const user = await loadUser();

      console.log(user);

      // Handle the data and token here
      // Store the token and navigate to another screen
      router.replace('/discover');
    }
    catch (e) {
      console.error('Error:', e);  // Log the error for debugging

      // Check for common HTTP error status codes
      if (e.response) {
        const status = e.response.status;
        if (status === 400) {
          console.error('Bad Request:', e.response.data);
        }
        else if (status === 401) {
          console.error('Unauthorized:', e.response.data);
        }
        else if (status === 422) {
          console.error('Validation Error:', e.response.data);
          setErrors(e.response.data.errors || {});
        }
        else {
          console.error(`Error ${status}:`, e.response.data);
        }
      }
      else if (e.request) {
        console.error('No response received:', e.request);
      }
      else {
        console.error('Error setting up request:', e.message);
      }
    }
  };

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
            placeholder="Email Address"
            label={email}
            handleChangeText={(text) => setEmail(text)}
            otherStyles="mt-7"
            keyboardType="email-address"
            errors={errors.email}
          />

          <FormField
            title="Password"
            placeholder="Enter password"
            label={password}
            handleChangeText={(text) => setPassword(text)}
            otherStyles="mt-5 text-gray-500"
            secureTextEntry={true}
            errors={errors.password}
          />

          <CustomButton
            title="Login"
            handlePress={handleLogin}
            containerStyles="mt-7"
          />

          <View className="flex-row justify-center items-center gap-4 mt-2">
            <Text className="font-bold text-lg">Don't have an account?</Text>
            <Link href="/register" className="text-bgcolor font-bold text-lg underline ml-2">Sign up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignIn;