// routes/OnboardingStack.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../onboarding/onboarding';

const Stack = createStackNavigator();

const OnboardingStack = () => (
  <Stack.Navigator initialRouteName="OnboardingScreen" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
  </Stack.Navigator>
);

export default OnboardingStack;
