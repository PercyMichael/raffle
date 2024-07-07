import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useRoute } from '@react-navigation/native';

const Notifications = () => {
  const router = useRouter();
  const route = useRoute();
  // const { id } = route.params;

  return (
    <ScrollView contentContainerStyle={{ height: '100%' }}>
      <View className="h-full p-4">
        <View style={styles.notification}>
          <Text className="font-bold text-lg text-txtcolor">Notifications</Text>
          <View style={styles.notificationIcon}>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon} className="">
              <FontAwesome
                name="gear"
                color="gray"
                size={24}
              />
            </Pressable>
            <Pressable onPress={() => router.push('/settings')} style={styles.icon} className="rounded-full"
            >
              <Ionicons
                name="search"
                color="gray"
                size={24}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationIcon: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    margin: 2,
    padding: 4
  }
})