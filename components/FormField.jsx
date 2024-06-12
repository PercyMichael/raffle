import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const FormField = ({ title, value, otherStyles, label, handleChangeText, errors = [], secureTextEntry, placeholder, ...props }) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-black-100 text-lg font-medium pl-1">{title}</Text>

      <View className="border-2 border-gray-400 h-14 bg-secondary px-4 justify-center rounded">
        <TextInput className="flex-1 text-gray-500 text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor='black'
          onChangeText={handleChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {errors.map((err) => {
        return <Text key={err} style={styles.error}>{err}</Text>
      })}
    </View>
  );
};


export default FormField;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    marginTop: 2
  }
})