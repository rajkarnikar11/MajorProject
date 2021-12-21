import React from "react";
import { useFonts } from 'expo-font';
import {Text, SafeAreaView,View, StyleSheet,Pressable ,TextInput } from "react-native";
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

const Input = () => {
    const [number, onChangeNumber] = React.useState(null);
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
    
    return (
      <SafeAreaView>
        <Text style={styles.header}>
            Input Music
        </Text>
        <TextInput
        
          style={styles.input}
         
          onChangeText={onChangeNumber}
          value={number}
          placeholder='Enter Chords Here'
          keyboardType='default'
          autoCapitalize="characters"
        />
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} android_ripple={{color: '#392A48', borderless: true}}>
              <Ionicons name="play-circle" style={styles.icon} size={55} color="#32243d"/>
              
              <Text style={styles.text}>Play</Text>
          </Pressable> 
        </View> 
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        height: 250,
        margin: 10,
        borderWidth:1,
        borderRadius: 12,
        padding: 10,
        color:'red',
        backgroundColor:'white',
        textAlign:'center',
    },
    header:{
        textAlign:'center',
        marginHorizontal:10,
        marginTop:50,
        color:'#F9F5EC',
        fontSize:20,
        fontFamily:'Montserrat_400Regular',
    },
    button:{
        display:'flex',
        backgroundColor:'#A9A9B0',
        position:'relative',
        padding:10,
        marginVertical:20,
        marginHorizontal:100,
        textAlign:'center',
        borderRadius:50,
        elevation:20
        
    },
    buttonContainer:{
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderRadius: 10,
      
      margin: 0,
      
    },  
    icon:{
        position:'absolute',
        top:-2.5,
        left:4
    },
    text:{
        textAlign:'center',
        fontSize: 25,
        fontFamily:'Montserrat_400Regular',
    }

  });
  
  export default Input;