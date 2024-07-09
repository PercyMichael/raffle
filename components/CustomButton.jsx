import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handlePress, containerStyles, isLoading, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-bgcolor rounded py-2 px-4
      ${containerStyles}
      ${isLoading ? 'opacity-50' : ''}`}
      disabled={isLoading}>
      <Text className={`font-bold text-lg text-secondary text-center ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;
