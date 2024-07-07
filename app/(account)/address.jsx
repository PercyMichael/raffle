import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const Address = ({ backgroundColor, textColor }) => {
  const title = "Address"; // Set the title as "Address"

  return (
    <>
      <View style={{ backgroundColor: backgroundColor, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
        <Text style={[styles.statusTitlle, { color: textColor, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }]}>{title}</Text>
      </View>
      <View className="p-4">
        <View className="mt-4">
          <Text className="font-bold text-lg">Billing Address</Text>
          <Text>You have not set up this type of address yet.</Text>
          <TouchableOpacity onPress={() => router.push('/billing')} className="bg-bgcolor rounded w-1/4 p-1 mt-2">
            <Text className="font-bold text-lg text-center text-secondary">Add</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-4">
          <Text className="font-bold text-lg">Shipping Address</Text>
          <Text>You have not set up this type of address yet.</Text>
          <TouchableOpacity onPress={() => router.push('/shipping')} className="bg-bgcolor rounded w-1/4 p-1 mt-2">
            <Text className="font-bold text-lg text-center text-secondary">Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Address;

const styles = StyleSheet.create({
  statusTitlle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});