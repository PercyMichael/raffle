import { Text, View, Image, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { Feather, Ionicons } from '@expo/vector-icons'

import ProfileImg from "../../assets/images/profile.png"

const TabsLayout = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -100}
    >
      <Tabs screenOptions={{ tabBarShowLabel: false, tabBarStyle: { height: 70 } }}>
        <Tabs.Screen
          name='discover'
          options={{
            title: "Discover",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center">
                <Ionicons
                  name={focused ? "search" : "search-outline"}
                  color={focused ? "green" : "#5E5C5C"}
                  size={24} />
                <Text style={styles.tabText(focused)}>Discover</Text>

              </View>
            )
          }}
        />
        <Tabs.Screen
          name='liveraffle'
          options={{
            title: "Live Raffle",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center">
                <Ionicons
                  name={focused ? "ticket" : "ticket-outline"}
                  color={focused ? "green" : "#5E5C5C"}
                  size={24} />
                <Text style={styles.tabText(focused)}>Live raffle</Text>
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='add'
          options={{
            title: "Add",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center"
                color='white'
                backgroundColor={focused ? "green" : "#5E5C5C"}
                padding={6}
                borderRadius={30}
                style={{
                  ...Platform.select({
                    android: {
                      elevation: 8,
                    }
                  },)
                }}
              >
                <Feather
                  name={focused ? "plus" : "plus"}
                  color={focused ? "white" : "white"}
                  size={24}
                />
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='notifications'
          options={{
            title: "Notifications",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center">
                <Ionicons
                  name={focused ? "notifications" : "notifications-outline"}
                  color={focused ? "green" : "#5E5C5C"}
                  size={24} />
                <Text style={styles.tabText(focused)}>Notifications</Text>
              </View>
            )
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <View className="items-center">
                <Image source={ProfileImg}
                  style={{
                    height: 30,
                    width: 30,
                    resizeMode: 'contain'
                  }}
                  color={focused ? "green" : "#5E5C5C"}
                  className="rounded-full" />
                <Text style={styles.tabText(focused)}>Profile</Text>
              </View>
            )
          }}
        />
      </Tabs>
    </KeyboardAvoidingView>)
}


export default TabsLayout;

const styles = StyleSheet.create({
  tabText: (focused) => ({
    color: focused ? 'green' : '#5E5C5C',
    fontWeight: focused ? 'bold' : 'normal',
    fontSize: 10,
    marginTop: 1
  }),
});