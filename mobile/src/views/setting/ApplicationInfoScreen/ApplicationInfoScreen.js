import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ApplicationInfoScreen = () => {
  return (
    <View style={styles.root}>
      <Text>ApplicationInfoScreen</Text>
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

export default ApplicationInfoScreen;
