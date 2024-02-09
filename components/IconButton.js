import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IconButton({onPress, icon, color}) {
  return (
    <Pressable
     style={styles.press}
     onPress={onPress}
     >
      <Text style={styles.text}>ADD+</Text>
        <Ionicons name={icon} size={24} color={color}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    press:{
        paddingHorizontal:10,
        flexDirection:'row'
    },
    text:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
    paddingRight:5    }
   
})