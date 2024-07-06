import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';

import Discover from '../(tabs)/discover';
import LiveRaffle from '../(tabs)/liveraffle';
import Add from '../(tabs)/add';
import Notifications from '../(tabs)/notifications';
import Profile from '../(tabs)/profile';



const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="LiveRaffle" component={LiveRaffle} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default HomeTabs

const styles = StyleSheet.create({})