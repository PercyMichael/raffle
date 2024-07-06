import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignIn from '../(auth)/signin';
import Register from '../(auth)/register';

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signin" component={SignIn} />
      <Stack.Screen name="register" component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})