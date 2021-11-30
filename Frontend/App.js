import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Pages/Home'
import Input from './Pages/input'
import Scan from './Pages/scan'
import Upload from './Pages/upload'

const stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen  name="Home" component={Home} /> 
        <stack.Screen name="Upload" component={Upload} />
        <stack.Screen name="Scan" component={Scan} />
        <stack.Screen name="Input" component={Input} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
