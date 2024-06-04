import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';

import Gamepad from "../../assets/images/pads.png";
import ProfileImg from '../../assets/images/profile.png';

export default function Raffle() {
  return (
    <ScrollView>
      <View className="w-full">
        <Image source={Gamepad} style={styles.gamepadImage} className="rounded w-full" />
      </View>
      <View style={styles.listrafle} className="gap-2 justify-center item">
        <View>
          <Image source={Gamepad} style={styles.gImage} className="rounded" />
        </View>
        <View>
          <Image source={Gamepad} style={styles.gImage} className="rounded" />
        </View>
        <View>
          <Image source={Gamepad} style={styles.gImage} className="rounded" />
        </View>
      </View>
      <View className="p-4">
        <Text className="text-txtcolor font-bold text-2xl">
          Skyline Jamaican restaurant
        </Text>
        <View className="mt-2">
          <Text className="text-lg font-bold">Description</Text>
          <Text className="text-base">Fundraising to help sports club, in old Folly district, St. Anns Jamaica</Text>
        </View>
        <View className="mt-4">
          <Text className="text-lg font-bold">Time left</Text>
          <View className="bg-primary p-2 rounded mt-2 space-x-4" style={styles.timeleft}>
            <View>
              <Text className="font-bold text-secondary text-center">30</Text>
              <Text className="font-bold text-secondary text-center">DAYS</Text>
            </View>
            <View>
              <Text className="font-bold text-secondary text-center">30</Text>
              <Text className="font-bold text-secondary text-center">HOURS</Text>
            </View>
            <View>
              <Text className="font-bold text-secondary text-center">30</Text>
              <Text className="font-bold text-secondary text-center">MINUTES</Text>
            </View>
            <View>
              <Text className="font-bold text-secondary text-center">30</Text>
              <Text className="font-bold text-secondary text-center">SECONDS</Text>
            </View>
          </View>
          <View style={styles.enddate} className="mt-2">
            <Text className="text-sm font-bold text-txtcolor">Raffle ends</Text>
            <Text className="text-sm font-bold text-primary">December 15, 2023, 5:47 pm</Text>
          </View>
          <View style={styles.support} className="mt-4 gap-2 w-full">
            <View style={styles.supportItem}>
              <Text className="font-bold text-bgcolor text-xl">Do Good. Support Our Cause Today!</Text>
            </View>
            <View style={styles.supportBtn}>
              <CustomButton
                title="Support"
                handlePress={() => { }}
                containerStyles="mt-3 justify-center items-center" />
            </View>
          </View>
          <View className="mt-2">
            <View style={styles.pricing}>
              <View className="bg-primary rounded p-2" style={styles.priceItem}>
                <Text className="font-bold text-secondary text-lg">3</Text>
                <Text className="text-base font-bold text-secondary">Tickets</Text>
                <Text className="font-bold text-secondary">$ 100</Text>
              </View>
              <View className="bg-primary rounded p-2" style={styles.priceItem}>
                <Text className="font-bold text-secondary text-lg">10</Text>
                <Text className="text-base font-bold text-secondary">Tickets</Text>
                <Text className="font-bold text-secondary">$ 100</Text>
              </View>
              <View className="bg-primary rounded p-2" style={styles.priceItem}>
                <Text className="font-bold text-secondary text-lg">30</Text>
                <Text className="text-base font-bold text-secondary">Tickets</Text>
                <Text className="font-bold text-secondary">$ 100</Text>
              </View>
              <View className="bg-primary rounded p-2" style={styles.priceItem}>
                <Text className="font-bold text-secondary text-lg">50</Text>
                <Text className="text-base font-bold text-secondary">Tickets</Text>
                <Text className="font-bold text-secondary">$ 100</Text>
              </View>
              <View className="bg-primary rounded p-2" style={styles.priceItem}>
                <Text className="font-bold text-secondary text-lg">90</Text>
                <Text className="text-base font-bold text-secondary">Tickets</Text>
                <Text className="font-bold text-secondary">$ 100</Text>
              </View>
              <View className="bg-primary rounded p-2" style={styles.priceItem}>
                <Text className="font-bold text-secondary text-lg">150</Text>
                <Text className="text-base font-bold text-secondary">Tickets</Text>
                <Text className="font-bold text-secondary">$ 100</Text>
              </View>
            </View>
            <CustomButton
              title="Get a ticket"
              handlePress={() => { }}
              containerStyles="mt-3 justify-center items-center" />
          </View>
          <View className="mt-4">
            <View style={styles.rafflestatus} className="gap-2">
              <View className="bg-bgcolor rounded">
                <Text className="text-secondary p-2 font-bold">Description</Text>
              </View>
              <View className="border border-bgcolor rounded">
                <Text className="text-primary p-2 font-bold">Raffle history</Text>
              </View>
              <View className="border border-bgcolor rounded">
                <Text className="text-primary p-2 font-bold">Live support</Text>
              </View>
            </View>
          </View>
          <View className="mt-4">

          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gamepadImage: {
    height: 300,
    resizeMode: 'contain',
    width: '100%',
    borderRadius: 15,
  },
  gImage: {
    height: 100,
    width: 100,
    margin: 4
  },
  listrafle: {
    flexDirection: 'row',
    // padding: 2
  },
  timeleft: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  enddate: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  support: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 4
  },
  supportItem: {
    width: '65%'
  },
  supportBtn: {
    width: 'auto'
  },
  pricing: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4
  },
  priceItem: {
    width: '30%',
    margin: 3,
    alignItems: 'center'
  },
  rafflestatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 3
  }
});
