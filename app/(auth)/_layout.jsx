import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';


export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="signin" />
      <Stack.Screen name="register" />
      <Stack.Screen name="reason" />
      <Stack.Screen name="number" />
      <Stack.Screen name="loginWelcome" />
      <Stack.Screen name="account" />
      <Stack.Screen name="details" />
      <Stack.Screen name="album" />
    </Stack>
  );
}