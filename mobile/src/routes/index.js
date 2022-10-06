import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* 네비게이션을 적용할 스크린들을 불러온다. */
import Setting from '../views/setting/Setting';
import ApplicationInfoScreen from '../views/setting/ApplicationInfoScreen/ApplicationInfoScreen';
import AuthenticationScreen from '../views/setting/AuthenticationScreen/AuthenticationScreen';
import AuthorityScreen from '../views/setting/AuthorityScreen/AuthorityScreen';
import DataManagementScreen from '../views/setting/DataManagementScreen/DataManagementScreen';
import InterfaceSettingScreen from '../views/setting/InterfaceSettingScreen/InterfaceSettingScreen';
import MyInfoScreen from '../views/setting/MyInfoScreen/MyInfoScreen';
import NotificationScreen from '../views/setting/NotificationScreen/NotificationScreen';
import PrivacyPolicyScreen from '../views/setting/PrivacyPolicyScreen/PrivacyPolicyScreen';
import HomeScreen from '../views/HomeScreen/HomeScreen';
import SuggestionQuestionScreen from '../views/setting/SuggestionQuestionScreen/SuggestionQuestionScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName="" ScreenOptions={{headershown: true}}>
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="Authority" component={AuthorityScreen} />
        <Stack.Screen name="DataManagement" component={DataManagementScreen} />
        <Stack.Screen name="InterfaceSetting" component={InterfaceSettingScreen} />
        <Stack.Screen name="MyInfo" component={MyInfoScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SuggestionQuestion" component={SuggestionQuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;