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
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    password: ''
  });

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Create a Raffle" />
      </View>

      <View className="p-4">
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
          <Text style={[styles.statusTitle, { color: textColor }]}>Fundraising</Text>
        </View>

        <View style={styles.container}>
          {/* Form fields example */}
          <FormField
            title="First Name"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="First Name"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="First Name"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="First Name"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          <FormField
            title="First Name"
            placeholder="First Name"
            value={form.firstname}
            onChangeText={(text) => setForm({ ...form, firstname: text })}
            style={styles.input}
          />
          {/* Add other form fields similarly */}

          {/* Example CheckBox */}
          <CheckBox
            title="I have read and agree to the Terms and Conditions"
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
          />

          {/* Example button */}
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
    paddingHorizontal: 20,
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
