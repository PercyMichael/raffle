import React from 'react';
import { View, Image, ScrollView, Text, FlatList, StyleSheet } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons'

import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';


import profileImg from "../../assets/images/profile1.png";
import profImage from "../../assets/images/profile.png";
import Laptop from "../../assets/images/laptop.png"

export default function Profile() {

  return (
    // <SafeAreaView className="flex-1">
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="relative">
        <Image source={profileImg} style={{ height: 400 }} className="w-full rounded" />
        <View className="absolute left-10 -bottom-10">
          <Image source={profImage} style={{ height: 70, width: 70, borderRadius: 100, borderWidth: 3, borderColor: 'white' }} className="rounded-full border" />
        </View>
      </View>
      <View className="p-4 mt-10">
        <View className="w-full p-4" style={styles.Container}>
          <View style={styles.profile}>
            <Text className="font-bold text-xl">
              Willson Bowell
            </Text>
            <Text>Wilson Bowell</Text>
          </View>
          <View style={styles.profile}>
            <CustomButton
              title="Host Raffle"
              handlePress={() => { }}
              containerStyles=""
            />
          </View>
        </View>
        <View className="bg-bgcolor w-1/4 p-2 rounded">
          <Text className="font-bold text-white">Total raffles</Text>
          <View style={styles.total} className="mt-1">
            <Ionicons
              name={"ticket"}
              color={"white"}
              size={15} />
            <Text className="ml-2 text-white font-bold">75</Text>
          </View>
        </View>
        <View style={styles.income} className="mt-4">
          <View style={styles.incomebox} className="bg-primary rounded p-2">
            <Text className="font-bold text-secondary">Raffle Income</Text>
            <Text className="font-bold text-secondary">$ 4000</Text>
          </View>
          <View style={styles.incomebox} className="bg-bglight rounded p-2 ml-2">
            <Text className="font-bold text-primary">Raffle Income</Text>
            <Text className="text-darkbg font-bold">$ 5000</Text>
          </View>
          <View style={styles.incomebox} className="rounded bg-bgcolor p-2 ml-2">
            <Text className="font-bold text-secondary">Raffle Income</Text>
            <Text className="font-bold text-secondary">$ 3000</Text>
          </View>
        </View>
        <CustomButton
          title="Request funds"
          handlePress={() => { }}
          containerStyles="mt-6"
        />
        <Text className="text-xl font-bold mt-4">About</Text>
        <Text className="mt-2">Passionate about the thrill of chance and the excitement of
          winning! Join me on this journey of anticipation and discovery
          in the world of raffles. As an avid participant, I'm here to
          explore, engage, and, of course, win some fantastic prizes.
          Let's share the joy of surprises together!</Text>
        <Text className="text-xl font-bold mt-4">Action button</Text>
        <View style={styles.action} className="mt-4 p-2 gap-2">
          <View style={styles.actionbtn} className="bg-actionbtn p-2 rounded">
            <Ionicons
              name={"ticket"}
              color={"green"}
              size={24} />
            <Text className="font-bold mt-1">Hosted raffles</Text>
          </View>
          <View style={styles.actionbtn} className="bg-actionbtn p-2 rounded">
            <Ionicons
              name={"location"}
              color={"green"}
              size={24} />
            <Text className="font-bold mt-1">Billing Address</Text>
          </View>
          <View style={styles.actionbtn} className="bg-actionbtn p-2 rounded">
            <Ionicons
              name={"person"}
              color={"green"}
              size={24} />
            <Text className="font-bold mt-1">Account details</Text>
          </View>
        </View>
        <Text className="text-xl font-bold mt-4">Raffles</Text>
        <View style={styles.rafts} className="mt-2">
          <View className="bg-bgcolor rounded p-2">
            <Text className="font-bold text-secondary">Ongoing raffles</Text>
          </View>
          <View className="border border-green-400 rounded p-2 ml-4">
            <Text className="font-bold">Ended raffles</Text>
          </View>
        </View>
        <View className="mt-4">
          <Text className="font-bold text-xl">Ongoing raffles</Text>
          <View className="w-full mt-4 bg-actionbtn p-2 rounded">
            <Image source={Laptop}
              style={{
                width: '100%',
                height: 200
              }} className="rounded" />
            <Text className="mt-2 font-bold text-base">Victor the greatest designer</Text>
            <Text className="text-gray-500 font-bold">UI/UX</Text>
            <Text className="text-xs font-bold text-gray-500">Victorakinola.com</Text>
            <Text className="text-base font-bold text-gray-500">20h 33m</Text>
            <CustomButton
              title="Ongoing raffle"
              handlePress={() => { }}
              containerStyles="mt-3 justify-center items-center bg-inactivebtn" />
          </View>
        </View>
      </View>
    </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  profile: {
    width: '50%',
  },
  total: {
    flexDirection: 'row',
  },
  income: {
    flexDirection: 'row',
  },
  incomebox: {
    width: '30%',
    padding: 5
  },
  rafts: {
    flex: 1,
    flexDirection: 'row'
  },
  action: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '10'
  },
  actionbtn: {
    width: '45%',
  }
})