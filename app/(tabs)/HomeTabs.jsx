import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

import HomeTabs from './_layout';

const TabsLayout = () => {
  return (
    <>
      <HomeTabs />
      <StatusBar style="auto" />
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});