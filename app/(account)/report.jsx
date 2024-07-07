import React from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const Help = ({ backgroundColor, textColor }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.center}>
          <Text style={styles.text}>Your complaint has been received. Our customer care unit will review your complaint and resolve the issue.</Text>
          <Text style={styles.text}>If your complaint is not resolved in 3-5 working days, kindly reach out to us once again. Thanks.</Text>
        </View>
      </ScrollView>
      <View style={styles.sendButtonContainer}>
        <TouchableOpacity onPress={() => router.push('/')} style={styles.sendButton} className="bg-bgcolor">
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600'
  },
  sendButtonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  sendButton: {
    width: '75%',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  },
  sendButtonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: '600'
  },
});
