import React, { useState, useEffect ,useRef } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {Camera} from "expo-camera";

import { Ionicons } from '@expo/vector-icons';
import MusicPlayer from '../Components/MusicPlayer';
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

export default function upload() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const cam = useRef();

    const takePicture = async()=>{
        const option ={quality:1,base64:true,skipProcessing:false};
        
        const picture =await cam.current.takePictureAsync(option);
        if (picture.source){
            console.log(picture.source);
        }
    };
    
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
    <View style={styles.container}>
      <Camera ref={cam } style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
            <View style={{flexDirection:'row-reverse',
                justifyContent:'center',
                }}>
                <View>
                <TouchableOpacity
                        style={styles.button}
                        onPress={() =>takePicture }>
                    <Ionicons name="camera" size={60} color="#A9A9B0"/>
                </TouchableOpacity>
                </View>
            </View>
           
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    camera:{
        height:'100%'
        
    },
    camrev:{
       display:'flex',
       flexDirection:'row-reverse'
    },
    buttonContainer:{
        position: 'absolute',
        left: 0, 
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
       
    }
  });