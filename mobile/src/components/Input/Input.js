import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Input = ({label,
  error,
  password,
  onFocus=() => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <view style={styles.inputContainer}></view>
      <TextInput
      autoCorrec={false}
      onFocus={() => {
        onFocus();
        setIsFocused(true);
      }}

      onBlur={() => {
        setIsFocused(false);
      }}
      style={styles.input} {...props} />

    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    marginBoddtom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: 'crimson',
  },
  inputContainer: {
    backgroundColor: '#222',
    width: '100%',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    color: 'cadetblue',
    flex: 1,
  }
});
export default Input;