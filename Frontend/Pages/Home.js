import React from 'react'
import { View, Text,StyleSheet ,Pressable, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Scan from './scan';
import Input from './input';
import Upload from './upload';
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {
   
    return (
        <View >
           
               
               
            {/* <Button style={styles.butt} title="scan" onPress={() => navigation.navigate('Scan')} />
            <Button style={styles.butt} title="Input" onPress={() => navigation.navigate('Input')} />
            <Button style={styles.butt} title="Upload" onPress={() => navigation.navigate('Upload')} /> */}
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Scan')}>
                    <Text style={styles.text}>Scan</Text>
                </Pressable>  
                <Pressable style={styles.button} onPress={() => navigation.navigate('Input')}>
                    <Text style={styles.text}>Input</Text>
                </Pressable>  
                <Pressable style={styles.button} onPress={() => navigation.navigate('Upload')}>
                    <Text style={styles.text}>Upload</Text>
                </Pressable> 
            </View> 
            
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        display:'flex',
        backgroundColor:'#A9A9B0',
        margin:50,
        elevation:20,
        borderRadius:50,
        paddingVertical:20,
        justifyContent:'space-between',
       
    },
   
    
    buttonContainer:{
        
        

        
    },
    text:{
        textAlign:'center',
    }
    
  });