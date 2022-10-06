import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// 컴포넌트 파일 불러오기
import CustomButton from '../../components/customButton/CustomButton';
import {useNavigation} from '@react-navigation/native';


// Setting 스크린
const Setting = () => {

  const navigation = useNavigation();

  const onApplicationInfoPressed = () => {
    navigation.navigate('ApplicationInfo');
  };
  const onAuthenticationPressed = () => {
    navigation.navigate('Authentication');
  };
  const onAuthorityPressed = () => {
    navigation.navigate('Authority');
  };
  const onDataManagementPressed = () => {
    navigation.navigate('DataManagement');
  };
  const onInterfaceSettingPressed = () => {
    navigation.navigate('InterfaceSetting');
  };
  const onMyInfoPressed = () => {
    navigation.navigate('MyInfo');
  };
  const onNotificationPressed = () => {
    navigation.navigate('Notification');
  };
  const onPrivacyPolicyPressed = () => {
    navigation.navigate('PrivacyPolicy');
  };
  const onSignOutPressed = () => {
    navigation.navigate('Home');
  };
  const onSuggestionQuestionPressed = () => {
    navigation.navigate('SuggestionQuestion');
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <CustomButton text="내 정보" onPress={onMyInfoPressed} type="" />
        <CustomButton text="인증 수단" onPress={onAuthenticationPressed} type="" />
        <CustomButton text="권한" onPress={onAuthorityPressed} type="" />
        <CustomButton text="데이터 관리" onPress={onDataManagementPressed} type="" />
      </View>
      <View style={styles.root}>
        <CustomButton text="인터페이스 설정" onPress={onInterfaceSettingPressed} type="" />
        <CustomButton text="알림" onPress={onNotificationPressed} type="" />
        <CustomButton text="C'lock 정보" onPress={onApplicationInfoPressed} type="" />
        <CustomButton text="개인정보 처리방침" onPress={onPrivacyPolicyPressed} type="" />
        <CustomButton text="건의/문의" onPress={onSuggestionQuestionPressed} type="" />
        <CustomButton text="로그아웃" onPress={onSignOutPressed} type="" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    
  },
  text: {

  },
});


export default Setting;