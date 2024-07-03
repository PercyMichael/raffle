import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton'; // Ensure this is imported correctly
import { useRouter } from 'expo-router';
import { loadUser, create_fundraising } from '../../services/AuthService'; // Adjust paths as necessary

const PageHeader = ({ title }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await loadUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color="black" style={styles.icon} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

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
    // Reset errors
    setErrors({});

    // Frontend validation
    if (!name || !co || !address || !city || !state || !zipcode || !phone) {
      Alert.alert('Error', 'All fields except Address Line 2 are required.');
      return;
    }

    if (!checked) {
      Alert.alert('Error', 'You must agree to the terms and conditions.');
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

      // Check for the 'message' property in the response
      if (response.message && response.message.includes("successfully")) {
        console.log('Fundraiser registered successfully:', response.data);
        router.replace('/addraffle');
      } else {
        console.log('Fundraiser registration failed:', response.message);
        Alert.alert('Error', `Failed to register organisation: ${response.message}`);
      }
    } catch (error) {
      console.error('Error registering organisation:', error);
      Alert.alert('Error', 'Failed to register organisation. Please try again.');
    }

  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Create a Raffle" />
      </View>

      <View style={styles.form}>
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
          <Text style={[styles.statusTitle, { color: textColor }]}>Fundraising Check Address</Text>
        </View>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
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
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Fundraising;
