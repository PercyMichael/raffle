import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, ScrollView, Alert, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { useRouter } from 'expo-router';
import { loadUser, createraffle } from '../../services/AuthService';
import DateTimePickerComponent from '../../components/datepicker';
import Header from '../../components/header';

const AddRaffle = ({ backgroundColor = '#fff', textColor = '#000' }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [text1, setText1] = useState('');
  const [text5, setText5] = useState('');
  const [text20, setText20] = useState('');
  const [text50, setText50] = useState('');
  const [text100, setText100] = useState('');
  const [text150, setText150] = useState('');

  const [target, setTarget] = useState('');
  const [checked, setChecked] = useState(false);
  const [hostname, setHostName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [images, setImages] = useState([null, null, null, null]);
  const [state_raffle_hosted, setStateRaffleHosted] = useState(null);
  const [errors, setErrors] = useState({});
  const router = useRouter();


  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
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

  const handleInputChange = (name, value) => {
    switch (name) {
      case 'hostname':
        setHostName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'target':
        setTarget(value);
        break;
      case 'text1':
        setText1(value);
        break;
      case 'text5':
        setText5(value);
        break;
      case 'text20':
        setText20(value);
        break;
      case 'text50':
        setText50(value);
        break;
      case 'text100':
        setText100(value);
        break;
      case 'text150':
        setText150(value);
        break;
      default:
        break;
    }
  };

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImages = [...images];
      newImages[index] = result.assets[0].uri;
      setImages(newImages);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    newImages[index] = null;
    setImages(newImages);
  };

  const handleRaffle = async () => {
    setErrors({});

    const formatDateForMySQL = (date) => {
      return date.toISOString().split('.')[0].replace('T', ' ');
    };

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
        user_id: user.id,
        organisation_id: 1,
        fundraising_id: 1,
        hostname,
        target,
        description,
        images: images.filter(image => image !== null),
        startDate: formatDateForMySQL(startDate),
        endDate: formatDateForMySQL(endDate),
        startTime: formatDateForMySQL(startTime),
        endTime: formatDateForMySQL(endTime),
        state_raffle_hosted,
        text1,
        text5,
        text20,
        text50,
        text100,
        text150
      };

      const response = await createraffle(raffleData);

      if (response.message && response.message.includes('successfully')) {
        router.replace('/raffle');
      } else {
        Alert.alert('Error', `Failed to register raffle1: ${response.message}`);
      }
    } catch (error) {
      console.error('Error registering raffle:', error);
      Alert.alert('Error', 'Failed to register raffle2. Please try again.');
    }
  };

  return (
    <ScrollView>
      <Header title="Create Raffle"/>
      <View style={styles.form}>
        <View style={[styles.statusBar, {}]}>
          <StatusBar barStyle="dark-content" backgroundColor={backgroundColor} />
          <Text style={[styles.statusTitle, { color: textColor }]}>Create your first raffle</Text>
        </View>

        <View style={styles.formContainer}>
          <FormField
            title="Host name"
            placeholder="Host name"
            value={hostname}
            handleChangeText={value => handleInputChange('hostname', value)}
            otherStyles={styles.formField}
            errors={errors.hostname}
          />
          <FormField
            title="Description"
            placeholder="Enter raffle description"
            value={description}
            handleChangeText={value => handleInputChange('description', value)}
            otherStyles={styles.formField}
            errors={errors.description}
          />

          <View style={styles.imageContainer}>
            <Text style={styles.imageTitle}>Raffle item image uploads</Text>
            <View style={styles.imageUpload}>
              {images.map((image, index) => (
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
            <DateTimePickerComponent value={startDate} onChange={value => setStartDate(value)} mode="date" />
          </View>
          <View style={styles.dateTimeContainer}>
            <Text style={styles.label}>End Date</Text>
            <DateTimePickerComponent value={endDate} onChange={value => setEndDate(value)} mode="date" />
          </View>

          <View style={styles.times}>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>Start Time</Text>
              <DateTimePickerComponent value={startTime} onChange={value => setStartTime(value)} mode="time" />
            </View>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.label}>End Time</Text>
              <DateTimePickerComponent value={endTime} onChange={value => setEndTime(value)} mode="time" />
            </View>
          </View>

          <View>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>Raffle target ($)</Text>
              <TextInput
                style={styles.target}
                placeholder="Target($)"
                onChangeText={value => handleInputChange('target', value)}
                value={target}
              />
            </View>

            <Text style={styles.ticketLabel} className="mt-4">Raffle ticket Price</Text>
          </View>

          <View style={styles.ticketContainer}>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>1 Ticket</Text>
              <TextInput
                style={styles.ticketInput}
                placeholder="Amount($)"
                onChangeText={value => handleInputChange('text1', value)}
                value={text1}
              />
            </View>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>5 Tickets</Text>
              <TextInput
                style={styles.ticketInput}
                placeholder="Amount($)"
                onChangeText={value => handleInputChange('text5', value)}
                value={text5}
              />
            </View>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>20 Tickets</Text>
              <TextInput
                style={styles.ticketInput}
                placeholder="Amount($)"
                onChangeText={value => handleInputChange('text20', value)}
                value={text20}
              />
            </View>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>50 Tickets</Text>
              <TextInput
                style={styles.ticketInput}
                placeholder="Amount($)"
                onChangeText={value => handleInputChange('text50', value)}
                value={text50}
              />
            </View>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>100 Tickets</Text>
              <TextInput
                style={styles.ticketInput}
                placeholder="Amount($)"
                onChangeText={value => handleInputChange('text100', value)}
                value={text100}
              />
            </View>
            <View style={styles.ticketColumn}>
              <Text style={styles.ticketLabel}>150 Tickets</Text>
              <TextInput
                style={styles.ticketInput}
                placeholder="Amount($)"
                onChangeText={value => handleInputChange('text150', value)}
                value={text150}
              />
            </View>
          </View>

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

export default AddRaffle;

const styles = StyleSheet.create({
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
    marginBottom: 10
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
  ticketContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ticketColumn: {
    width: '48%',
    marginBottom: 10,
  },
  ticketLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ticketInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  target: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  }
});

