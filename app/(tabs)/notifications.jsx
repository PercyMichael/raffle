import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default Notifications = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="h-full">
          <Text>Notifications</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}