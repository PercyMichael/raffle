import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Image } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import Laptop from "../../assets/images/laptop.png";
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router'; // Adjust according to your navigation setup
import { useRoute } from '@react-navigation/native';

const data = [{ label: 'Example Item', value: '1' }];

const LiveRaffle = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [raffles, setRaffles] = useState([]);

  const router = useRouter();
  const navigation = useNavigation();

  const route = useRoute();
  // const { id } = route.params;



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

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ padding: 20 }}>
        <Text style={styles.headerText}>Live raffle</Text>
      </View>
      <View>
        <View style={styles.searching}>
          <View style={styles.search}>
            <Ionicons name="search" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.dropdown}>
            <View style={styles.item}>
              <Text style={styles.textItem}>{data[0].label}</Text>
              {selectedValue === data[0].value && (
                <AntDesign
                  style={styles.icon}
                  color="black"
                  name="Safety"
                  size={20}
                />
              )}
            </View>
          </View>
        </View>
        <View style={styles.raffleContainer}>
          {[...Array(4)].map((_, index) => (
            <View key={index} style={styles.raffleItem}>
              <Image source={Laptop} style={styles.image} />
              <View style={styles.raffleInfo}>
                <Text style={styles.title}>Victor the greatest designer</Text>
                <Text style={styles.subtitle}>UI/UX</Text>
                <Text style={styles.website}>Victorakinola.com</Text>
                <Text style={styles.time}>20h 33m</Text>
                <CustomButton
                  title="View raffle"
                  handlePress={() => router.push('/raffle')}
                  containerStyles={styles.buttonContainer}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default LiveRaffle;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searching: {
    flexDirection: 'row',
    margin: 16,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '60%',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,

  },
  icon: {
    marginRight: 3,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  dropdown: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textItem: {
    fontSize: 16,
  },
  raffleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  raffleItem: {
    width: '100%',
    backgroundColor: '#E0E0E0',
    padding: 2,
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  raffleInfo: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#555',
    fontWeight: 'bold',
  },
  website: {
    fontSize: 12,
    color: '#555',
  },
  time: {
    fontSize: 16,
    color: '#555',
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
