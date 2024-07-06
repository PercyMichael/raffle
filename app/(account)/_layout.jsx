import React, { useEffect, useState, useContext } from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthContext from '../../contexts/AuthContext';
import { loadUser } from '../../services/AuthService';

// Import your screens here
import AccountDetails from './accdetails';
import Raffle from './raffle';
import AddRaffle from './addraffle';
import Address from './address';
import CategoriesDropdown from './categories';
import CreateRaffle from './createraffle';
import Fundraising from './fundraising';
import CreateOrganisation from './organisation';
import NotificationSettings from './notificationset';

// Create a Stack Navigator
const Stack = createStackNavigator();

const AuthLayout = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const runEffect = async () => {
      try {
        const fetchedUser = await loadUser();
        setUser(fetchedUser);
      } catch (e) {
        setError('User not logged in, Please login to plroceed');
        console.log('User not logged in, Please login to plroceed', e);
      } finally {
        setLoading(false);
      }
    };

    runEffect();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="WelcomeLogin" component={WelcomeLogin} options={{ title: 'Welcome' }} />
            <Stack.Screen name="Reason" component={Reason} options={{ title: 'Reason' }} />
            <Stack.Screen name="MobileNumber" component={MobileNumber} options={{ title: 'Number' }} />
            <Stack.Screen name="AccountCreated" component={AccountCreated} options={{ title: 'Account' }} />
            <Stack.Screen name="Details" component={Details} options={{ title: 'Details' }} />
            <Stack.Screen name="Album" component={Album} options={{ title: 'Album' }} />
            <Stack.Screen name="Raffle" component={Raffle} options={{ title: 'Raffle' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Sign In' }} />
            <Stack.Screen name="Register" component={Register} options={{ title: 'Register' }} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

export default AuthLayout;
