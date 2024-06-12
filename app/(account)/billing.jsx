import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FormField from '../../components/FormField'; // Import your FormField component

const BillingAddress = ({ backgroundColor, textColor }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });
  const title = "Billing Address";

  return (
    <ScrollView>
      <View style={[styles.header, { backgroundColor }]}>
        <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
        <Text style={[styles.headerText, { color: textColor }]}>{title}</Text>
      </View>
      <View style={styles.container}>
        <FormField
          title="First Name"
          placeholder="First Name"
          label={form.firstname}
          handleChangeText={(e) => setForm({ ...form, firstname: e })}
          otherStyles={{ marginTop: 7 }} // No need to set width to 100% in React Native
        />
        <FormField
          title="Last Name"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7 }}
        />
        {/* Other form fields... */}

        <TouchableOpacity onPress={() => navigation.push('/shipping')} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    padding: 10,
  },
  saveButton: {
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  saveButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
});

export default BillingAddress;
