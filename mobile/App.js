import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Setting from './src/views/setting/Setting';
import Navigation from './src/routes/index';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      
      {/* <Setting /> */}
      <Navigation />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },  
});

export default App;
