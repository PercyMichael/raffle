import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const InputDropdown = ({ options, onSelect, defaultValue }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <TouchableWithoutFeedback onPress={toggleOptions}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Select an option"
          value={selectedOption}
          editable={false} // Prevents the keyboard from showing
        />
        {showOptions && (
          <View style={styles.optionsContainer}>
            <TouchableOpacity
              style={styles.option}
              onPress={() => handleSelect(defaultValue)}
            >
              <Text>{defaultValue}</Text>
            </TouchableOpacity>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.option}
                onPress={() => handleSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  optionsContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    maxHeight: 150,
    overflowY: 'scroll',
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderBottomWidth: 0,
  },
});

export default InputDropdown;
