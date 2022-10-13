// 지영빈

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
import SuggestionQuestionScreen from '../views/setting/SuggestionQuestionScreen/SuggestionQuestionScreen';
// import SignInScreen from '../views/SignInScreen/SignInScreen';

//Main
import MainScreen from '../views/main/MainScreen';
import {SearchContextProvider} from '../components/main/SearchContext';

// 로그인 
import SignInScreen from '../views/SignInScreen/SignInScreen';
import SignUpScreen from '../views/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../views/ComfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../views/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../views/NewPasswordScreen/NewPasswordScreen';

// 북마크
import BookMarkScreen from '../views/bookmark/BookMarkScreen'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>      
      <SearchContextProvider>

      <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>

        {/* 로그인 */}
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        
        {/* 세팅 */}
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ApplicationInfo" component={ApplicationInfoScreen} />
        <Stack.Screen name="Authentication" component={AuthenticationScreen} />
        <Stack.Screen name="Authority" component={AuthorityScreen} />
        <Stack.Screen name="DataManagement" component={DataManagementScreen} />
        <Stack.Screen name="InterfaceSetting" component={InterfaceSettingScreen} />
        <Stack.Screen name="MyInfo" component={MyInfoScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */}
        <Stack.Screen name="SuggestionQuestion" component={SuggestionQuestionScreen} />

        {/* 메인 */}
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>

        {/* 북마크 */}
        <Stack.Screen name="BookMark" component={BookMarkScreen}/>


      </Stack.Navigator>
      </SearchContextProvider>

    </NavigationContainer>
  );
};

export default Navigation;
