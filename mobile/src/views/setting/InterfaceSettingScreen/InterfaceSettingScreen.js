import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const InterfaceSettingScreen = () => {
  return (
    <View style={styles.root}>
      <Text>InterfaceSetting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default InterfaceSettingScreen;
