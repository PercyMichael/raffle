import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";
import { login } from "../app/store 2/actions";
import { Alert } from "react-native";

export async function loginAPI(credentials) {
  try {
    const { data } = await axios.post("/login", credentials);

    // Assuming data contains token and user information
    const { token } = data;

    // Store token (e.g., in AsyncStorage)
    await setToken(token);

    const { data: user } = await axios.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(token, user);
    // console.log(user);
    return { token, user }; // Return token and user data if needed
  } catch (error) {
    console.error("Login error:", error);
    throw error; // Rethrow the error to be handled by the caller
  }
}

export async function register(credentials) {
  try {
    const response = await axios.post("/register", credentials);
    const { data } = response;
    console.log(data);

    const token = data.token;
    const user = data.user;

    await setToken(token);

    // console.log("====================================");
    // console.log(user, token);
    // console.log("====================================");

    // Return the user data
    return { token, user };
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // Ensure the caller can handle the error
  }
}

export async function paypal(payments) {
  try {
    const response = await axios.post("/paypal", payments);
    const { data } = response;
    await setToken(data.token);

    // Return the user data
    return data.paypal;
  } catch (error) {
    console.error("Error making payment:", error);
    throw error;
  }
}

export async function loadUser() {
  const token = await getToken();

  const { data: user } = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return user;
}

export async function fetchRaffleAPI() {
  const token = await getToken();

  const { data: raffles } = await axios.get("/raffles", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return raffles;
}

export async function update_register(userData) {
  try {
    const token = await getToken();

    const response = await axios.put("/update_register", userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error updating user details:", error);
    throw error;
  }
}

export async function loadcategoriesAPI() {
  const token = await getToken();
  const { data: categories } = await axios.get("/categories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return categories;
}
export async function loadTicketAPI() {
  const token = await getToken();
  const { data: tickets } = await axios.get("/tickets", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return tickets;
}

export async function create_organisation(orgData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post("/create_organisation", orgData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Organisation created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating organisation:", error);
    if (error.response) {
      console.error("API Response:", error.response.data);
      Alert.alert(
        "Error",
        `Failed to create organisation: ${error.response.data.message}`,
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      Alert.alert(
        "Error",
        "Failed to create organisation. Please try again later.",
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    throw error;
  }
}

export async function create_fundraising(fundData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post("/fundraising", fundData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Fundraiser created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating fundraiser:", error);
    if (error.response) {
      console.error("API Response:", error.response.data);
      Alert.alert(
        "Error",
        `Failed to create fundraiser: ${error.response.data.message}`,
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      Alert.alert(
        "Error",
        "Failed to create fundraiser. Please try again later.",
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    }
    throw error;
  }
}

export async function createraffle(raffleData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post("/createraffle", raffleData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Raffle created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Raffle:", error);
    if (error.response) {
      console.error("API Response:", error.response.data);
      Alert.alert(
        "Error",
        `Failed to create Raffle: ${error.response.data.message}`,
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      Alert.alert("Error", "Failed to create raffle. Please try again later.", [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    throw error;
  }
}

export async function create_ticket(raffleData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post("/create_raffle", raffleData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Raffle created successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Raffle:", error);
    if (error.response) {
      console.error("API Response:", error.response.data);
      Alert.alert(
        "Error",
        `Failed to create Raffle: ${error.response.data.message}`,
        [
          { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      Alert.alert("Error", "Failed to create raffle. Please try again later.", [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    throw error;
  }
}
