import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const ModalTextInput = ({bgColor, placeholderText, containerWidth, containerHeight, textWidth, textHeight, pw, setting}) => {
  return (
    <View style={[styles.container, bgColor 
    && {backgroundColor: bgColor}, containerWidth 
    && {width: containerWidth}, containerHeight 
    && {height: containerHeight}]}>
      <TextInput style={[styles.textInput, textWidth 
        && {width: textWidth}, textHeight 
        && {height: textHeight}]} placeholder={placeholderText} secureTextEntry={pw}
        onChangeText={setting}
        />
    </View>
  )
}

const styles=StyleSheet.create({
  textcontainer: {
    flex: 1,
    width: "95%",
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  }
})

export default ModalTextInput