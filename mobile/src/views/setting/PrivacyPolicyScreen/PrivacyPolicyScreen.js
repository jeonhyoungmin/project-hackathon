import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.root}>
      <Text>PrivacyPolicy</Text>
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

export default PrivacyPolicyScreen;
