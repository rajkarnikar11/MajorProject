import React, { useState, useEffect } from 'react';
import { View, Animated,Text,StyleSheet ,Pressable, Button,Image  } from 'react-native'
import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
import Input from './input'
import Scan from './scan'
import Upload from './upload'
import Header from '../Components/Header'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { 
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic 
  } from '@expo-google-fonts/montserrat'

  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  const Tab = createBottomTabNavigator();
  export default function Home({ navigation }) {
    useEffect(() => {
        
      });
    let [fontsLoaded, error]= useFonts({
        Montserrat_100Thin,
        Montserrat_100Thin_Italic,
        Montserrat_200ExtraLight,
        Montserrat_200ExtraLight_Italic,
        Montserrat_300Light,
        Montserrat_300Light_Italic,
        Montserrat_400Regular,
        Montserrat_400Regular_Italic,
        Montserrat_500Medium,
        Montserrat_500Medium_Italic,
        Montserrat_600SemiBold,
        Montserrat_600SemiBold_Italic,
        Montserrat_700Bold,
        Montserrat_700Bold_Italic,
        Montserrat_800ExtraBold,
        Montserrat_800ExtraBold_Italic,
        Montserrat_900Black,
        Montserrat_900Black_Italic 
    });
    if (!fontsLoaded){
        return <AppLoading />
    }
    return (
        <View >
           
               
               
            {/* <Button style={styles.butt} title="scan" onPress={() => navigation.navigate('Scan')} />
            <Button style={styles.butt} title="Input" onPress={() => navigation.navigate('Input')} />
            <Button style={styles.butt} title="Upload" onPress={() => navigation.navigate('Upload')} /> */}
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Scan')}>
                    
                    <Ionicons style={styles.icon} name="camera-outline" size={35} color="#A9A9B0" />
                    <Text style={styles.text}>Scan</Text>
                </Pressable>  
                <Pressable style={styles.button} onPress={() => navigation.navigate('Input')}>
                    <Ionicons name="clipboard-outline" style={styles.icon} size={35} color="#A9A9B0"/>
                    <Text style={styles.text}>Input</Text>
                </Pressable>  
                <Pressable style={styles.button} onPress={() => navigation.navigate('Upload')}>
                
                    <Ionicons name="cloud-upload-outline" style={styles.icon} size={35} color="#A9A9B0"/>
                    <Text style={styles.text}>Upload</Text>
                </Pressable> 
            </View> 
            
                {/* <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Input" component={Input} />
                </Tab.Navigator> */}
                
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        display:'flex',
        backgroundColor:'#A9A9B0',
        margin:20,
        elevation:20,
        borderRadius:50,
        paddingVertical:10,
        justifyContent:'space-between',
        position:'relative',
        
    },
    icon:{
        position:'absolute',
        left:1,
        top:0,
        backgroundColor:'#32243d',
        borderRadius:50,
        padding:2,
        margin:2,
        elevation:5,
        
        
    },
   
    image:{
        height:50
    },
    buttonContainer:{
           
      marginVertical:200
       
   

        
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontFamily:'Montserrat_500Medium',
        color:'#32243d',
        elevation:5,
        
    }
    
  });