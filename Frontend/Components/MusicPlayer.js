import React from 'react'
import { View,Text, Button,StyleSheet,Pressable, TextInput, SafeAreaView } from 'react-native'
// import Icon from 'react-native-vector-icons/Ionicons';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';
export default function MusicPlayer() {
    return (
        <View style={styles.container}>
           <Pressable style={styles.button} android_ripple={{color: '#392A48', borderless: true}}>           
                <Ionicons style={styles.icon} name="repeat" size={15} color="#A9A9B0" />
            </Pressable>
           <Pressable style={styles.button} android_ripple={{color: '#392A48', borderless: true}}>           
                <Ionicons style={styles.icon} name="play-skip-back" size={30} color="#A9A9B0" />
            </Pressable>
            <Pressable style={styles.button} android_ripple={{color: '#392A48', borderless: true}}>
                <Ionicons style={styles.icon} name="play" size={30} color="#A9A9B0" />            
            </Pressable>
            <Pressable style={styles.button} android_ripple={{color: '#392A48', borderless: true}}>
                <Ionicons style={styles.icon} name="play-skip-forward" size={30} color="#A9A9B0" />
            </Pressable>
            <Pressable style={styles.button} android_ripple={{color: '#392A48', borderless: true}}>           
                <Ionicons style={styles.icon} name="list" size={15} color="#A9A9B0" />
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
      backgroundColor:'#C0C0C0',
      borderColor:'black',
      
      marginTop:80,
      marginHorizontal:20,
      borderRadius:50,
      elevation:20,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-evenly',
      paddingVertical:30,
      alignItems:'center'
    },
    icon:{
        elevation:20,
        backgroundColor:'#32243d',
        borderRadius:50,
        padding:10
        
    }
       
    
  });


