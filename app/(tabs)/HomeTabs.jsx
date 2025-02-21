import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import HomeTabs from './_layout';
import Raffle from '../(account)/raffle';

const TabsLayout = () => {
  return (
    <>
      <HomeTabs />
      <StatusBar style="auto" />
      <Raffle />
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});