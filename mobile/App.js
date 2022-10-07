import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BookMarkScreen from "./src/views/bookmark/BookMarkScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BookMarkScreen/>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App