import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';

const BillingAddress = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText} className="bg-actionbtn p-2">Billing address</Text>
        <View className="p-4">
          <Text className="text-center font-bold">Setup your address to receive check</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Save changes"
          handlePress={() => { }}
          containerStyles={styles.button}
        />
      </View>
    </View>
  );
};

export default BillingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: '#actionbtn',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
