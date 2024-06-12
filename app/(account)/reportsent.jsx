import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View, TouchableOpacity, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import Mastercard from "../../assets/images/mastercard.png"

const Help = ({ backgroundColor, textColor }) => {

  const title = "Report a problem";
  const [text, setText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={{ backgroundColor: backgroundColor, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={[styles.statusTitlle, { color: textColor, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }]}>{title}</Text>
        </View>
        <View style={styles.report}>
          <View style={styles.container}>
            <View className="p-4">
              <View className="w-full">
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textArea}
                    placeholder="Type something..."
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={text}
                    onChangeText={(text) => setText(text)}
                    className="rounded-lg border border-gray-500 p-4"
                  />
                </View>
              </View>
            </View>
            <View className="justify-center items-center w-full p-4">
              <TouchableOpacity onPress={() => router.push('/shipping')} className="w-full justify-center bg-paymentbg rounded p-2">
                <View style={styles.screenshot}>
                  <Ionicons
                    name="document"
                    color="gray"
                    size={25}
                  />
                  <Text className="font-medium text-lg text-center text-gray-500">Take a screenshot</Text>
                </View>
              </TouchableOpacity>
              {/* <Text style={styles.previewText} className="mt-2">Preview: {text}</Text> */}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.sendButtonContainer}>
        <TouchableOpacity onPress={() => router.push('')} className="w-3/4 justify-center bg-bgcolor rounded p-2">
          <View style={styles.screenshot}>
            <Text className="font-medium text-lg text-center text-secondary">Send</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  screenshot: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAreaContainer: {
    // borderColor: '#ccc',
    // borderWidth: 1,
    // padding: 5,
  },
  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    textAlignVertical: 'top', // for Android
  },
  report: {
    marginTop: 'auto',
  },
  sendButtonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
