import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import {Feather} from "@expo/vector-icons";

const DetailsWeather = ({
    nameIcon,
    content,
    value,
    unit
}) => (
    <View style = {styles.container}>  
        <Feather
            name = {nameIcon}
            size = {25} />
        <Text>
            {content}
        </Text>
        <Text>
            {value} {unit}
        </Text>
    </View>
);
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    }
});

export default DetailsWeather;
