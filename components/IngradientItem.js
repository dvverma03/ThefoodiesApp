import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IngradientItem({item}) {
  return (
    <View style={styles.Card}>
      <Text style={{fontSize:15}}>{item}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Card:{
        backgroundColor:'white',
        padding:5,
        margin:5
    }
})