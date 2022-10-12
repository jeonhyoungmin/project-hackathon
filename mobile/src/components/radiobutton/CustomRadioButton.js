import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper'


const CustomRadioButton = () => {

  const [value, setValue] = React.useState('One');

  return (
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={styles.container}>
        <RadioButton value="One"/> 
        <Text>One</Text>
        <RadioButton value="Two"/> 
        <Text>Two</Text>
        <RadioButton value="Three"/> 
        <Text>Three</Text>
        <RadioButton value="Four"/> 
        <Text>Four</Text>
      </View>
    </RadioButton.Group>
  )
}

const styles=StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default CustomRadioButton