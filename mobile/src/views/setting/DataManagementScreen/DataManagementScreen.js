import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DataManagementScreen = () => {
  return (
    <View style={styles.root}>
      <Text>DataManagement</Text>
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

export default DataManagementScreen;
