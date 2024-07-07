// routes/HomeStack.jsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTabs from '../(tabs)/_layout';
import Profile from '../(account)/profile';
import AddRaffle from '../(account)/addraffle';
import Fundraising from '../(account)/fundraising';
import Raffle from '../(account)/raffle';
import Billing from '../(account)/billing';
import Discover from '../(tabs)/discover';
import CreateOrganisation from '../(account)/organisation';
import AccountDetails from '../(account)/accdetails';
import CreateRaffle from '../(account)/createraffle';
import UpdateRegister from '../(auth)/update_register';
import AccountBio from '../(account)/accountbio';
import Address from '../(account)/address';
import Help from '../(account)/help';
import LiveRaffle from '../(tabs)/liveraffle';
import PaymentMethod from '../(account)/payment';
// Other routes...

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="HomeTabs" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeTabs" component={HomeTabs} />
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="AddRaffle" component={AddRaffle} />
    <Stack.Screen name="Fundraising" component={Fundraising} />
    <Stack.Screen name="Billing" component={Billing} />
    <Stack.Screen name="Discover" component={Discover} />
    <Stack.Screen name="Raffle" component={Raffle} />
    <Stack.Screen name="CreateOrganisation" component={CreateOrganisation} />
    <Stack.Screen name="AccountDetails" component={AccountDetails} />
    <Stack.Screen name="CreateRaffle" component={CreateRaffle} />
    <Stack.Screen name="UpdateRegister" component={UpdateRegister} />
    <Stack.Screen name="AccountBio" component={AccountBio} />
    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="Help" component={Help} />
    <Stack.Screen name="LiveRaffle" component={LiveRaffle} />
    <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
  </Stack.Navigator>
);

export default HomeStack;
