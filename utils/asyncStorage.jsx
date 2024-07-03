import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  if (!key) {
    console.error("Error storing value: Key is missing.");
    return;
  }

  if (value === null || value === undefined) {
    console.error("Error storing value: Value cannot be null or undefined.");
    return;
  }

  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log("Value stored successfully.");
    return value;
  } catch (error) {
    console.error("Error storing value:", error);
  }
};

export const getItem = async (key) => {
  if (!key) {
    console.error("Error retrieving value: Key is missing.");
    return null;
  }

  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    } else {
      console.warn("Warning: Value not found for key:", key);
      return null;
    }
  } catch (error) {
    console.error("Error retrieving value:", error);
  }
};

export const removeItem = async (key) => {
  if (!key) {
    console.error("Error deleting value: Key is missing.");
    return;
  }

  try {
    await AsyncStorage.removeItem(key);
    console.log("Value deleted successfully.");
  } catch (error) {
    console.error("Error deleting value:", error);
  }
};
