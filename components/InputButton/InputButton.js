import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';


/* InputButton */
const InputButton = ({ onPress, text }) => {
  return (
    <Pressable onPress = {onPress} style={[styles.InputButton]}>
      <Text style={[styles.text]}>
        {text}
      </Text>
    </Pressable>
    );
}

const styles = StyleSheet.create({
  InputButton: {
    width: '100%',

    padding: 15,
    marginVertical: 5,

    alignItems: 'center',
    borderRadius: 5,
  },

  text: {
    color: '#000',
  },
});

export default InputButton;