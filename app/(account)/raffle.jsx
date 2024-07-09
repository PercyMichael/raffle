import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { loadUser } from '../../services/AuthService';
import { useRoute } from '@react-navigation/native';

import Gamepad from "../../assets/images/pads.png";
import ProfileImg from '../../assets/images/profile.png';
import Laptop from "../../assets/images/laptop.png";
import Header from '../../components/header';

const Raffle = () => {
  const route = useRoute();
  const { data } = route.params;

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [ticket, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await loadUser();
        
        setUser(user);
      } catch (error) {
        setError('Failed to load user data');
      }
    };
    fetchData();
  }, []);

  return (
    <ScrollView contentContainerStyle={[styles.container, {}]}>
      <Header title="Raffle Details" />
      <View style={styles.contentContainer}>
        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <>
            <View style={styles.imageContainer}>
              <Image source={Gamepad} style={styles.mainImage} />
              <View style={styles.imageGrid}>
                <Image source={Gamepad} style={styles.gridImage} />
                <Image source={Gamepad} style={styles.gridImage} />
                <Image source={Gamepad} style={styles.gridImage} />
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailText}>Raffle ID: {data.id}</Text>
              <Text style={styles.detailText}>Organisation ID: {data.organisation_id}</Text>
              <Text style={styles.detailText}>User ID: {data.user_id}</Text>
              <Text style={styles.detailText}>Fundraising ID: {data.fundraising_id}</Text>
              <Text style={styles.detailText}>Host Name: {data.host_name}</Text>
              <Text style={styles.detailText}>Description: {data.description}</Text>
              <Text style={styles.detailText}>Starting Date: {data.starting_date}</Text>
              <Text style={styles.detailText}>Ending Date: {data.ending_date}</Text>
              <Text style={styles.detailText}>State Raffle Hosted: {data.state_raffle_hosted}</Text>
              <Text style={styles.detailText}>Approve Status: {data.approve_status}</Text>
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
};

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
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  imageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
    gap: 4,
  },
  gridImage: {
    width: '30%',
    height: 100,
    borderRadius: 8,
  },
  listRaffleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  detailsContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 5,
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
    marginLeft: 20
  },
  priceItemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  priceItem: {
    backgroundColor: '#215273',
    borderRadius: 4,
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
    color: 'white'
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
