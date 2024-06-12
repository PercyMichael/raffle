import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect, router } from 'expo-router';

import OnboardingImg from "../assets/images/onboard.png";
import Logo from "../assets/images/logo.png";

const OnboardingScreen = () => {
  return (
    <SafeAreaView className="bg-primary">
      <View>
        <View className="w-full h-full justify-center items-center px-5">
          <Image source={Logo}
            style={{
              width: 200,
              height: 72,
              resizeMode: "contain"
            }} />
          {/* <Text className="mt-5 text-txtcolor" style={styles.title}>Win a Raffle Prize!</Text>
          <Text className="mt-2 text-gray-500 font-medium" style={styles.subtitle}>Unveil the excitement and elevate your experience as
            you stand a chance to win a coveted Raffle Prize!.</Text> */}
        </View>
        <View style={styles.footer}>
          {/* <Pressable className="bg-secondary p-2 rounded">
            <Text className="text-primary font-bold">Continue</Text>

          </Pressable> */}
          <Pressable
            style={({ pressed }) => ({
              // backgroundColor: pressed ? 'darkgray' : 'secondary',
              paddingVertical: 12,
              paddingHorizontal: 24,
            })}
            onPress={() => router.push('/signin')}
            className="bg-secondary p-2 rounded"
          >
            <Text className="text-primary font-bold">Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    alignItems: 'center',
    fontWeight: 700,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  footer: {
    marginTop: 'auto',
    alignSelf: 'center',
    marginBottom: 40,
  }
})