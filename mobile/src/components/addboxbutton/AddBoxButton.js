import { View, Text, StyleSheet, Pressable, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

// 삼항 연산자 bgColor ? {backgroundColor: bgColor} : {}
// 변경: bgColor && {backgroundColor: bgColor}

const AddBoxButton = ({bgColor, widthSize, heightSize}) => {
  return (
    <View style={[styles.container, bgColor && {backgroundColor: bgColor}, widthSize && {width: widthSize}, heightSize && {height: heightSize}]}>
        <Icon name="add-circle-outline" size={20} color="#333" />
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "2%",
  }
})

export default AddBoxButton