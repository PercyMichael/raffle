import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { loadRaffle, loadUser } from '../../services/AuthService';

import Gamepad from "../../assets/images/pads.png";
import ProfileImg from '../../assets/images/profile.png';
import Laptop from "../../assets/images/laptop.png";

const Raffle = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [raffles, setRaffles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const raffleData = await loadRaffle();
      const userData = await loadUser();
      setRaffles(raffleData);
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      setError('Failed to fetch data. Please try again later.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={raffles}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.raffleItem}>
                  <Image source={Gamepad} style={styles.gamepadImage} />
                  <View style={styles.listRaffleContainer}>
                    {[1, 2, 3].map((index) => (
                      <View key={index} style={styles.listRaffleItem}>
                        <Image source={Gamepad} style={styles.gImage} />
                      </View>
                    ))}
                  </View>
                  <Text style={styles.raffleTitle}>{item.title}</Text>
                  <Text>Description: {item.host_name}</Text>
                  <Text>Description: {item.description}</Text>
                  {/* Render other details */}
                </View>
              )}
            />
            <Image source={Gamepad} style={styles.gamepadImage} />
            <View style={styles.listRaffleContainer}>
              {[1, 2, 3].map((index) => (
                <View key={index} style={styles.listRaffleItem}>
                  <Image source={Gamepad} style={styles.gImage} />
                </View>
              ))}
            </View>
            <View style={styles.supportContainer}>
              <Text style={styles.supportTitle}>Do Good. Support Our Cause Today!</Text>
              <CustomButton
                title="Support"
                handlePress={() => { }}
                containerStyles={styles.supportButton}
              />
            </View>
            <View style={styles.pricingContainer}>
              <Text style={styles.pricingTitle}>Pricing</Text>
              <View style={styles.priceItemsContainer}>
                {[3, 10, 30, 50, 90, 150].map((tickets) => (
                  <View key={tickets} style={styles.priceItem}>
                    <Text style={styles.priceText}>{tickets}</Text>
                    <Text style={styles.priceText}>Tickets</Text>
                    <Text style={styles.priceText}>$ 100</Text>
                  </View>
                ))}
              </View>
              <CustomButton
                title="Get a Ticket"
                handlePress={() => { }}
                containerStyles={styles.supportButton}
              />
            </View>
            <View style={styles.statusContainer}>
              <Text style={styles.statusTitle}>Raffle Status</Text>
              <View style={styles.statusItemsContainer}>
                <View style={styles.statusItem}>
                  <Text style={styles.statusText}>Description</Text>
                </View>
                <View style={styles.statusItem}>
                  <Text style={styles.statusText}>Raffle History</Text>
                </View>
                <View style={styles.statusItem}>
                  <Text style={styles.statusText}>Live Support</Text>
                </View>
              </View>
            </View>
            <View style={styles.aboutContainer}>
              <View style={styles.aboutHeader}>
                <Image source={ProfileImg} style={styles.profileImage} />
                <View style={styles.aboutHeaderText}>
                  <Text style={styles.aboutTitle}>{user?.hostname}</Text>
                  <Text style={styles.aboutSubtitle}>Restaurant</Text>
                </View>
              </View>
              <View style={styles.aboutContent}>
                <Text style={styles.aboutText}>
                  Fundraising to help Sports Club, In OLD FOLLY DISTRICT, ST ANNS Jamaica
                </Text>
                <Text style={styles.aboutText}>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit imperdiet ultrices tempor,
                  habitasse ante mi habitant libero elementum
                </Text>
              </View>
            </View>
            <View style={styles.recommendedContainer}>
              <Text style={styles.recommendedTitle}>Recommended Raffles</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {[1, 2, 3, 4].map((item) => (
                  <View key={item} style={styles.recommendedItem}>
                    <Image source={Laptop} style={styles.recommendedImage} />
                    <View style={styles.recommendedContent}>
                      <Text style={styles.recommendedItemTitle}>Victor the greatest designer</Text>
                      <Text style={styles.recommendedItemSubtitle}>UI/UX</Text>
                      <Text style={styles.recommendedItemText}>Victorakinola.com</Text>
                      <CustomButton
                        title="Start Raffling"
                        handlePress={() => { }}
                        containerStyles={styles.supportButton}
                      />
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
  },
  raffleItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  raffleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gamepadImage: {
    height: 200,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 15,
    marginTop: 20,
  },
  listRaffleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  listRaffleItem: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gImage: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  supportContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  supportButton: {
    marginTop: 10,
  },
  pricingContainer: {
    marginTop: 20,
  },
  pricingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  priceItem: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginVertical: 8,
    width: '30%',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 2,
  },
  statusContainer: {
    marginTop: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statusItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statusItem: {
    borderWidth: 1,
    borderColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    width: '30%',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aboutContainer: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  aboutHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    borderRadius: 30,
  },
  aboutHeaderText: {
    marginLeft: 16,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutSubtitle: {
    color: 'gray',
  },
  aboutContent: {
    marginTop: 10,
  },
  aboutText: {
    fontSize: 16,
    marginBottom: 10,
  },
  recommendedContainer: {
    marginTop: 20,
  },
  recommendedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recommendedItem: {
    marginRight: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  recommendedImage: {
    height: 150,
    width: '100%',
    resizeMode: 'contain',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  recommendedContent: {
    padding: 10,
  },
  recommendedItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recommendedItemSubtitle: {
    color: 'gray',
    marginBottom: 5,
  },
});

export default Raffle;
