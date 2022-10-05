import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// 컴포넌트 파일 불러오기
import CustomButton from '../../components/customButton/CustomButton';

// 버튼을 눌렀을 때 ('') 메세지를 띄우는 함수
const onMyInfoPressed = () => {
  console.warn('내 정보');
};

const onAuthenticationPressed = () => {
  console.warn('인증 수단');
};

const onAuthorityPressed = () => {
  console.warn('권한');
};

const onDataManagementPressed = () => {
  console.warn('데이터 관리');
};

const onInterfaceSettingPressed = () => {
  console.warn('인터페이스 설정');
};

const onNotificationPressed = () => {
  console.warn('알림');
};

const onApplicationInfoPressed = () => {
  console.warn('C＇lock 정보');
};

const onPrivacyPolicyPressed = () => {
  console.warn('개인정보 처리방침');
};

const onSuggestionQuestionPressed = () => {
  console.warn('건의/문의');
};

const onSignOutPressed = () => {
  console.warn('로그아웃');
};

// Setting 스크린
const Setting = () => {
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