import { View, Text, Image } from 'react-native'
import React from 'react'
import HelpItem from "./components/HelpItem"

import MessageIcon from "../assets/icons/messages.png"
import PhoneIcon from "../assets/icons/phone.png"
import ChatIcon from "../assets/icons/chat.png"
import QueryIcon from "../assets/icons/query.png"

const HelpScreen = () => {
  return (
    <View className="absolute mt-[5vh] ">
      <View className="flex-row mb-[5vh]">
        <Image source={require("../assets/icons/arrow-narrow-left.png")}></Image>
        <Text className="text-white font-bold text-lg "> Contact Support </Text>
      </View>

      <HelpItem firstText="Our 24*7 Customer Service" secondText="0222222222" imageurl={PhoneIcon}/>
      <HelpItem firstText="Write us at" secondText="abcd@support.com" imageurl={MessageIcon}/>
      <HelpItem firstText="Chat with Support" imageurl={ChatIcon}/>
      <HelpItem firstText="FAQ" imageurl={QueryIcon}/>

    </View>
  )
}

export default HelpScreen;