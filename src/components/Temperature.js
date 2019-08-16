import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const Temperature = (props) => (
    <View style = {styles.container}>
        <Text style = {styles.temperature} >
            {props.temperature}
            <MaterialCommunityIcons
                name = 'temperature-celsius'
                size = {22}
                colors = 'black' />
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "center",
        marginVertical: 60
    },
    temperature:{
        fontSize: 40
    }
});

export default Temperature;
