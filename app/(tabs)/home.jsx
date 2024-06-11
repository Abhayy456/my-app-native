import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { icons } from "../../constants";
import { bankDetails } from "../../constants/mockData";
import { router } from "expo-router";

const Header = () => {
  return <View style={styles.headerContainer}></View>;
};

const UserDetails = () => {
  return (
    <ScrollView
      style={styles.userDetails}
      className="flex flex-col mt-24 w-full px-6"
    >
      <View className="flex flex-row justify-between gap-6">
        <Text className="text-white	font-psemibold text-lg">My Earnings</Text>
        <Pressable onPress={() => router.push("help")}>
          <Image source={icons.help} resizeMode="contain" className="w-6 h-6" />
        </Pressable>
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
        <View className="bg-slate-50 pt-8 pb-8 rounded-lg mt-6">
          <Text className="text-base font-semibold text-center">
            Earning History
          </Text>
        </View>
        <UserBankDetails />
        <View className="bg-slate-50 pt-8 pb-8 rounded-lg w-full mt-6 flex flex-row justify-center items-center pr-8">
          <Text className="text-base font-semibold text-left w-full p-6">
            Rate Card
          </Text>
          <Image
            source={icons.chevron}
            resizeMode="contain"
            className="w-4 h-4"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const UserBankDetails = () => {
  return (
    <View className="rounded-lg mt-8 p-5" style={styles.bankDetails}>
      <View className="flex flex-row gap-5">
        <Image source={icons.bank} resizeMode="contain" className="w-6 h-6" />
        <Text className="decoration-gray-700" style={styles.bankDetailsText}>
          {bankDetails.bankName}
        </Text>
      </View>
      <View className="mt-5">
        <Text
          className="font-weight-700 text-2xl"
          style={styles.bankDetailsText}
        >
          {bankDetails.accountName}
        </Text>
        <Text
          className="font-weight-500 text-base"
          style={styles.bankDetailsText}
        >
          UTR Reference No: {bankDetails.accountNumber}
        </Text>
        <View className="flex flex-row gap-12">
          <View className="flex flex-col">
            <Text
              className="mt-3 text-xl font-weight-600"
              style={styles.bankDetailsText}
            >
              {bankDetails.amountDue}
            </Text>
            <Text className="font-weight-500" style={styles.bankDetailsText}>
              Amount Due
            </Text>
          </View>
          <View className="flex flex-col">
            <Text
              className="mt-3 text-xl font-weight-600"
              style={styles.bankDetailsText}
            >
              {bankDetails.disbursementDate}
            </Text>
            <Text className="font-weight-500" style={styles.bankDetailsText}>
              Disbursement Date
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <View className=" w-full">
      <Header />
      <UserDetails />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    display: "flex",
    backgroundColor: "#25408F",
    height: "60%",
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
  earningHistoryText: {
    fontFamily: "Inter",
  },
  bankDetails: {
    backgroundColor: "#25408F",
  },
  bankDetailsText: {
    color: "white",
  },
});
