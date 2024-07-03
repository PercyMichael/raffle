import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter } from 'expo-router';
import { loadUser, create_fundraising } from '../../services/AuthService';
import DateTimePickerComponent from '../../components/datepicker';

const PageHeader = ({ title }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={24} color="black" style={styles.icon} />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const AddRaffle = ({ backgroundColor = '#fff', textColor = '#000' }) => {
  const [text, setText] = useState('');

  const onChangeText = (inputText) => {
    setText(inputText);
  };

  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    user_id: user.id,
    organisation_id: '',
    fundraising_id: '',
    hostname: '',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    startTime: new Date(),
    endTime: new Date(),
    images: [null, null, null, null],
    state_raffle_hosted: null
  });
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFormData(prevState => {
        const newImages = [...prevState.images];
        newImages[index] = result.assets[0].uri;
        return { ...prevState, images: newImages };
      });
    }
  };

  const handleRemoveImage = (index) => {
    setFormData(prevState => {
      const newImages = [...prevState.images];
      newImages[index] = null;
      return { ...prevState, images: newImages };
    });
  };

  const handleRaffle = async () => {
    setErrors({});

    const { hostname, description, startDate, endDate, startTime, endTime, images } = formData;

    if (!hostname || !description) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!checked) {
      Alert.alert('Error', 'You must agree to the terms and conditions.');
      return;
    }

    try {
      const raffleData = {
        user_id,
        organisation_id,
        fundraising_id,
        hostname,
        description,
        images: images.filter(image => image !== null),
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        startTime: startTime.toISOString(),
        endTime: endTime.toISOString(),
        state_raffle_hosted,
      };

      const response = await create_raffle(raffleData);

      if (response.message && response.message.includes('successfully')) {
        router.replace('/raffle');
      } else {
        Alert.alert('Error', `Failed to register raffle: ${response.message}`);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to register raffle. Please try again.');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <PageHeader title="Create a Raffle" />
      </View>

      <View style={styles.form}>
        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
          <Text style={[styles.statusTitle, { color: textColor }]}>Create your first raffle</Text>
        </View>

        <View style={styles.formContainer}>
          <FormField
            title="Host name"
            placeholder="Host name"
            value={formData.name}
            handleChangeText={value => handleInputChange('name', value)}
            otherStyles={styles.formField}
            errors={errors.name}
          />
          <FormField
            title="Description"
            placeholder="Enter raffle description"
            value={formData.co}
            handleChangeText={value => handleInputChange('co', value)}
            otherStyles={styles.formField}
            errors={errors.co}
          />

          <View style={styles.imageContainer}>
            <Text style={styles.imageTitle}>Raffle item image uploads</Text>
            <View style={styles.imageUpload}>
              {formData.images.map((image, index) => (
                <View key={index} style={styles.imageWrapper}>
                  {image ? (
                    <>
                      <Image source={{ uri: image }} style={styles.image} />
                      <TouchableOpacity onPress={() => handleRemoveImage(index)} style={styles.removeButton}>
                        <Text style={styles.removeButtonText}>Remove</Text>
                      </TouchableOpacity>
                    </>
                  ) : (
                    <TouchableOpacity onPress={() => pickImage(index)} style={styles.addButton}>
                      <Ionicons name="add" size={24} color="black" />
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </View>
          </View>

          <View style={styles.dateTimeContainer}>
            <Text style={styles.label}>Start Date</Text>
            <DateTimePickerComponent value={formData.startDate} onChange={value => handleInputChange('startDate', value)} mode="date" />
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.label}>End Date</Text>
            <DateTimePickerComponent value={formData.endDate} onChange={value => handleInputChange('endDate', value)} mode="date" />
          </View>

          <View style={styles.times}>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>Start Time</Text>
              <DateTimePickerComponent value={formData.startTime} onChange={value => handleInputChange('startTime', value)} mode="time" />
            </View>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>End Time</Text>
              <DateTimePickerComponent value={formData.endTime} onChange={value => handleInputChange('endTime', value)} mode="time" />
            </View>
          </View>

          <Text className="mt-2 font-bold">Raffle ticket prices</Text>

          <View style={styles.tickets}>
            <View style={styles.priceInput}>
              <TextInput
                style={styles.input}
                placeholder="Input amount($)"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View>
              <Text className="font-bold text-base">For</Text>
            </View>
            <View>
              <Text className="border p-2 rounded border-gray-400 font-bold text-base">1 tickets</Text>
            </View>
          </View>
          <View style={styles.tickets}>
            <View style={styles.priceInput}>
              <TextInput
                style={styles.input}
                placeholder="Input amount($)"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View>
              <Text className="font-bold text-base">For</Text>
            </View>
            <View>
              <Text className="border p-2 rounded border-gray-400 font-bold text-base">5 tickets</Text>
            </View>
          </View>
          <View style={styles.tickets}>
            <View style={styles.priceInput}>
              <TextInput
                style={styles.input}
                placeholder="Input amount($)"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View>
              <Text className="font-bold text-base">For</Text>
            </View>
            <View>
              <Text className="border p-2 rounded border-gray-400 font-bold text-base">10 tickets</Text>
            </View>
          </View>
          <View style={styles.tickets}>
            <View style={styles.priceInput}>
              <TextInput
                style={styles.input}
                placeholder="Input amount($)"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View>
              <Text className="font-bold text-base">For</Text>
            </View>
            <View>
              <Text className="border p-2 rounded border-gray-400 font-bold text-base">50 tickets</Text>
            </View>
          </View>
          <View style={styles.tickets}>
            <View style={styles.priceInput}>
              <TextInput
                style={styles.input}
                placeholder="Input amount($)"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View>
              <Text className="font-bold text-base">For</Text>
            </View>
            <View>
              <Text className="border p-2 rounded border-gray-400 font-bold text-base">100 tickets</Text>
            </View>
          </View>
          
          <View style={styles.tickets}>
            <View style={styles.priceInput}>
              <TextInput
                style={styles.input}
                placeholder="Input amount($)"
                onChangeText={onChangeText}
                value={text}
              />
            </View>
            <View>
              <Text className="font-bold text-base">For</Text>
            </View>
            <View>
              <Text className="border p-2 rounded border-gray-400 font-bold text-base">150 tickets</Text>
            </View>
          </View>

          <Text className="mt-2 mb-4 text-base font-bold text-gray-500 w-3/4">The above preset value will be applied and can't be changed.</Text>

          <CheckBox
            title="By proceeding you have agreed to the terms and conditions"
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={styles.checkboxContainer}
            textStyle={styles.checkboxText}
          />

          <CustomButton
            title="Create a raffle"
            handlePress={handleRaffle}
            containerStyles={styles.button}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusBar: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  form: {
    padding: 16,
  },
  formContainer: {
    paddingVertical: 20,
  },
  formField: {
    marginVertical: 8,
  },
  dateTimeContainer: {
    marginVertical: 10,
    flex: 1
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageContainer: {
    marginVertical: 20,
  },
  imageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageUpload: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    width: '48%',
    height: 150,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 3,
    padding: 3,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#6200EE',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  times: {
    flexDirection: 'row',
    gap: 4,
  },
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  checkboxText: {
    fontSize: 14,
  },
  tickets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    gap: 10,
    width: '70%',

  },
  priceInput: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '30%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default AddRaffle;
