// src/components/DateTimePickerComponent.js

import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Platform, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimePickerComponent = ({ value, onChange, mode = 'date' }) => {
  const [show, setShow] = useState(false);

  const showPicker = () => {
    setShow(true);
  };

  const onChangeHandler = (event, selectedDate) => {
    setShow(false);
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const formattedValue = mode === 'date'
    ? value.toLocaleDateString()
    : value.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showPicker} style={styles.input}>
        <Text style={styles.inputText}>{formattedValue}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={value}
          mode={mode}
          display="default"
          onChange={onChangeHandler}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  inputText: {
    fontSize: 16,
  },
});

export default DateTimePickerComponent;
