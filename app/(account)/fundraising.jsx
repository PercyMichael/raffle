import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter } from 'expo-router';
import { create_fundraising } from '../../services/AuthService';
import Header from '../../components/header';// Adjust path as necessary

const Fundraising = ({ backgroundColor = '#fff', textColor = '#000' }) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [co, setCO] = useState('');
  const [address, setAddress] = useState('');
  const [addressline, setAddressLine] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleFundraiser = async () => {
    setErrors({}); // Reset errors

    // Frontend validation
    if (!name || !co || !address || !city || !state || !zipcode || !phone) {
      Alert.alert('Error', 'All fields except Address Line 2 are required.', [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],);
      return;
    }

    if (!checked) {
      Alert.alert('Error', 'You must agree to the terms and conditions.', [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],);
      return;
    }

    try {
      const fundData = {
        name,
        co,
        address,
        addressline,
        city,
        state,
        zipcode,
        phone,
      };

      console.log('Fundraiser data to register:', fundData);

      const response = await create_fundraising(fundData);

      console.log('API response:', response);

      if (response.message && response.message.includes("successfully")) {
        console.log('Fundraiser registered successfully:', response.data);
        router.replace('/addraffle');
      } else {
        console.log('Fundraiser registration failed:', response.message);
        Alert.alert('Error', `Failed to register fundraising details: ${response.message}`, [
          { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],);
      }
    } catch (error) {
      console.error('Error registering fundraising details:', error);
      Alert.alert('Error', 'Failed to register fundraising details. Please try again.', [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],);
    }
  };

  return (
    <ScrollView>
      <Header title="Fundraising Address" />

      <View style={styles.form}>
        <View style={styles.formContainer}>
          <FormField
            title="Name"
            placeholder="Name"
            value={name}
            handleChangeText={setName}
            otherStyles={styles.formField}
            errors={errors.name}
          />
          <FormField
            title="Contact Person"
            placeholder="C/O"
            value={co}
            handleChangeText={setCO}
            otherStyles={styles.formField}
            errors={errors.co}
          />
          <FormField
            title="Address"
            placeholder="Address"
            value={address}
            handleChangeText={setAddress}
            otherStyles={styles.formField}
            errors={errors.address}
          />
          <FormField
            title="Address Line 2"
            placeholder="Address Line 2"
            value={addressline}
            handleChangeText={setAddressLine}
            otherStyles={styles.formField}
            errors={errors.addressline}
          />
          <FormField
            title="City"
            placeholder="City"
            value={city}
            handleChangeText={setCity}
            otherStyles={styles.formField}
            errors={errors.city}
          />
          <FormField
            title="State"
            placeholder="State"
            value={state}
            handleChangeText={setState}
            otherStyles={styles.formField}
            errors={errors.state}
          />
          <FormField
            title="Zipcode"
            placeholder="Zipcode"
            value={zipcode}
            handleChangeText={setZipcode}
            otherStyles={styles.formField}
            errors={errors.zipcode}
          />
          <FormField
            title="Phone Number"
            placeholder="Phone number"
            value={phone}
            handleChangeText={setPhone}
            otherStyles={styles.formField}
            errors={errors.phone}
          />

          <CheckBox
            title="I have read and agree to the Terms and Conditions"
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
          />

          <CustomButton
            title="Register"
            handlePress={handleFundraiser}
            containerStyles={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    padding: 16,
  },
  formContainer: {
    paddingVertical: 20,
  },
  formField: {
    marginVertical: 8,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 16,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#6200EE',
  },
});

export default Fundraising;
