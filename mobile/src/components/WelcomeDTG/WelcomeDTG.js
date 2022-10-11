import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeDTG = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome To DTG Vault!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  text: {
    fontWeight: 'bold',
    color: '#0e1824',
  },
});


export default WelcomeDTG;