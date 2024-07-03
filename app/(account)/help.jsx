import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';


const Help = ({ backgroundColor, textColor }) => {

  const title = "Help & suport";

  return (
    <ScrollView>
      <View style={{ backgroundColor: backgroundColor, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={[styles.statusTitlle, { color: textColor, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }]}>{title}</Text>
      </View>
      <View style={styles.container}>
        <View className="p-4">
          <Text className="font-bold text-lg">General</Text>
          <View className="w-full">
            <TouchableOpacity onPress={() => router.push('/report')} className="w-full bg-paymentbg rounded-lg p-2 mt-4">
              <View style={styles.payment}>
                <Ionicons
                  name="flag"
                  color="gray"
                  size={25}
                />
                <Text className="font-medium text-lg text-gray-500 ml-4">Report a problem</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('')} className="w-full bg-paymentbg rounded-lg p-2 mt-4">
              <View style={styles.payment}>
                <FontAwesome
                  name="book"
                  color="gray"
                  size={25}
                />
                <Text className="font-medium text-lg text-gray-500 ml-4">Terms & Policies</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  statusTitlle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  payment: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
