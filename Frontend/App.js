import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Pages/Home'
import Input from './Pages/input'
import Scan from './Pages/scan'
import Upload from './Pages/upload'
import Header from './Components/Header'


const stack = createStackNavigator();
const MyTheme = {
 
  colors: {
    
    background: '#392A48',
    
  },
};
export default function App() {
  return (
    
      <NavigationContainer theme={MyTheme}  >
        
          <stack.Navigator 
          screenOptions={{
            headerStyle: {
              backgroundColor: '#32243d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            }}
          initialRouteName="Home">
              
              <stack.Screen  name="Home" component={Home} options={{ headerTitle: props => <Header {...props} /> }} /> 
              <stack.Screen name="Upload" component={Upload} options={{ headerTitle: props => <Header {...props} /> }} />
              <stack.Screen name="Scan" component={Scan} options={{ headerTitle: props => <Header {...props} /> }} />
              <stack.Screen name="Input" component={Input} options={{ headerTitle: props => <Header {...props} /> }} />
          </stack.Navigator>
      </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
  container: {
    // marginTop: 50,
    
  },
  
});

