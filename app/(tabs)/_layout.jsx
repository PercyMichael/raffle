import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, Image, Platform, KeyboardAvoidingView, Keyboard, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons } from '@expo/vector-icons';

import profileImg from "../../assets/images/profile.png";

// Import your screens
import Discover from './discover';
import LiveRaffle from '../(tabs)/liveraffle';
import Add from '../(tabs)/add';
import Notifications from './notifications';
import Profile from '../(tabs)/profile';
import { useRoute } from '@react-navigation/native';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  const route = useRoute();
  
  const [keyboardIsVisible, setKeyboardIsVisible] = useState(false);

  const handleKeyboardDidShow = useCallback(() => {
    setKeyboardIsVisible(true);
  }, []);

  const handleKeyboardDidHide = useCallback(() => {
    setKeyboardIsVisible(false);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [handleKeyboardDidShow, handleKeyboardDidHide]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { height: 70, display: keyboardIsVisible ? 'none' : 'flex' }
        }}
      >
        <Tab.Screen
          name='Discover'
          component={Discover}
          options={{
            title: "Discover",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  color={focused ? "green" : "#5E5C5C"}
                  size={24}
                />
                <Text style={styles.tabText(focused)}>Discover</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='LiveRaffle'
          component={LiveRaffle}
          options={{
            title: "Live Raffle",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name={focused ? "ticket" : "ticket-outline"}
                  color={focused ? "green" : "#5E5C5C"}
                  size={24}
                />
                <Text style={styles.tabText(focused)}>Live raffle</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Add'
          component={Add}
          options={{
            title: "Add",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={[
                styles.addIconContainer,
                {
                  backgroundColor: focused ? "green" : "#5E5C5C",
                }
              ]}>
                <Feather
                  name="plus"
                  color="white"
                  size={24}
                />
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Notifications'
          component={Notifications}
          options={{
            title: "Notifications",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Ionicons
                  name={focused ? "notifications" : "notifications-outline"}
                  color={focused ? "green" : "#5E5C5C"}
                  size={24}
                />
                <Text style={styles.tabText(focused)}>Notifications</Text>
              </View>
            )
          }}
        />
        <Tab.Screen
          name='Profile'
          component={Profile}
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={styles.iconContainer}>
                <Image source={profileImg}
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain',
                    borderRadius: 30,
                  }}
                />
                <Text style={styles.tabText(focused)}>Profile</Text>
              </View>
            )
          }}
        />
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({
  tabText: (focused) => ({
    color: focused ? 'green' : '#5E5C5C',
    fontWeight: focused ? 'bold' : 'normal',
    fontSize: 10,
    marginTop: 1
  }),
  iconContainer: {
    alignItems: 'center',
  },
  addIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderRadius: 30,
    ...Platform.select({
      android: {
        elevation: 8,
      }
    }),
  },
});
