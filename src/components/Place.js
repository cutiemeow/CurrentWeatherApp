import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

const Place = ({
    placeName,time
}) => (
    curTime = moment().format("dddd || MMMM Do YYYY || h:mm a"),
    <View style = {styles.container} >
        <Text style ={styles.placeName} >{placeName}</Text>
        <Text style = {styles.curTime} >{curTime}</Text>
    </View>
);
const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    placeName:{
        fontSize: 24
    },
    curTime:{
        fontSize: 14
    }
});
export default Place;
