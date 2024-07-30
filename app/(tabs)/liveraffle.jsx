import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomButton from "../../components/CustomButton";
import Header from "../../components/header"; // Adjust path as needed
import { useDispatch } from "react-redux";

import RaffleImg from "../../assets/images/raffle.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { fetchRaffleAPI } from "../../services/AuthService";
// import { setSelectedRaffle } from '../store/actions';

const LiveRaffle = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [raffles, setRaffles] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch(); // Initialize dispatch
  const route = useRoute();

  useEffect(() => {
    const fetchRaffles = async () => {
      try {
        const raffles = await fetchRaffleAPI(); // Replace with your actual API call
        setRaffles(raffles);
      } catch (error) {
        console.error("Failed to fetch raffles:", error);
        // Handle error state or retry logic if needed
      }
    };
    fetchRaffles();
  }, []);

  const navigateToLiveRaffle = (raffle) => {
    dispatch(setSelectedRaffle(raffle.id)); // Dispatch the action to set the selected raffle ID
    navigation.navigate("Raffle", { data: raffle });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Header title="Live Raffle" />
      <View>
        <View style={styles.searching}>
          <View style={styles.search}>
            <Ionicons
              name="search"
              size={20}
              color="gray"
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          <View style={styles.dropdown}>
            <View style={styles.item}>
              <Text style={styles.textItem}>Example Item</Text>
            </View>
          </View>
        </View>
        <View style={styles.raffleContainer}>
          {raffles.map((raffle, index) => (
            <TouchableOpacity
              key={index}
              style={styles.raffleItem}
              onPress={() => navigateToLiveRaffle(raffle)}
            >
              <Image
                source={RaffleImg} // Replace with your image source
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.raffleInfo}>
                <Text style={styles.title}>{raffle.host_name}</Text>
                <Text style={styles.subtitle}>{raffle.organisation_id}</Text>
                <Text style={styles.subtitle}>{raffle.description}</Text>
                <Text style={styles.time}>{raffle.ending_date}</Text>
                <CustomButton
                  title="View Raffle"
                  handlePress={() => navigateToLiveRaffle(raffle)}
                  containerStyles={styles.buttonContainer}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default LiveRaffle;

const styles = StyleSheet.create({
  searching: {
    flexDirection: "row",
    margin: 16,
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "60%",
    marginRight: 16,
    borderWidth: 1,
    borderColor: "gray",
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
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textItem: {
    fontSize: 16,
  },
  raffleContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    margin: 15,
  },
  raffleItem: {
    width: "100%",
    backgroundColor: "#E0E0E0",
    padding: 2,
    borderRadius: 8,
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  raffleInfo: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#555",
    fontWeight: "bold",
  },
  time: {
    fontSize: 16,
    color: "#555",
  },
  buttonContainer: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
