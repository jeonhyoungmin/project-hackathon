import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import MainScreen from './src/views/main/MainScreen';

const App = () => {
  return (
    <SafeAreaView style={Styles.display}>
      <MainScreen></MainScreen>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  display: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
