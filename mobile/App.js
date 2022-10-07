import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootScreen from './src/views/main/RootScreen';

const App = () => {
  return (
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
  );
};

export default App;
