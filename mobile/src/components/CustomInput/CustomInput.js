import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      autoCapitalize='none'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#e8e8e8',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
  },

  input: {
    
  }
});

export default CustomInput;