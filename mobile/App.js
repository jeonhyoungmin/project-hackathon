import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Setting from './src/views/setting/Setting';
import ApplicationInfo from './src/views/setting/ApplicationInfo/ApplicationInfo';
import Authentication from './src/views/setting/Authentication/Authentication';
import Authority from './src/views/setting/Authority/Authority';
import DataManagement from './src/views/setting/DataManagement/DataManagement';
import InterFaceSetting from './src/views/setting/InterfaceSetting/InterFaceSetting';
import MyInfo from './src/views/setting/MyInfo/MyInfo';
import Notification from './src/views/setting/Notification/Notification';
import PrivacyPolicy from './src/views/setting/PrivacyPolicy/PrivacyPolicy';
import SignOut from './src/views/setting/SignOut/SignOut';
import SuggestionQuestion from './src/views/setting/SuggestionQuestion/SuggestionQuestion';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      
      <Setting />
      {/* <ApplicationInfo />
      <Authentication />
      <Authority />
      <DataManagement />
      <InterFaceSetting />
      <MyInfo />
      <Notification />
      <PrivacyPolicy />
      <SignOut />
      <SuggestionQuestion /> */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },  
});

export default App;
