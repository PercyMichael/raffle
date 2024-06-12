import React, { useEffect, useState } from 'react';
import { Layout, Screen, Stack } from 'expo-router';
import AuthContext from '../../contexts/AuthContext';
import { loadUser } from '../../services/AuthService';

// Import your screens here
import Reason from './reason';
import SignIn from './signin';
import Register from './register';
import mobileNumber from './number';
import welcomeLogin from './loginWelcome';
import accountCreated from './account';
import Details from './details';
import Album from './album';

const AuthLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const runEffect = async () => {
      try {
        const fetchedUser = await loadUser();
        setUser(fetchedUser);
      } catch (e) {
        console.log('Failed to load user', e);
      }
    };

    runEffect();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Stack screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="loginWelcome" component={welcomeLogin} options={{ title: 'Welcome', headerShown: false }} />
            <Stack.Screen name="reason" component={Reason} options={{
              title: 'Reason', headerShown: false
            }} />
            <Stack.Screen name="number" component={mobileNumber} options={{ title: 'Number' }} />
            <Stack.Screen name="account" component={accountCreated} options={{ title: 'Account' }} />
            <Stack.Screen name="details" component={Details} options={{ title: 'Details' }} />
            <Stack.Screen name="album" component={Album} options={{ title: 'Album' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="signin" component={SignIn} options={{ title: 'Sign In' }} />
            <Stack.Screen name="register" component={Register} options={{ title: 'Register' }} />
          </>
        )}
      </Stack>
    </AuthContext.Provider>
  );
};

export default AuthLayout;
