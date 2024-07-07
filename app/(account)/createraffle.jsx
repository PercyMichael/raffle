import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';
import Header from '../../components/header';


function handleCreateRaffle() {
  console.log('Proceed to create raffle, STEP 1...');
  router.push('/organisation')
}


const CreateRaffle = () => {
  return (
    <ScrollView>
      <Header title="Create Raffle Procedure"/>

      <View className="mt-6">
        <View style={styles.raffles} className="p-6 w-3/4 mx-auto my-4 relative">
          <View className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-1 border border-gray-500 rounded-full bg-primary">
            <View style={styles.topbar}>
              <Ionicons
                name="lock-closed"
                size={18}
                color={'white'}
              />
              <Text className="text-center font-semibold text-white">Step 1</Text>
            </View>

          </View>
          <Text className="text-center text-gray-700 font-semibold text-base">Setup Your Organization</Text>
          <Text className="mt-4 text-center text-gray-600">
            Inform us about your organization. Setup information for your raffle Step 3 is where.
          </Text>
        </View>

        <View style={styles.raffles} className="p-6 w-3/4 mx-auto my-4 relative">
          <View className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full bg-primary">
            <View style={styles.topbar}>
              <Ionicons
                name="lock-closed"
                size={18}
                color={'white'}
              />
              <Text className="text-center font-semibold text-white">Step 2</Text>
            </View>
          </View>
          <Text className="text-center text-gray-700 font-bold text-base">Setup Host Payout Info</Text>
          <Text className="mt-4 text-center text-gray-600">
            Please let us know to whom and where we should send your share of the money.
          </Text>
        </View>

        <View style={styles.raffles} className="p-6 w-3/4 mx-auto my-4 relative">
          <View className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full bg-primary">
            <View style={styles.topbar}>
              <Ionicons
                name="lock-closed"
                size={18}
                color={'white'}
              />
              <Text className="text-center font-semibold text-white">Step 3</Text>
            </View>
          </View>
          <Text className="text-center text-gray-700 text-base font-bold">Create Your First Raffle</Text>
          <Text className="mt-4 text-center text-gray-600">
            Describe the occasion for which you are raising funds to us, then set up your raffle.
          </Text>
        </View>
      </View>

      <View className="items-center">
        <CustomButton
          title="Proceed"
          handlePress={handleCreateRaffle}
          containerStyle={styles.customButton}
          containerStyles="mt-7 px-2 py-1 w-2/4"
        />
      </View>

    </ScrollView>
  )
}

export default CreateRaffle;

const styles = StyleSheet.create({
  raffles: {
    padding: 16,
    margin: 16,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  topbar: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  customButton: {
    padding: 12,
    backgroundColor: '#6200EE',
    borderRadius: 8,
    marginVertical: 20,
  },
});