import { View, Text, ScrollView, Image, StyleSheet, Pressable, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions';

import { loadUser } from "../../services/AuthService";
import CustomButton from '../../components/CustomButton';
import profileImg from "../../assets/images/profile.png";

const Menu = () => {
  const route = useRoute();
  // const { id } = route.params;
  const dispatch = useDispatch();

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

  const handleHost = () => {
    if (user && user.user_type === 0) {
      // Code to handle becoming a host
      console.log('Navigating to host registration...');
    } else {
      // Code for already being a host
      console.log('User is already a host.');
    }
  };

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Perform any additional logout logic (e.g., clear local storage, navigate to login screen, etc.)
    // Example:
    // localStorage.removeItem('authToken');
    // console.log("data cleared", authToken);
    // history.push('/login'); // Assuming 'history' is available for navigation
  };


  return (
    <ScrollView>
      <View style={styles.container} className="p-4">
        <View style={styles.contmenu} className="p-2">
          <Text style={styles.more}>More</Text>
          <View style={styles.notificationIcon}>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon}>
              <FontAwesome name="gear" color="gray" size={24} />
            </Pressable>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon}>
              <Ionicons name="search" color="gray" size={24} />
            </Pressable>
          </View>
        </View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : user ? (
          <View style={styles.about}>
            <Image
              source={user.image ? { uri: user.image } : profileImg}
              style={styles.profileImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.boldText}>{user.first_name} {user.last_name}</Text>
              <Text style={styles.grayText}>{user.email}</Text>
              {/* <Text style={styles.grayText}>{user.about}</Text> */}
            </View>
          </View>
        ) : (
          <Text style={styles.errorText}>Failed to load user details.</Text>
        )}

        <View style={styles.aboutsect}>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon}>
              <Ionicons name="ticket-outline" color="green" size={24} />
              <Text style={styles.menuText}>Raffles</Text>
            </Pressable>
          </View>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/address')} style={styles.icon}>
              <Ionicons name="location" color="green" size={30} />
              <Text style={styles.menuText}>Address</Text>
            </Pressable>
          </View>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('/accdetails')} style={styles.icon}>
              <Ionicons name="person-circle-outline" color="green" size={30} />
              <Text style={styles.menuText}>Account details</Text>
            </Pressable>
          </View>
          <View style={styles.ticket}>
            <Pressable onPress={() => router.push('account/payment')} style={styles.icon}>
              <Ionicons name="wallet" color="green" size={30} />
              <Text style={styles.menuText}>Payment method</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => router.push('/settings')} style={styles.button}>
            <FontAwesome name="gear" color="gray" size={30} />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/help')} style={styles.button}>
            <Ionicons name="help-circle-outline" color="gray" size={30} />
            <Text style={styles.buttonText}>Help & support</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionButtons}>
          {user && (
            <CustomButton
              title={user.user_type === 1 ? 'Already host' : 'Become a host'}
              handlePress={handleHost}
              containerStyle={styles.customButton}
              containerStyles="mt-7 px-2 py-1 w-3/4 rounded-lg"
            />
          )}

          <TouchableOpacity onPress={handleLogout} style={styles.button}>
            <Text style={styles.logoutBtn}>Logout</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    padding: 4,
  },
  contmenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  notificationIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  about: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    margin: 6
  },
  textContainer: {
    marginLeft: 10,
  },
  more: {
    fontSize: 20,
    fontWeight: '700',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  grayText: {
    fontWeight: 'bold',
    color: '#808080',
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'contain'
  },
  aboutsect: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10
  },
  ticket: {
    width: '45%',
    justifyContent: 'center',
    backgroundColor: '#FDFDFD',
    borderRadius: 8,
    padding: 5,
    margin: 5
  },
  menuText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'left'
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 5,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10
  },
  logoutBtn: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    color: 'red'
  },
  actionButtons: {
    marginTop: 20,
    alignItems: 'center',
    gap: 10
  },
  customButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 15
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Menu;
