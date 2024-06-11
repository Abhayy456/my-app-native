import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomButton from "./components/CustomButton";
import FormField from "./components/FormField";
import { BarChart, StackedBarChart } from "react-native-chart-kit";
import { barData } from "../constants/mockData";

import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { images, icons } from "../constants";
import { useState } from "react";

import { faker } from "@faker-js/faker";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>ljhbas</Text>
    </View>
  );
};

const UserDetails = () => {
  return (
    <ScrollView
      style={styles.userDetails}
      className="flex flex-col mt-24 w-full px-6"
    >
      <View className="flex flex-row justify-between gap-6">
        <Text className="text-white	font-psemibold text-lg">My Earnings</Text>
        <Image source={icons.help} resizeMode="contain" className="w-6 h-6" />
      </View>
      <View className="rounded-lg mt-6" style={styles.rangeContainer}>
        <Text className="pt-6 flex flex-row items-center justify-center text-center text-base font-semibold">
          19 Feb - 25 Feb
        </Text>
        <Text
          style={styles.amountText}
          className="font-bold text-5xl text-center pt-6"
        >
          ₹ 10,200
        </Text>
        <Text className="text-white">ahidsbnihabnsd</Text>
      </View>
    </ScrollView>
  );
};

export default function App() {
  const randomName = faker.person.fullName();

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        contentContainerStyle={{ height: "100%", backgroundColor: "#D9D9D9" }}
      >
        <View className="w-full items-center h-full">
          <Header />
          <CustomButton
            title={"login"}
            containerStyles="w-full m-24"
            handlePress={() => router.push("home")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    display: "flex",
    backgroundColor: "#25408F",
    height: "30%",
  },
  userDetails: {
    position: "absolute",
  },
  rangeContainer: {
    backgroundColor: "white",
  },
  amountText: {
    color: "#079455",
  },
});
