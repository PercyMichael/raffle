import axios from "../utils/axios";
import { getToken, setToken } from "./TokenService";
import { Alert } from "react-native";


export async function login(credentials) {
  const { data } = await axios.post("/login", credentials);
  await setToken(data.token);
}


export async function register(credentials) {
  try {
    const response = await axios.post("/register", credentials);
    const { data } = response;
    await setToken(data.token);

    // Return the user data
    return data.user;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error; // Ensure the caller can handle the error
  }
}

export async function loadUser() {
  const token = await getToken();

  const { data: user } = await axios.get("/user", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return user;
}

export async function update_register(userData) {
  try {
    const token = await getToken();

    const response = await axios.put('/update_register', userData, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating user details:', error);
    throw error;
  }
};

export async function loadcategories() {
  const token = await getToken();
  const { data: categories } = await axios.get("/categories", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return categories;
};


export async function create_organisation(orgData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post('/create_organisation', orgData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Organisation created successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error creating organisation:', error);
    if (error.response) {
      console.error('API Response:', error.response.data);
      Alert.alert('Error', `Failed to create organisation: ${error.response.data.message}`);
    } else {
      Alert.alert('Error', 'Failed to create organisation. Please try again later.');
    }
    throw error;
  }
}

export async function create_fundraising(fundData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post('/fundraising', fundData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Fundraiser created successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error creating fundraiser:', error);
    if (error.response) {
      console.error('API Response:', error.response.data);
      Alert.alert('Error', `Failed to create fundraiser: ${error.response.data.message}`);
    } else {
      Alert.alert('Error', 'Failed to create fundraiser. Please try again later.');
    }
    throw error;
  }
}

export async function create_raffle(raffleData) {
  try {
    const token = await getToken(); // Retrieve authentication token

    const response = await axios.post('/create_raffle', raffleData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Raffle created successfully:', response.data);
    return response.data;

  } catch (error) {
    console.error('Error creating Raffle:', error);
    if (error.response) {
      console.error('API Response:', error.response.data);
      Alert.alert('Error', `Failed to create Raffle: ${error.response.data.message}`);
    } else {
      Alert.alert('Error', 'Failed to create raffle. Please try again later.');
    }
    throw error;
  }
}