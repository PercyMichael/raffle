import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const PageHeader = ({ title, onBackPress }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={onBackPress}>
      <Ionicons name="chevron-back" size={24} color="black" style={styles.backIcon} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <PageHeader title={title} onBackPress={() => router.back()} />
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    gap: 6,
  },
  backIcon: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
