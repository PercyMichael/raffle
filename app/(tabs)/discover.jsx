import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import profImg from "../../assets/images/profile.png";
import { router } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import Laptop from "../../assets/images/laptop.png";
import { useNavigation } from '@react-navigation/native';

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [raffles, setRaffles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchRaffles();
  }, []);

  const fetchRaffles = async () => {
    try {
      // Replace with your actual fetch logic
      const response = await fetch('http://192.168.0.136:8000/api/raffles');
      const data = await response.json();
      setRaffles(data);
    } catch (error) {
      console.error('Failed to fetch raffles:', error);
    }
  };

  const navigateToLiveRaffle = (raffle) => {
    navigation.navigate('Raffle', { raffle });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Discover</Text>
        </View>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => router.push('/notifications')}>
            <Ionicons
              name="notifications"
              color="black"
              size={24}
            />
          </TouchableOpacity>
          <Image
            source={profImg}
            style={styles.profileImage}
            resizeMode='cover'
            onError={(error) => console.log('Local image failed to load', error.nativeEvent.error)}
          />
        </View>
      </View>
      <View style={styles.search}>
        <Ionicons name="search" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.status}>
          <View style={styles.statusButton}>
            <Text style={styles.statusText}>Popular</Text>
          </View>
          <View style={styles.statusButton}>
            <Text style={styles.statusText}>Newest</Text>
          </View>
          <View style={styles.statusButton}>
            <Text style={styles.statusText}>Recommended</Text>
          </View>
          <View style={styles.statusButton}>
            <Text style={styles.statusText}>Trending</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.rafflesContainer}>
        <Text style={styles.sectionTitle}>Trending Raffles</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {raffles.map((raffle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.raffleItem}
              onPress={() => navigateToLiveRaffle(raffle)} // Pass raffle object
            >
              <Image
                source={Laptop}
                style={styles.raffleImage}
                resizeMode="cover"
              />
              <View style={styles.raffleContent}>
                <Text style={styles.raffleTitle}>{raffle.host_name}</Text>
                <Text style={styles.raffleSubtitle}>{raffle.organisation_id}</Text>
                <Text style={styles.raffleSubtitle}>{raffle.description}</Text>
                <Text style={styles.raffleTime}>{raffle.ending_date}</Text>
                <CustomButton
                  title="View Raffle"
                  handlePress={() => navigateToLiveRaffle(raffle)} // Pass raffle object
                  containerStyles={styles.buttonContainer}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.rafflesContainer}>
        <Text style={styles.sectionTitle}>Recommended Raffles</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {raffles.map((raffle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.raffleItem}
              onPress={() => navigateToLiveRaffle(raffle)} // Pass raffle object
            >
              <Image
                source={Laptop}
                style={styles.raffleImage}
                resizeMode="cover"
              />
              <View style={styles.raffleContent}>
                <Text style={styles.raffleTitle}>{raffle.title}</Text>
                <Text style={styles.raffleSubtitle}>{raffle.category}</Text>
                <Text style={styles.raffleSubtitle}>{raffle.website}</Text>
                <Text style={styles.raffleTime}>{raffle.time_left}</Text>
                <CustomButton
                  title="View Raffle"
                  handlePress={() => navigateToLiveRaffle(raffle)} // Pass raffle object
                  containerStyles={styles.buttonContainer}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: '4'
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerContainer: {
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    borderRadius: 8,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    margin: 15
  },
  icon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 5,
  },
  status: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  statusButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  statusText: {
    fontWeight: 'bold',
    color: 'gray',
  },
  rafflesContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
  },
  raffleItem: {
    width: 300,
    marginRight: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
  },
  raffleImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  raffleContent: {
    padding: 12,
  },
  raffleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  raffleSubtitle: {
    color: 'gray',
    marginBottom: 4,
  },
  raffleTime: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 8,
  },
  buttonContainer: {
    marginTop: 8,
  },
});

export default Discover;
