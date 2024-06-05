import { View, Text, ScrollView, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Redirect, router } from 'expo-router';

import CustomButton from '../../components/CustomButton';

import profileImg from "../../assets/images/profile.png";

const Menu = () => {
  return (
    <ScrollView>
      <View style={styles.container} className="p-4">
        <View style={styles.contmenu} className="p-2">
          <Text style={styles.more}>More</Text>
          <View style={styles.notificationIcon}>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon} className="">
              <FontAwesome
                name="gear"
                color="gray"
                size={24}
              />
            </Pressable>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon} className="rounded-full"
            >
              <Ionicons
                name="search"
                color="gray"
                size={24}
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.about}>
          <Image
            source={profileImg}
            style={{
              height: 50,
              width: 50,
              resizeMode: 'contain'
            }}
            className="rounded-full" />
          <View style={styles.textContainer}>
            <Text style={styles.boldText}>Wilson Bowell</Text>
            <Text style={styles.grayText}>wilsonbowell@example.com</Text>
          </View>
        </View>
        <View className="mt-4 gap-2" style={styles.aboutsect}>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon} className="p-2 rounded"
            >
              <Ionicons
                name="ticket-outline"
                color="green"
                size={24}
              />
              <Text className="font-bold text-lg">Raffles</Text>
            </Pressable>
          </View>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/address')} style={styles.icon} className="p-2 rounded"
            >
              <Ionicons
                name="location"
                color="green"
                size={30}
              />
              <Text className="font-bold text-lg">Address</Text>
            </Pressable>
          </View>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/accdetails')} style={styles.icon} className="p-2 rounded"
            >
              <Ionicons
                name="person-circle-outline"
                color="green"
                size={30}
              />
              <Text className="font-bold text-lg">Account details</Text>
            </Pressable>
          </View>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/payment')} style={styles.icon} className="p-2 rounded"
            >
              <Ionicons
                name="wallet"
                color="green"
                size={30}
              />
              <Text className="font-bold text-lg">Payment method</Text>
            </Pressable>
          </View>
        </View>
        <View className="mt-4">
          <View className="p-2 gap-4">
            <TouchableOpacity onPress={() => router.push('/settings')} className="bg-secondary p-2" style={styles.button}>
              <FontAwesome
                name="gear"
                color="gray"
                size={30}
              />
              <Text className="font-bold text-lg ml-3">Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/help')} className="bg-secondary p-2" style={styles.button}>
              <Ionicons
                name="help-circle-outline"
                color="gray"
                size={30}
              />
              <Text className="font-bold text-lg ml-3">Help & support</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-10">
          <CustomButton
            title="Become a host"
            handlePress={() => { }}
            containerStyles="mt-3 justify-center items-center" />
          <CustomButton
            title="Logout"
            handlePress={() => { }}
            containerStyles="mt-3 justify-center items-center"
          />
        </View>
      </View>

    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    padding: 4,
  },
  contmenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notificationIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  about: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    margin: 6
  },
  textContainer: {
    marginLeft: 10,
  },
  more: {
    fontSize: 20,
    fontWeight: '700',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000', // Adjust the color as needed
  },
  grayText: {
    fontWeight: 'bold',
    color: '#808080', // Adjust the color as needed
  },
  aboutsect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10
  },
  ticket: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    borderRadius: 8
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Menu;
