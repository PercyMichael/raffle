import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Value stored successfully.");
    return value;
  } catch (error) {
    console.log("Error storing value: ", error);
  }
};

export const getItem = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Error receiving value: ", error);
  }
};

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Value deleted successfully.");
  } catch (error) {
    console.log("Error deleting value: ", error);
  }
};