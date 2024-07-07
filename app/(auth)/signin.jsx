import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions';
import Logo from '../../assets/images/raffleitapp.png';
import { useNavigation } from '@react-navigation/native';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { loginAPI } from "../../services/AuthService";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async () => {
    setErrors({});

    try {
      const { token, userData } = await loginAPI({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      });

      console.log('User:', userData); // Log user data for debugging

      dispatch(login(token, userData));

      // Navigate to the HomeTabs screen after successful login
      navigation.navigate('HomeTabs');
    } catch (e) {
      console.error('Error:', e);  // Log the error for debugging

      // Handle specific HTTP error status codes
      if (e.response) {
        const status = e.response.status;
        if (status === 400) {
          console.error('Bad Request:', e.response.data);
        } else if (status === 401) {
          console.error('Unauthorized:', e.response.data);
        } else if (status === 422) {
          console.error('Validation Error:', e.response.data);
          setErrors(e.response.data.errors || {});
        } else {
          console.error(`Error ${status}:`, e.response.data);
        }
      } else if (e.request) {
        console.error('No response received:', e.request);
      } else {
        console.error('Error setting up request:', e.message);
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.title}>Login to Raffleit</Text>
            <Text style={styles.subtitle}>We are happy to see you again!</Text>
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

          {errors.general && (
            <Text style={styles.errorText}>{errors.general}</Text>
          )}

          <CustomButton
            title="Login"
            handlePress={handleLogin}
            containerStyles="mt-7"
          />

          <View style={styles.linkContainer}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.link}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    color: '#888',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});

export default SignIn;
