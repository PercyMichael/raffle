import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router } from 'expo-router';
import FormField from '../../components/FormField';
import { Ionicons } from '@expo/vector-icons';


const PageHeader = ({ title }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await loadUser(); // Assume loadUser is defined elsewhere and fetches user data
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
    <View className="p-4 flex-row shadow-lg gap-6 items-center">
      {/* Optional Icon on the Left */}
      <Ionicons name="chevron-back" size={24} color="black" className="mr-2" />

      {/* Header Title */}
      <Text className="text-black text-xl font-semibold">{title}</Text>

    </View>
  );
};

const ShippingAddress = ({ backgroundColor, textColor }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });
  const title = "Shipping Address"; // Set the title as "Billing Address"

  return (
    <ScrollView>
      
      <View style={styles.container}>
        <PageHeader title="Create a Raffle" />
      </View>

      <View style={{ backgroundColor: backgroundColor, paddingVertical: 10, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
        <Text style={[styles.statusTitlle, { color: textColor, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }]}>{title}</Text>
      </View>
      <View style={styles.container}>
        {/* <View style={styles.formgrid}> */}
        <FormField
          title="First Name"
          placeholder="First Name"
          label={form.firstname}
          handleChangeText={(e) => setForm({ ...form, firstname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Last Name"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Company name"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Region"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Street address"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Town"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="County"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Zip code"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <FormField
          title="Phone"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />

        <View className="justify-center items-center w-full">
          <TouchableOpacity onPress={() => router.push('/shipping')} className="w-3/4 bg-bgcolor rounded p-2 mt-4">
            <Text className="font-bold text-lg text-center text-secondary">Save changes</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  formgrid: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statusTitlle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});
