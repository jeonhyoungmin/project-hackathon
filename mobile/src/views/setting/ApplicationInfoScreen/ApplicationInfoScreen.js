import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ApplicationInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ApplicationInfoScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default ApplicationInfoScreen;
