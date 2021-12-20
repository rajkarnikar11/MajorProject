import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
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
            <Text style={styles.logo}>logo</Text>
            <Text style={styles.text}>Smart Music</Text>
            <Text style={styles.zero}>zero</Text>
            <StatusBar style="dark" backgroundColor= '#32243d'  />
        </View>
                )
            }            
                
const styles = StyleSheet.create({
    container: {
        
        flexDirection:'row',
        width: '100%',
        height: '100%',
        justifyContent:'space-between',
        resizeMode: 'contain',
      
    },
    text: {
       display:'flex',
       justifyContent:'center',
       fontFamily:'DancingScript_600SemiBold',      
       fontSize:30, 
       color:'#F9F5EC',
       width:'50%',
       textAlign:'center' ,
       alignItems:'center'


 
    },
    logo: {
           
    },
    zero: {
        opacity:0       
    }
    
    
  });