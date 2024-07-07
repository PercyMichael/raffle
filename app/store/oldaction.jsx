import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Init = () => {
  return async dispatch => {
    try {
      let token = await AsyncStorage.setItem('token', token);
      if (token !== null) {
        console.log("Token stored");
        dispatch({
          type: 'LOGIN',
          payload: token
        })
      }
    } catch (error) {
      console.error("No token stored:", error);
    }
  }
};

export const login = (credentials, deviceName) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/login', credentials);
      const { token } = response.data;

      // Store token in AsyncStorage (replace with your storage mechanism)
      await AsyncStorage.setItem('token', token);

      dispatch({
        type: 'LOGIN',
        payload: token,
      });

      return token; // Optionally return token for further handling if needed
    } catch (error) {
      console.error('Error during login:', error.message);
      throw error; // Propagate the error for further handling
    }
  };
};



export const Logout = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('token');
      console.log("Token removed");
      dispatch({
        type: 'LOGOUT',
        payload: null
      });
    } catch (error) {
      console.error('Error during logout:', error.message);
      // Optionally dispatch an error action or handle errors in UI
    }
  };
};
