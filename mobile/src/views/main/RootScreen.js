import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './MainScreen';
import SearchScreen from './SearchScreen';

const Stack = createNativeStackNavigator();

function RootScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// 네비게이션을 위한 스크린 모음
export default RootScreen;
