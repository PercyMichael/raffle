import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { loadcategoriesAPI } from '../../services/AuthService';



const CategoriesDropdown = ({ selectedCategory, setSelectedCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await loadcategoriesAPI();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    loadCategories();
  }, []);


  const dropdownItems = categories.map(category => ({
    label: category.category_name,
    value: category.id,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Category: {selectedCategory ? categories.find(cat => cat.id === selectedCategory)?.category_name : 'None'}
      </Text>
      <RNPickerSelect
        onValueChange={value => setSelectedCategory(value)}
        items={dropdownItems}
        placeholder={{ label: 'Select a category', value: null }}
        value={selectedCategory}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
};

export default CategoriesDropdown;


const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

