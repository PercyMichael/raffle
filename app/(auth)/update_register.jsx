import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { loadUser, update_register } from '../../services/AuthService';
import { useRouter } from 'expo-router';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const UpdateRegister = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await loadUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to load user:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);


  const [form, setForm] = useState({
    email: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    username: '',
    about: '',
    image: null,
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await loadUser();
        setForm({
          ...form,
          email: userData.email || '',
          first_name: userData.first_name || '',
          last_name: userData.last_name || '',
          username: userData.username || '',
          about: userData.about || '',
          image: userData.image || null,
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
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
        setForm({ ...form, image: imageUri });
      } else {
        console.log('Image picker was cancelled or no assets found');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'There was an error picking the image.');
    }
  };

  const handleUpdate = async () => {
    setErrors({});
    try {
      const updatedUser = await update_register(form);
      console.log('User details updated successfully:', updatedUser);
      router.replace('/discover');
    } catch (error) {
      console.error('Error updating user details:', error);
      setErrors({ general: 'Failed to update profile. Please try again later.' });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Update Your Account</Text>
            <Text style={styles.subtitle}>Start updating your profile on Raffleit</Text>
          </View>

          <View style={styles.imagePicker}>
            <TouchableOpacity
              style={styles.imagePickerButton}
              onPress={handleImagePick}
            >
              {!form.image && <Text style={styles.plusSign}>+</Text>}
              {form.image && (
                <Image
                  source={{ uri: form.image }}
                  style={styles.imagePreview}
                  onError={(error) => {
                    console.error('Failed to load image:', form.image, error);
                    Alert.alert('Error', 'Failed to load the image.');
                  }}
                />
              )}
            </TouchableOpacity>
            <Text style={styles.imagePickerText}>Choose Profile Picture</Text>
          </View>

          <FormField
            title="First Name"
            placeholder={form.first_name || 'First name'}
            label={form.first_name}
            handleChangeText={(text) => handleInputChange('first_name', text)}
            otherStyles={styles.formField}
            errors={errors.first_name}
          />

          <FormField
            title="Last Name"
            placeholder={form.last_name || 'Last name'}
            label={form.last_name}
            handleChangeText={(text) => handleInputChange('last_name', text)}
            otherStyles={styles.formField}
            errors={errors.last_name}
          />

          <FormField
            title="Username"
            placeholder={form.username || 'Username'}
            label={form.username}
            handleChangeText={(text) => handleInputChange('username', text)}
            otherStyles={styles.formField}
            errors={errors.username}
          />

          <FormField
            title="Email"
            placeholder={form.email || 'Email Address'}
            label={form.email}
            handleChangeText={(text) => handleInputChange('email', text)}
            otherStyles={styles.formField}
            keyboardType="email-address"
            errors={errors.email}
          />

          <FormField
            title="About"
            placeholder="Tell us about yourself"
            label={form.about}
            handleChangeText={(text) => handleInputChange('about', text)}
            otherStyles={styles.formField}
            errors={errors.about}
          />

          <CustomButton
            title="Complete profile"
            handlePress={handleUpdate}
            containerStyles={styles.updateButton}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UpdateRegister;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
  formField: {
    marginTop: 15,
  },
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
  updateButton: {
    marginTop: 20,
  },
});
