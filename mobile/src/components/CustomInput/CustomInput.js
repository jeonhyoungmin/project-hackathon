import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {Controller} from 'react-hook-form';

const CustomInput = ({control, name, /* value, setValue,  */placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      {/* <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
      secureTextEntry={secureTextEntry}
      autoCapitalize='none'
      /> */}
    <Controller
      control={control}
      name= {name}
      render={({field: {value, onChange, onBlur}}) => (
        <TextInput 
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={secureTextEntry}
        />
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {

  },
});

export default CustomInput;