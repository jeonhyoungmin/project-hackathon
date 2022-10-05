import React from 'react';
import {TextInput, StyleSheet} from 'react-native';


const InputBox = ({MarginBottom,...rest}) =>{
  return(
    <TextInput style = {[style.input, MarginBottom && style.margin]
    }
    {...rest}
  />
  );
}


const style = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    height: 50,
    backgroundColor: 'white',
  },
  margin: {
    marginBottom: 16,
  },
});

export default InputBox;