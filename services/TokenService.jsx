import * as SecureStore from "expo-secure-store";
import axios from '../utils/axios';
import { Platform } from 'react-native';

let token = null;

// Function to set or delete the token in secure storage
export async function setToken(newToken) {
  token = newToken;

  if (token) {
    await SecureStore.setItemAsync("token", token);
  } else {
    await SecureStore.deleteItemAsync("token");
  }
}

// Function to get the token from secure storage
export async function getToken() {
  if (token) {
    return token;
  }

  token = await SecureStore.getItemAsync("token");
  return token;
}

// Function to handle login and store token
export async function handleLogin(email, password) {
  try {
    const { data } = await axios.post(
      "/login",
      {
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      }
    );

    // Assume the API returns a token in data.token
    if (data.token) {
      await setToken(data.token);
      console.log('Token stored successfully');
      return data;
    } else {
      throw new Error('No token received from the API');
    }
  } catch (error) {
    console.error('Login error:', error.message);

    // Handle different error responses
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.error('Unauthorized: Invalid credentials');
      } else {
        console.error(`Error ${status}:`, error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }

    throw error;  // Rethrow to let the calling code handle it
  }
}

export async function handleRegister(email, password, password_confirmation, selectedValue,) {
  try {
    const { data } = await axios.post(
      "/register",
      {
        email,
        password,
        password_confirmation,
        selectedValue,
        device_name: `${Platform.OS} ${Platform.Version}`
      }
    );

    // Assume the API returns a token in data.token
    if (data.token) {
      await setToken(data.token);
      console.log('Token stored successfully');
      return data;
    } else {
      throw new Error('No token received from the API');
    }
  } catch (error) {
    console.error('Login error:', error.message);

    // Handle different error responses
    if (error.response) {
      const status = error.response.status;
      if (status === 401) {
        console.error('Unauthorized: Invalid credentials');
      } else {
        console.error(`Error ${status}:`, error.response.data);
      }
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Request setup error:', error.message);
    }

    throw error;  // Rethrow to let the calling code handle it
  }
}

// Function to handle logout and delete the token
export async function handleLogout() {
  await setToken(null);
  console.log('Token deleted successfully');
}

