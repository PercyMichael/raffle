import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import FormField from '../../components/FormField';
import { loadUser } from '../../services/AuthService';
import { router } from 'expo-router'; // Verify import

const PageHeader = ({ title }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await loadUser(); // Implement loadUser function
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
    <View style={styles.header} className="gap-4">
      <Ionicons name="chevron-back" size={24} color="black" style={styles.icon} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const Fundraising = ({ backgroundColor, textColor }) => {
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState('');
  const [co, setCO] = useState('');
  const [address, setAddress] = useState('');
  const [addressline, setAddressLine] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Create a Raffle" />
      </View>

      <View className="p-4">
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
          <Text style={[styles.statusTitle, { color: textColor }]}>Fundraising Check Address</Text>
        </View>

        <View style={styles.container}>
          <FormField
            title="Name"
            placeholder="Name"
            value={name}
            handleChangeText={setName}
            otherStyles={styles.formField}
            errors={errors.name}
          />
          <FormField
            title="CO"
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
            errors={errors.co}
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
          <FormField
            title="Address"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="Address Line 2"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="City"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="State"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="Zip code"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          
          <FormField
            title="Phone Number"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />

          <CheckBox
            title="I have read and agree to the Terms and Conditions"
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
          />

          <TouchableOpacity onPress={() => router.push('/shipping')} style={styles.button} className="bg-bgcolor">
            <Text style={styles.buttonText}>Proceed</Text>
          </TouchableOpacity>
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
  input: {
    marginTop: 10,
    width: '100%',
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontSize: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Fundraising;
