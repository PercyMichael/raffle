import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { create_organisation, loadcategories, loadUser } from '../../services/AuthService'; // Assuming loadUser is imported
import { Ionicons } from '@expo/vector-icons';
import CategoriesDropdown from './categories';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter } from 'expo-router';

const PageHeader = ({ title, onBackPress }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={onBackPress}>
      <Ionicons name="chevron-back" size={24} color="black" style={styles.backIcon} />
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const CreateOrganisation = () => {
  const [user, setUser] = useState(null);
  const [coverImage, setCoverImage] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [handle, setHandle] = useState('');
  const [website, setWebsite] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const categoriesData = await loadcategories();
        setCategories(categoriesData);
        const userData = await loadUser();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // Handle error fetching data
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const handleImagePick = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled && result.assets.length > 0) {
        const imageUri = result.assets[0].uri;
        console.log('Selected Image URI:', imageUri);
        setCoverImage(imageUri);
      } else {
        console.log('Image picker was cancelled or no assets found');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'There was an error picking the image.');
    }
  };

  const handleOrganisation = async () => {
    setErrors({});

    // Validate required fields
    // let validationErrors = {};
    // if (!selectedCategory) validationErrors.category = 'The category field is required.';
    // const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    // if (!urlPattern.test(website)) validationErrors.website = 'The website field must be a valid URL.';

    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }

    try {
      const orgData = {
        cover_image: coverImage,
        organisation_name: organisationName,
        handle: handle,
        category: selectedCategory,
        website: website,
        description: description,
        user_id: user.id
      };

      console.log('Organisation data to register:', orgData);

      const response = await create_organisation(orgData);

      console.log('API response:', response);

      if (response.code === 201) {
        console.log('Organisation registered successfully:', response.data);
        // Navigate to fundraising page upon successful registration
        router.replace('/fundraising');
      } else {
        console.log('Organisation registration failed:', response.message);
        Alert.alert('Error', `Failed to register organisation: ${response.message}`);
      }
    } catch (error) {
      console.error('Error registering organisation:', error);
      Alert.alert('Error', 'Failed to register organisation. Please try again.');
    }
  };

  if (loading || !user) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Create a Raffle" onBackPress={() => console.log('Navigate back')} />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Tell us about your organisation</Text>
        <View style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>Let your album speak for you</Text>
          <TouchableOpacity style={styles.imagePickerButton} onPress={handleImagePick}>
            {!coverImage && <Text style={styles.plusSign}>+</Text>}
            {coverImage && (
              <Image
                source={{ uri: coverImage }}
                style={styles.imagePreview}
                onError={() => {
                  console.error('Failed to load image:', coverImage);
                  Alert.alert('Error', 'Failed to load the image.');
                }}
              />
            )}
          </TouchableOpacity>
        </View>

        <CategoriesDropdown
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          errors={errors.category}
        />

        <FormField
          title="Organisation name"
          placeholder="Organisation Name"
          value={organisationName}
          handleChangeText={setOrganisationName}
          otherStyles={styles.formField}
          errors={errors.organisation_name}
        />

        <FormField
          title="Handle"
          placeholder="Handle"
          value={handle}
          handleChangeText={setHandle}
          otherStyles={styles.formField}
          errors={errors.handle}
        />

        <FormField
          title="Website"
          placeholder="Website"
          value={website}
          handleChangeText={setWebsite}
          otherStyles={styles.formField}
          errors={errors.website}
        />

        <FormField
          title="Description"
          placeholder="Write something"
          value={description}
          handleChangeText={setDescription}
          otherStyles={styles.formField}
          errors={errors.description}
        />

        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <CustomButton
            title="Proceed"
            handlePress={handleOrganisation}
            containerStyle={styles.customButton}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default CreateOrganisation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    color: 'black',
  },
  formContainer: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  formField: {
    marginTop: 15,
  },
  imagePicker: {
    alignItems: 'center',
    marginTop: 20,
  },
  imagePickerText: {
    marginBottom: 10,
    fontSize: 16,
    color: '#888',
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
  imagePreview: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
  },
  customButton: {
    marginTop: 20,
  },
});
