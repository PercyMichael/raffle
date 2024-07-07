import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import Mastercard from "../../assets/images/mastercard.png"

const PaymentMethod = ({ backgroundColor, textColor }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });
  const title = "Payment method";

  return (
    <ScrollView>
      <View style={{ backgroundColor: backgroundColor, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={[styles.statusTitlle, { color: textColor, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }]}>{title}</Text>
      </View>
      <View style={styles.container}>
        <View className="p-4">
          <View className="justify-center items-center w-full">
            <TouchableOpacity onPress={() => router.push('')} className="w-full bg-paymentbg rounded-lg p-2 mt-4">
              <View style={styles.payment}>
                <Image source={Mastercard} style={{
                  height: 35,
                  width: 35,
                  resizeMode: 'contain'
                }} />
                <Text className="font-bold text-lg text-primary ml-4">2343 2337 8778 6789</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="justify-center items-center w-full">
          <TouchableOpacity onPress={() => router.push('')} className="w-3/4 border border-gray-700 rounded-lg p-2 mt-4">
            <Text className="font-bold text-lg text-center text-primary">Add new method</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default PaymentMethod;

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
