import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import FormField from '../../components/FormField';

const BillingAddress = ({ backgroundColor, textColor }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });
  const title = "Account details";

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
          title="Display name"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <Text className="mb-3 font-medium text-gray-500">This is how your name will be displayed in the account section</Text>
        <FormField
          title="Email"
          placeholder="Email address"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
        />
        <View className="mt-10">
          <Text className="font-bold text-xl mb-2">Password Change</Text>
          <FormField
            title="Current password (leave blank to leave unchanged)"
            placeholder="******"
            label={form.lastname}
            handleChangeText={(e) => setForm({ ...form, lastname: e })}
            otherStyles={{ marginTop: 7, width: '100%' }}
          />
          <FormField
            title="New password (leave blank to leave unchanged)"
            placeholder="******"
            label={form.lastname}
            handleChangeText={(e) => setForm({ ...form, lastname: e })}
            otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
          />
          <FormField
            title="Confirm Password"
            placeholder="******"
            label={form.lastname}
            handleChangeText={(e) => setForm({ ...form, lastname: e })}
            otherStyles={{ marginTop: 7, width: '100%' }} // Set width to 100%
          />
        </View>

        <View className="justify-center items-center w-full">
          <TouchableOpacity onPress={() => router.push('/shipping')} className="w-3/4 bg-bgcolor rounded p-2 mt-4">
            <Text className="font-bold text-lg text-center text-secondary">Save changes</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

export default BillingAddress;

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
