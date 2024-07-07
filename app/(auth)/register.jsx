import React, { useState } from 'react';
import { View, Text, ScrollView, Image, Platform, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';

import Dropdown from '../../components/dropdown';
import { register } from "../../services/AuthService";
import { useRoute } from '@react-navigation/native';
import { useRouter } from 'expo-router';

import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import Logo from "../../assets/images/raffleitapp.png";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [selectedValue, setSelectedValue] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();
  const router =useRouter();

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleImagePick = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        console.log('Selected Image URI:', imageUri);
        setImage(imageUri); // Correctly set the image state
      } else {
        console.log('Image picker was cancelled or no assets found');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'There was an error picking the image.');
    }
  };

  async function handleRegister() {
    setErrors({});

    if (password !== password_confirmation) {
      setErrors(prev => ({ ...prev, password_confirmation: "Passwords do not match." }));
      console.log("Passwords do not match");
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const userData = {
        email,
        password,
        password_confirmation,
        user_type: selectedValue === 'Host' ? 1 : 0,
        device_name: `${Platform.OS} ${Platform.Version}`,
        first_name,
        last_name,
        about,
        username,
        image,
      };

      console.log('User data to register:', userData);

      const user = await register(userData);

      console.log('API response:', user);
      console.log('API response:', user);

      if (user) {
        console.log('User registered successfully:', user);
        router.replace('/discover');
      } else {
        console.log('User registration did not return expected data.');
      }
    } catch (error) {
      console.error('Error registering user:', error);

      if (error.response) {
        const status = error.response.status;
        if (status === 422) {
          console.error('Validation errors:', error.response.data.errors);
          setErrors(error.response.data.errors || {});
        } else {
          console.error(`Error ${status}:`, error.response.data);
        }
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="w-full h-full px-5">
          <View className="items-center justify-center">
            <Image source={Logo} />
            <Text className="font-black mt-4 text-xl">Register to Raffleit</Text>
            <Text className="mt-2 text-lg font-gray">Start raffling on raffleitapp</Text>
          </View>

          <View style={styles.imagePicker}>
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleImagePick}
            >
              {!image && <Text style={styles.plusSign}>+</Text>}
              {image && (
                <Image
                  source={{ uri: image }}
                  style={styles.imagePreview}
                  onError={(error) => {
                    console.error('Failed to load image:', image, error);
                  }}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.imagePickerText}>Choose Profile Picture</Text>
          </View>

          <FormField
            title="Email"
            placeholder="Email Address"
            value={email}
            handleChangeText={setEmail}
            otherStyles={{ marginTop: 30 }}
            keyboardType="email-address"
            error={errors.email} // Display validation error for email
          />

          <FormField
            title="First Name"
            placeholder="First Name"
            value={first_name}
            handleChangeText={setFirstName}
            otherStyles={{ marginTop: 30 }}
            error={errors.first_name} // Display validation error for first name
          />

          <FormField
            title="Last Name"
            placeholder="Last Name"
            value={last_name}
            handleChangeText={setLastName}
            otherStyles={{ marginTop: 30 }}
            error={errors.first_name} // Display validation error for first name
          />

          <FormField
            title="Username"
            placeholder="Username"
            value={username}
            handleChangeText={setUsername}
            otherStyles={{ marginTop: 30 }}
            error={errors.first_name} // Display validation error for first name
          />

          <FormField
            title="About"
            placeholder="About"
            value={about}
            handleChangeText={setAbout}
            otherStyles={{ marginTop: 30 }}
          />

          <View>
            <Text className="mt-4 font-bold text-base">Selected Value: {selectedValue}</Text>
            <Dropdown
              options={['Host']}
              onSelect={handleSelect}
              handleChangeText={(text) => setSelectedValue(text)}
              defaultValue="User"
            />
          </View>

          <FormField
            title="Password"
            placeholder="Enter password"
            value={password}
            handleChangeText={setPassword}
            otherStyles={{ marginTop: 20 }}
            secureTextEntry
            error={errors.password} // Display validation error for password
          />

          <FormField
            title="Confirm Password"
            placeholder="Enter password"
            value={password_confirmation}
            handleChangeText={setPasswordConfirmation}
            otherStyles="mt-5"
            secureTextEntry
          />

          <CustomButton
            title="Register"
            handlePress={handleRegister}
            containerStyles="mt-7"
          />

          <View style={styles.linkContainer}>
            <Text style={styles.text}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagePickerButton: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  plusSign: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333',
  },
  imagePickerText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  imagePreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 5,
  },
});
