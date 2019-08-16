import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";


const WeatherDescription = ({weatherMain,weatherDescription, weatherIcon}) => (
    iconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png",
    <View style = {styles.container} >
        <Image 
           source = {{uri : iconURL}}
           style = {{height : 100, width: 100}} />
        <Text style = {styles.textWeatherMain} >
            {weatherMain}
        </Text>
        <Text style = {styles.textDescription} >
            {weatherDescription}
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical : 60
    },
    textDescription:{
        fontSize: 12,
    },
    textWeatherMain:{
        fontSize: 22
    }
});
export default WeatherDescription;
