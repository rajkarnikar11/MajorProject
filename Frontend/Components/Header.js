import React from 'react'
import { View, Text,StyleSheet, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { 
    DancingScript_400Regular,
    DancingScript_500Medium,
    DancingScript_600SemiBold,
    DancingScript_700Bold 
  } from '@expo-google-fonts/dancing-script'


export default function Header() {
    let [fontsLoaded, error]= useFonts({
        DancingScript_400Regular,
        DancingScript_500Medium,
        DancingScript_600SemiBold,
        DancingScript_700Bold 
    });
    if (!fontsLoaded){
        return <AppLoading />
    }
    return (
        <View style={styles.container}>
            {/* <Text style={styles.logo}>logo</Text> */}
            <Text style={styles.text}>
                {/* <Image source={require('../assets/svg/logo.svg')}/> */}
                Smart Music
            </Text>
            
            <StatusBar style="dark" backgroundColor= '#32243d'  />
        </View>
                )
            }            
                
const styles = StyleSheet.create({
    container: {
        
        flexDirection:'row',
        width: '100%',
        height: '100%',
        justifyContent:'space-around',
        resizeMode: 'contain',
      
    },
    text: {
       display:'flex',
       justifyContent:'center',
       fontFamily:'DancingScript_600SemiBold',      
       fontSize:30, 
       color:'#F9F5EC',
       width:'100%',
       textAlign:'center' ,
       alignItems:'center',
       textAlign:'center'


 
    },
    logo: {
          
    },
    zero: {
        opacity:0       
    }
    
    
  });