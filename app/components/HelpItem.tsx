import { View, Text, Image } from 'react-native'
import React from 'react'


const HelpItem = (props) => {
  return (
    <View className="   py-5 w-[85vw] mb-4 px-5 bg-white rounded-xl flex-row justify-between shadow-md items-center">
        <View className="flex-row gap-2">
        <Image source={props.imageurl}></Image>
        <View>
            <Text>{props.firstText} </Text>
            {props.secondText !== "" && <Text>{props.secondText}</Text>}
        </View>
        </View>
        <Image source={require("../../assets/icons/chevron-right.png")}></Image>
        
    </View>
  )
}

export default HelpItem