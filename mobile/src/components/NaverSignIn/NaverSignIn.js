import React, {useState} from 'react';
import {Alert, SafeAreaView, StyleSheet, Button, Platform} from 'react-native';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../CustomButton/CustomButton';

const initials = {
  kConsumerKey: 'iVY3uBYq_jTZV7XH_Hm7',
  kConsumerSecret: 'IkT5V4CCKk',
  kServiceAppName: 'com.mobile',
};
//네이버 로그인을 할때 필요한 Key값들

const NaverSignIn = () => {
  const [naverToken, setNaverToken] = React.useState(null);

  const navigation = useNavigation();

  const naverLogin = props => {
    return new Promise((res, rej) => {
      NaverLogin.login(props, (err, token) => {
        console.log(`\n\n Token is fetched :: ${token}\n\n`);
        setNaverToken(token);
        if (err) {
          rej(err);
          return;
        }
        res(token);
      });
    });
  };
  //네이버 로그인을 하기 위한 동작을 하는 함수
  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken('');
  };
  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    console.log('profileResult', profileResult);
  };
  return (
    <>
      <CustomButton
        text="Sign In with Naver"
        onPress={() => naverLogin(initials)}
        bgColor="#e7eaf4"
        fgColor="#12dc61"
      />
      {!!naverToken && navigation.navigate('Main')}
      {/* {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}
      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )} */}
      {/*!! = 논리연산자 boolean값을 부여해주기위해 사용 위에서는 naverToken의 데이터 타입을 boolean값으로 변경해주려고 사용하는 것
      위에 토큰값이 String타입이고 참일때 !!를 쓰면 String값이 boolean true로 바뀌는 것!*/}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default NaverSignIn;
