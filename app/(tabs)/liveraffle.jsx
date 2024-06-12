import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Laptop from "../../assets/images/laptop.png";
import CustomButton from '../../components/CustomButton';
import { Redirect, router } from 'expo-router';

const data = [{ label: 'Example Item', value: '1' }];

const LiveRaffle = () => {



  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20 }}>
        <Text className="font-bold text-xl">Live raffle</Text>
      </View>
      <View>
        <View style={styles.searching}>
          <View style={styles.search}>
            <Ionicons name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="bg-slate-300 rounded p-2"
            />
          </View>
          <View style={styles.dropdown}>
            <View style={styles.item}>
              <Text style={styles.textItem}>{data[0].label}</Text>
              {selectedValue === data[0].value && (
                <AntDesign
                  style={styles.icon}
                  color="black"
                  name="Safety"
                  size={20}
                />
              )}
            </View>
          </View>
        </View>
        <View className="justify-center items-center p-4">
          <View className="w-full bg-actionbtn p-2 rounded" style={styles.raffleItem}>
            <Image source={Laptop}
              style={{
                width: '100%',
                height: 200
              }} className="rounded" />
            <View className="p-2">
              <Text className="mt-2 font-bold text-base">Victor the greatest designer</Text>
              <Text className="text-gray-500 font-bold">UI/UX</Text>
              <Text className="text-xs font-bold text-gray-500">Victorakinola.com</Text>
              <Text className="text-base font-bold text-gray-500">20h 33m</Text>
              <CustomButton
                title="View raffle"
                handlePress={() => router.push('/raffle')}
                containerStyles="mt-3 justify-center items-center" />
            </View>
          </View>
          <View className="w-full mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
            <Image source={Laptop}
              style={{
                width: '100%',
                height: 200
              }} className="rounded" />
            <View className="p-2">
              <Text className="mt-2 font-bold text-base">Victor the greatest designer</Text>
              <Text className="text-gray-500 font-bold">UI/UX</Text>
              <Text className="text-xs font-bold text-gray-500">Victorakinola.com</Text>
              <Text className="text-base font-bold text-gray-500">20h 33m</Text>
              <CustomButton
                title="View raffle"
                handlePress={() => { }}
                containerStyles="mt-3 justify-center items-center" />
            </View>
          </View>
          <View className="w-full mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
            <Image source={Laptop}
              style={{
                width: '100%',
                height: 200
              }} className="rounded" />
            <View className="p-2">
              <Text className="mt-2 font-bold text-base">Victor the greatest designer</Text>
              <Text className="text-gray-500 font-bold">UI/UX</Text>
              <Text className="text-xs font-bold text-gray-500">Victorakinola.com</Text>
              <Text className="text-base font-bold text-gray-500">20h 33m</Text>
              <CustomButton
                title="View raffle"
                handlePress={() => { }}
                containerStyles="mt-3 justify-center items-center" />
            </View>
          </View>
          <View className="w-full mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
            <Image source={Laptop}
              style={{
                width: '100%',
                height: 200
              }} className="rounded" />
            <View className="p-2">
              <Text className="mt-2 font-bold text-base">Victor the greatest designer</Text>
              <Text className="text-gray-500 font-bold">UI/UX</Text>
              <Text className="text-xs font-bold text-gray-500">Victorakinola.com</Text>
              <Text className="text-base font-bold text-gray-500">20h 33m</Text>
              <CustomButton
                title="View raffle"
                handlePress={() => { }}
                containerStyles="mt-3 justify-center items-center" />
            </View>
          </View>
        </View>
      </View>


    </ScrollView>
  );
}

export default LiveRaffle;

const styles = StyleSheet.create({
  searching: {
    flexDirection: 'row',
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 16,
    width: '50%'
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
})