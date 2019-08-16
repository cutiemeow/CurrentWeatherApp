import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppContainer} from './src/navigate/';

export default function App() {
  return (
    <AppContainer style = {styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
