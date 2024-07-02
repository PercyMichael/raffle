import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const FormField = ({ title, value, otherStyles, label, handleChangeText, errors = [], secureTextEntry, placeholder, ...props }) => {
  return (
    <View style={`space-y-2 ${otherStyles}`}>
      <Text style={styles.label}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor='black'
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {Array.isArray(errors) && errors.length > 0 &&
        errors.map((err, index) => (
          <Text key={index} style={styles.error}>{err}</Text>
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
    paddingLeft: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 50,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: 'gray',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 2,
    fontSize: 12,
  },
});

export default FormField;
