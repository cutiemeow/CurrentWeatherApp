import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';
import {listIMG} from '../img';
import { LinearGradient } from 'expo-linear-gradient';
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

import { Feather, Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
import Temperature from '../components/Temperature';
import WeatherDescription from '../components/WeatherDescription';
import Place from '../components/Place';
import DetailsWeather from '../components/DetailsWeather';
import {getWeather} from '../utils';



export default class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        curWeather : {},
        temperatureC : '',
        description: '',
        icon: '',
        weatherMain: '',
        placeName : '',
        time: '',
        wind: '',
        humidity :'',
        pressure: ''
    };
  }
  getLocationAsync = async() =>{
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        if(status !== 'granted'){
            return;
        }
        const location = await Location.getCurrentPositionAsync();
        const curWeather = await getWeather(location.coords.latitude,location.coords.longitude);
        const temperatureC = await (curWeather.main.temp - 273.15).toFixed(1);
        const description = await curWeather.weather[0].description;
        const icon = await curWeather.weather[0].icon;
        const weatherMain = await curWeather.weather[0].main;
        const placeName = await curWeather.name;
        const time = await curWeather.dt;
        const wind = await curWeather.wind.speed;
        const humidity = await curWeather.main.humidity;
        const pressure = await curWeather.main.pressure;

        this.setState({
            temperatureC,
            description,
            icon,
            weatherMain,
            placeName,
            time,
            wind,
            humidity,
            pressure,
            loading : false
        })
  }
  componentDidMount =  () =>{
      //get API every min
    this.getLocationAsync();
    this.timer = setInterval(()=> this.getLocationAsync(), 60000)
  }

  render() {
      // 
      if(this.state.loading){
          return (
              <ActivityIndicator size = 'large' style = {{flex: 1}} />
          );
      }
      else{
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                <View style={styles.empty} ></View>
                    <View style = {styles.weather} >
                        <WeatherDescription
                            weatherDescription = {this.state.description}
                            weatherIcon = {this.state.icon}
                            weatherMain = {this.state.weatherMain} >
                        </WeatherDescription>
                        <Temperature
                            temperature = {this.state.temperatureC} >
                        </Temperature>
                    </View>
                    <View style = {styles.place} >
                        <Place
                            placeName = {this.state.placeName}
                            time = {this.state.time} >
                        </Place>  
                    </View>
                    <View style={styles.detailWeather} >
                        <View style = {styles.containerDetail}>  
                            <Feather
                                name = 'wind'
                                size = {25} />
                            <Text>
                                Wind
                            </Text>
                            <Text>
                                {this.state.wind} m/s
                            </Text>
                        </View>
                        <View style = {styles.containerDetail}>  
                            <Entypo
                                name = 'water'
                                size = {25} />
                            <Text>
                                Humidity
                            </Text>
                            <Text>
                                {this.state.humidity} %
                            </Text>
                        </View> 
                        <View style = {styles.containerDetail}>  
                            <MaterialCommunityIcons
                                name = 'speedometer'
                                size = {25} />
                            <Text>
                                Pressure
                            </Text>
                            <Text>
                                {this.state.pressure} hPa
                            </Text>
                        </View>      
                    </View>
                </View>
                <LinearGradient
                    colors={['rgba(0,0,0,0.2)', 'transparent']}
                    style = {styles.gradient} >
                </LinearGradient>
            </View>
        );
    }
    
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column",
        justifyContent: "space-around"
        
        
    },
    
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
    },
    weather:{
        flex: 0.5,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    place:{
        flex : 0.2
    },
    empty:{
        flex: 0.1
    },
    detailWeather:{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    containerDetail:{
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    }
    
});
