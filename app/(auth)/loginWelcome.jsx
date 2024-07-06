import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

import welcomeImg from "../../assets/images/welcome.png";
import CustomButton from '../../components/CustomButton';

const WelcomeLogin = () => {
  const [errors, setErrors] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    setErrors('');

    try {
      // Navigate to the register screen
      navigation.navigate('Reason'); // Ensure 'Register' matches the name of your register screen in the stack navigator
    } catch (error) {
      console.log('Error in handleRegister:', error);
      // Handle errors appropriately
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image source={welcomeImg} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Welcome to Raffleit</Text>
            <Text style={styles.subtitle}>Welcome to the Raffleit mobile app. Where excitement and opportunity collide!</Text>
            {/* 
            <CustomButton
              title="Register"
              handlePress={handleRegister}
              containerStyles={styles.button}
            /> */}

            <Pressable
              style={({ pressed }) => ({
                // backgroundColor: pressed ? 'darkgray' : 'secondary',
                paddingVertical: 12,
                paddingHorizontal: 24,
              })}
              onPress={() => router.push('/signin')}
              className="bg-secondary p-2 rounded"
            >
              <Text className="text-primary font-bold">Register</Text>
            </Pressable>

            <View style={styles.linkContainer}>
              <Text style={styles.linkText}>Already have an account ?</Text>
              <Pressable
                style={({ pressed }) => ({
                  // backgroundColor: pressed ? 'darkgray' : 'secondary',
                  paddingVertical: 12,
                  paddingHorizontal: 24,
                })}
                onPress={handleRegister}
                className="bg-secondary p-2 rounded"
              >
                <Text className="text-primary font-bold">Login</Text>
              </Pressable>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeLogin;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    marginBottom: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  linkText: {
    fontSize: 16,
    marginRight: 5,
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
