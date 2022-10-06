import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const PlusButton = () => {
  return (
    <View style={styles.button}>
      <Image
        source={require('../../assets/button2.png')}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
};

const SearchButton = () => {
  return (
    <View style={styles.button}>
      <Image
        source={require('../../../src/assets/searchicon.png')}
        style={styles.img}
        resizeMode="center"
      />
    </View>
  );
};

const SettingButton = () => {
  return (
    <View style={styles.button}>
      <Image
        source={require('../../../src/assets/setting.png')}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
};

const HambergurButton = () => {
  return (
    <View style={styles.button}>
      <Image
        source={require('../../../src/assets/HambergurIcon.png')}
        style={styles.img}
        resizeMode="stretch"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#dedede',
    borderRadius: 24,
    position: 'absolute',
  },
  img: {
    width: '70%',
    height: '70%',
  },
});

export {PlusButton, SearchButton, SettingButton, HambergurButton};
