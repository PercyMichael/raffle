import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ style, ...props }) => {
  return <Text style={[styles.defaultFont, style]} {...props} />;
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'Poppins-Medium', // Replace with the actual font name
  },
});

export default CustomText;
