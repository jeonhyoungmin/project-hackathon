import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// 컴포넌트 파일 불러오기
import CustomButton from '../../components/CustomButton/CustomButton';
import {useNavigation} from '@react-navigation/native';


// Setting 스크린
const Setting = () => {

  const navigation = useNavigation();

  // 나중에 필요한 경우를 대비해 버튼 함수를 주석으로 처리
  // const onApplicationInfoPressed = () => {
  //   navigation.navigate('ApplicationInfo');
  // };
  // const onAuthenticationPressed = () => {
  //   navigation.navigate('Authentication');
  // };
  // const onAuthorityPressed = () => {
  //   navigation.navigate('Authority');
  // };
  // const onDataManagementPressed = () => {
  //   navigation.navigate('DataManagement');
  // };
  // const onInterfaceSettingPressed = () => {
  //   navigation.navigate('InterfaceSetting');
  // };
  // const onMyInfoPressed = () => {
  //   navigation.navigate('MyInfo');
  // };
  // const onNotificationPressed = () => {
  //   navigation.navigate('Notification');
  // };
  // const onPrivacyPolicyPressed = () => {
  //   navigation.navigate('PrivacyPolicy');
  // };
  // const onSignOutPressed = () => {
  //   navigation.navigate('Home');
  // };
  // const onSuggestionQuestionPressed = () => {
  //   navigation.navigate('SuggestionQuestion');
  // };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomButton text="내 정보" onPress={() => navigation.navigate('MyInfo')} type="" />
        <CustomButton text="인증 수단" onPress={() => navigation.navigate('Authentication')} type="" />
        <CustomButton text="권한" onPress={() => navigation.navigate('Authority')} type="" />
        <CustomButton text="데이터 관리" onPress={() => navigation.navigate('DataManagement')} type="" />
      </View>
      <View style={styles.container}>
        <CustomButton text="인터페이스 설정" onPress={() => navigation.navigate('InterfaceSetting')} type="" />
        <CustomButton text="알림" onPress={() => navigation.navigate('Notification')} type="" />
        <CustomButton text="C'lock 정보" onPress={() => navigation.navigate('ApplicationInfo')} type="" />
        <CustomButton text="개인정보 처리방침" onPress={() => navigation.navigate('PrivacyPolicy')} type="" />
        <CustomButton text="건의/문의" onPress={() => navigation.navigate('SuggestionQuestion')} type="" />
        <CustomButton text="로그아웃" type="" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  text: {

  },
});


export default Setting;