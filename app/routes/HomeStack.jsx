import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Raffle from '../(account)/raffle';
import AddRaffle from '../(account)/addraffle';
import OnboardingScreen from '../onboarding/onboarding';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Raffle" component={Raffle} />
      <Stack.Screen name="AddRaffle" component={AddRaffle} />
    </Stack.Navigator>
  );
};

export default HomeStack;
