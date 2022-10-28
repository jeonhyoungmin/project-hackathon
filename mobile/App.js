import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Navigation from './src/routes/index';

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
});

export default App;
