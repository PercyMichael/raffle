import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput, Pressable, Key, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profImg from "../../assets/images/profile.png";
import { useState } from 'react';
import { Redirect, router, Link } from 'expo-router';
import CustomButton from '../../components/CustomButton';

import Background from "../../assets/images/background.png"
import Laptop from "../../assets/images/laptop.png"


const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Discover</Text>
        </View>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <Ionicons
              name="notifications"
              color="black"
              size={24}
            />
          </TouchableOpacity>

          <Image
            source={profImg}
            style={styles.profileImage}
          />
        </View>
      </View>
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
      <View className="p-4">
        <View>
        </View>
        <View style={styles.status} className="gap-2">
          <View className="p-2 bg-bgcolor rounded">
            <Text className="text-secondary font-bold">Popular</Text>
          </View>
          <View className="border rounded border-gray-400 p-2">
            <Text className="text-gray-500 font-bold">Newest</Text>
          </View>
          <View className="border rounded border-gray-400 p-2">
            <Text className="text-gray-500 font-bold">Recommended</Text>
          </View>
          <View className="border rounded border-gray-400 p-2">
            <Text className="text-gray-500 font-bold">Trending</Text>
          </View>
        </View>
        <View className="mt-4">
          <Text className="font-bold text-xl">Trending raffles</Text>
          <View style={styles.raffles}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
                    handlePress={() => router.push('/liveraffle')}
                    containerStyles="mt-3 justify-center items-center" />
                </View>
              </View>
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
            </ScrollView>
          </View>
        </View>
        <View className="mt-4">
          <Text className="font-bold text-xl">Recommended raffles</Text>
          <View style={styles.raffles}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
              <View className="w-3/4 mt-4 bg-actionbtn p-2 rounded" style={styles.raffleItem}>
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
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    // Ensures this view takes up necessary space
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 10, // Adds spacing between the icon and the image
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  overlayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  status: {
    flexDirection: 'row',
  },
  raffles: {
    flexDirection: 'row',
  },
  raffleItem: {
    width: 300,
    marginRight: 8,
  },
});
