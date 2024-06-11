import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
const RateCardTable = (props) => {
    Rates_array = [
        ["item 1", "23.00"],
        ["item 1", "23.00"],
        ["item 1", "23.00"],
        ["item 1", "23.00"],
        ["item 1", "23.00"],
        ["item 1", "23.00"],
        ["item 1", "23.00"],
    ]
    return (
        <View className="w-[85vw]  bg-white rounded-xl py-10 mt-5">
            <Text className="ml-5 text-lg font-bold"> {props.heading} </Text>
            <View>
                <View className="flex-row justify-between mx-3 p-1 border-b  border-gray-400">
                    <Text className="text-gray-400 font-md text-lg">Type</Text>
                    <Text className="text-gray-400">Rate ₹</Text>
                </View>
                { Rates_array.map((item , index) => {
                    return (
                     <View className="flex-row justify-between mx-3 p-2 border-b  border-gray-400">
                        <Text className="">{item[0]}</Text>
                        <Text className="">{item[1]}</Text>
                    </View>
                    )
                })
                }
            </View>
        </View>
    )
}
export default RateCardTable;