import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
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
    const [selectedImage, setSelectedImage] = useState(null);
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();

            if (pickerResult.cancelled === true) {
            return;
            }

            setSelectedImage({ localUri: pickerResult.uri });
        };

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
    
    if (selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Text style={styles.instructions}>
                Uploaded Music sheet
            </Text>  
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
            <MusicPlayer  style={styles.music} />
          </View>
        );
      }
    
      return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
            <Text style={styles.instructions}>
                Upload Music sheet
            </Text>

            <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        position:'relative'
    },
    instructions:{
        textAlign:'center',
        marginHorizontal:10,
        marginTop:50,
        color:'#F9F5EC',
        fontSize:20,
        fontFamily:'Montserrat_400Regular',
    },
    button:{
        backgroundColor:'#F9F5EC',
        marginHorizontal:50,
        padding:20,
        borderRadius:50,
        textAlign:'center',
        marginVertical:40,
        elevation:10,
        borderColor:'#171717',
        borderWidth:  2,
    },
    buttonText:{
        textAlign:'center',
        fontSize:20,
        fontFamily:'Montserrat_400Regular',
        color:'#32243d'
        
    },
    thumbnail: {
        width: 350,
        height: 350,
        resizeMode: "contain",
        marginHorizontal:20,
      },
    music:{
        backgroundColor:'red',
        position:'absolute',
        height:500
    }
    
  });
