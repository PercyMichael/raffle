import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native';
import FormField from '../../components/FormField';

const AccountDetails = ({ backgroundColor, textColor, navigation }) => {
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });
  const title = "Account details";

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
          otherStyles={{ marginTop: 7, width: '100%' }}
        />
        <FormField
          title="Last Name"
          placeholder="Last Name"
          label={form.lastname}
          handleChangeText={(e) => setForm({ ...form, lastname: e })}
          otherStyles={{ marginTop: 7, width: '100%' }}
        />
        {/* Other form fields... */}

        <View style={styles.passwordChangeContainer}>
          <Text style={styles.passwordChangeTitle}>Password Change</Text>
          {/* Password change form fields... */}
        </View>

        <TouchableOpacity onPress={() => navigation.push('Shipping')} style={styles.saveButton}>
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
  passwordChangeContainer: {
    marginTop: 10,
  },
  passwordChangeTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
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

export default AccountDetails;
