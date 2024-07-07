// routes/AuthStack.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import LoginWelcome from '../(auth)/loginWelcome';
import Signin from '../(auth)/signin';
import Register from '../(auth)/register';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="LoginWelcome" screenOptions={{ headerShown: false }} >
    <Stack.Screen name="LoginWelcome" component={LoginWelcome} />
    <Stack.Screen name="Signin" component={Signin} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthStack;

