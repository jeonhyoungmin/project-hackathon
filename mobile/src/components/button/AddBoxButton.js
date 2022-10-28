import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

// 삼항 연산자 bgColor ? {backgroundColor: bgColor} : {}
// 변경: bgColor && {backgroundColor: bgColor}

const AddBoxButton = ({onPress, bgColor, widthSize, heightSize, iconSize, iconColor}) => {

  const buttonCheck = () => {
    console.warn('ㅎㅇ')
  }
  
  return (
    <Pressable style={[styles.container, bgColor && {backgroundColor: bgColor}, widthSize && {width: widthSize}, heightSize && {height: heightSize}]}>
        <Icon onPress={onPress} name="add-circle-outline" size={iconSize} color={iconColor} />
    </Pressable>
  )
}

const styles=StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default AddBoxButton