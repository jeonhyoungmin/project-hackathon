import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

/* 버튼 커스터마이징 */
const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor }) => {
  return (
    <Pressable onPress = {onPress} style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor: bgColor} : {}]}>
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color: fgColor} : {}]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#0e1824',
  },

  container_SECONDARY: {
    borderColor: '#0e1824',
    borderWidth: 2,
  },

  container_TERTIARY: {},
  
  container_BACKTOSIGNIN:{},
  
  container_SUBMIT:{
    marginVertical: 15,
    backgroundColor: '#0e1824',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#0e1824',
  },

  text_TERTIARY : {
    color: 'gray',
  },

  text_BACKTOSIGNIN: {
    color: 'gray',
  },

  text_SUBMIT: {},

});

export default CustomButton;