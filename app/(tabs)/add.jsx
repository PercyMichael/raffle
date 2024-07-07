import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import { loadUser } from '../../services/AuthService';
import { useRoute } from '@react-navigation/native';

const Add = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const route = useRoute();
  // const { id } = route.params;

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await loadUser(); // Fetch user data
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  function handleCreateRaffle() {
    if (user) {
      console.log('Navigating to the raffle creation page...');
      router.push('/(account)/createraffle'); // Correct path
    } else {
      console.log('Redirecting to login page...');
      router.push('/login'); // Assuming you have a login page
    }
  }

  function handleCancelRaffle() {
    console.log('Canceled raffle...');
    router.push('/discover');
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name="ticket" size={32} color="green" style={styles.icon} />
        <Text style={styles.header}>Host a Raffle?</Text>
        <Text style={styles.subHeader}>Ready to be the ultimate host of your own Raffle experience? Let's get started!</Text>
        <View style={styles.textContainer}>
          {loading ? (
            <Text style={styles.loadingText}>Loading user information...</Text>
          ) : user ? (
            <Text style={styles.actionText}>
              {user.user_type === 1 ? 'You are already a host, Proceed and host a raffle' : 'To host a Raffle you must be a host.'}
            </Text>
          ) : (
            <Text style={styles.welcomeText}>Welcome! Please log in to access your raffling guide.</Text>
          )}
        </View>
        <View style={styles.addBtn}>
          <TouchableOpacity
            onPress={handleCancelRaffle}
            activeOpacity={0.7}
            style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <CustomButton
            title="Proceed"
            handlePress={handleCreateRaffle}
            containerStyles={styles.customButton}
          />
        </View>
      </View>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  card: {
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: '#6200EE',
    textAlign: 'center',
    marginBottom: 10,
  },
  loadingText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  addBtn: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
  },
  customButton: {
    padding: 10,
    backgroundColor: '#6200EE',
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    width: 100,
    height: 40,
    marginHorizontal: 8,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: '#34D399',
    borderWidth: 2,
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#34D399',
    textAlign: 'center',
  },
});
