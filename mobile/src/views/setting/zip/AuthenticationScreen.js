import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AuthenticationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Authentication</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AuthenticationScreen;
