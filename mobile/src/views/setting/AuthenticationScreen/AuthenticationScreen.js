import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AuthenticationScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Authentication</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default AuthenticationScreen;
