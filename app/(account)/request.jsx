import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import Bus from "../../assets/images/bus.png";
import { SafeAreaView } from 'react-native-safe-area-context';

const RequestFunds = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={Bus} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Check on the way</Text>
          <Text style={styles.subtitle}>Your item will arrive in 3 to 5 working days</Text>
        </View>
        <CustomButton
          title="Done"
          handlePress={() => { }}
          containerStyles={styles.buttonContainer} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: 400,
    resizeMode: 'contain',
  },
  textContainer: {
    width: '75%',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black', // Use your preferred color
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#888', // Use your preferred color
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '75%',
  },
});

export default RequestFunds;