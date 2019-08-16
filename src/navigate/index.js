import React from 'react';
import {createAppContainer,createStackNavigator} from 'react-navigation';
import MainScreen from '../screens/MainScreen';


const MainStack = createStackNavigator({
    MainScreen : {
        screen: MainScreen,
        navigationOptions:{
            header: null
        }
    }
});
export const AppContainer = createAppContainer(MainStack);

