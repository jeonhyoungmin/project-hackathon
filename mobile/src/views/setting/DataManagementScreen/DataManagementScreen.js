import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DataManagementScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DataManagement</Text>
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

export default DataManagementScreen;
