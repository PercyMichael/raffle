import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingStack from './routes/OnboardingStack'; // Replace with actual import
import HomeStack from './routes/HomeStack'; // Replace with actual import
import AuthStack from './routes/AuthStack'; // Replace with actual import

const MainStack = createStackNavigator();

const App = () => (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Onboarding" component={OnboardingStack} />
      <MainStack.Screen name="Auth" component={AuthStack} />
      <MainStack.Screen name="Home" component={HomeStack} />
    </MainStack.Navigator>
);

export default App;
