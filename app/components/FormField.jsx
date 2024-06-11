import { View, Text, TextInput } from "react-native";
import React from "react";
// import { TextInput } from "react-native-gesture-handler";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  return (
    <View className={`m-4 space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-white-500 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary">
        <TextInput className="flex-1 text-white font-psemibold text-base"></TextInput>
      </View>
    </View>
  );
};

export default FormField;
