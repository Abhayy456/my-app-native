import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import HelpItem from "../components/HelpItem";
import { icons } from "../../constants";

// import MessageIcon from "../assets/icons/messages.png";
// import PhoneIcon from "../assets/icons/phone.png";
// import ChatIcon from "../assets/icons/chat.png";
// import QueryIcon from "../assets/icons/query.png";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>ljhbas</Text>
    </View>
  );
};

const HelpScreen = () => {
  return (
    <>
      <Header />
      <View className="flex mt-[5vh] absolute ml-6 mt-24">
        <View className="flex-row mb-[5vh] flex-start text-left">
          <Image source={icons.arrow}></Image>
          <Text className="text-white font-bold text-lg ">
            {" "}
            Contact Support{" "}
          </Text>
        </View>

        <HelpItem
          firstText="Our 24*7 Customer Service"
          secondText="0222222222"
          imageurl={icons.phone}
        />
        <HelpItem
          firstText="Write us at"
          secondText="abcd@support.com"
          imageurl={icons.messages}
        />
        <HelpItem firstText="Chat with Support" imageurl={icons.chat} />
        <HelpItem firstText="FAQ" imageurl={icons.query} />
      </View>
    </>
  );
};

export default HelpScreen;

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
