// AppNavigation.jsx
import React from "react";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
// import OnboardingStack from './OnboardingStack';

const Stack = createStackNavigator();

const AppNavigation = () => {
  const authToken = useSelector((state) => state.auth.token);
  // const authToken = true;

  return (
    <Stack.Navigator
      initialRouteName="OnboardingStack"
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="OnboardingStack" component={OnboardingStack} /> */}
      {authToken ? (
        <Stack.Screen name="Home" component={HomeStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppNavigation;
