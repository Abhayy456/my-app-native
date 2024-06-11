import { View, Text, SafeAreaView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-web";
import FormField from "../components/FormField";
import { useState } from "react";
import { images } from "../../constants";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      {/* <ScrollView> */}
      <View>
        <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]"/>
        <Text className="m-4 mb-0 text-primary font-psemibold text-lg">
          Log in to Aora
        </Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-7"
          keyboardType="email-address"
        />
        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles="mt-7"
          keyboardType="password"
        />
        {/* <Text>yasLBis</Text> */}
      </View>
      {/* </ScrollView> */}
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;
