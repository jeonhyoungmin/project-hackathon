import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const CustomButton = () => {
  return (
    <View style={Styles.button}>
      <Image
        source={require('d:/project-hackathon/mobile/src/assets/button2.png')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#dedede',
    borderRadius: 24,
    position: 'absolute',
  },
});

export default CustomButton;
