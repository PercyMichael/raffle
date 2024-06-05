import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Redirect, router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const ShippingAddress = ({ backgroundColor, textColor }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });
  const title = "Shipping Address"; // Set the title as "Billing Address"

  return (
    <ScrollView>
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
