import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import SignInScreen from './screens/SignInScreen';
import InputBox from './components/InputBox';
import InputButton from './components/InputButton';

const App = () => {
  return (
    <SafeAreaView style={stlyes.root}>
      {/* <SignInScreen /> */}
      
    </SafeAreaView>
  )
}

const stlyes = StyleSheet.create({
  root: {
    flex: 1,
  }
})

export default App;