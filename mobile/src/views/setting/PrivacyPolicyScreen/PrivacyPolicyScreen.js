import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PrivacyPolicyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PrivacyPolicy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PrivacyPolicyScreen;
