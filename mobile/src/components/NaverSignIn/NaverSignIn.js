import React, {useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {NaverLogin, getProfile} from '@react-native-seoul/naver-login';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../button/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initials = {
  kConsumerKey: 'iVY3uBYq_jTZV7XH_Hm7',
  kConsumerSecret: 'kp30xHyk2i',
  kServiceAppName: 'com.mobile',
};
//네이버 로그인을 할때 필요한 Key값들

const API_URL =
  Platform.OS === 'ios'
    ? 'https://openapi.naver.com/v1/nid/me'
    : 'http://10.0.2.2:5000';

const NaverSignIn = () => {
  // useState Hook을 이용하여 값이 바뀌는 것을 갱신 & 저장한다.
  const [naverToken, setNaverToken] = React.useState(null);
  const [naverData, setNaverData] = useState();
  const [storage, setStorage] = useState();
  const navigation = useNavigation();

  //네이버 로그인을 하기 위한 동작을 하는 함수 : 네이버로 부터 사용자인증 키(위에 initial에 있는 키)로 사용자 인증을 받고 Access TOKEN을 발급을 받는다.
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

  //로그아웃  로그아웃을 실행하고, AcceesTOKEN 값을 초기화 한다. 단, 네이버 사이트와의 연동은 해체되지 않았음
  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken('');
  };

  {
    /*!! = 논리연산자 boolean값을 부여해주기위해 사용 위에서는 naverToken의 데이터 타입을 boolean값으로 변경해주려고 사용하는 것
      위에 토큰값이 String타입이고 참일때 !!를 쓰면 String값이 boolean true로 바뀌는 것!*/
  }

  {
    /* 로그인에 성공하여 Access 토큰을 발급받아 !! 삼항연산를 통하여 Boolean값이 참값이 되면, getUserProfile 함수를 실행한다. */
  }
  useEffect(() => {
    if (!!naverToken) {
      getUserProfile();
    }
  }, [naverToken]);

  // 프로필을 가져오는 함수 : AcceesToken을 발급 받으면 이 Access Token을 이용하여 네이버에서 사용자 프로필을 제공받는다. 이 제공 받은 프로필을 fetch를 이용하여
  // POST 방식으로 서버에 프로필 데이터를 전송한다.
  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    setNaverData(profileResult);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }

    // Access 토큰을 발급받아 !! 삼항연산를 통하여 Boolean값이 참값이 되면, 서버로 프로필을 보내고, 메인화면으로 이동한다.
    if (!!naverToken) {
      fetch(`${API_URL}/thirdparty`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileResult),
      })
        .then(res => {
          try {
            const jsonRes = res;
            console.log(jsonRes);
            if (res.status !== 200) {
              console.warn('안됨');
            }
          } catch (err) {
            console.log(err);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }

    // 스토리지에 데이터를 저장하는 함수
    if (!!naverToken) {
      AsyncStorage.setItem(
        'sns_info',
        JSON.stringify(profileResult.response.id),
      );
    }

    // 메인화면으로 넘어가는 함수
    if (!!naverToken) {
      navigation.navigate('Main');
    }
    console.log('profileResult', profileResult);
  };

  // AsyncStorage에 있는 데이터를 초기화 하는 함수
  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
      console.log('클리어성공!');
    } catch (e) {
      console.log('클리어실패');
    }
  };
  return (
    <>
      {/*버튼을 클릭하면 initials의 사용자 키를 통하여 네이버 사이트에 연결하여 로그인을 한다.*/}
      <CustomButton
        text="Sign In with Naver"
        onPress={() => {
          naverLogin(initials);
        }}
        bgColor="#e7eaf4"
        fgColor="#12dc61"
      />

      {/* {!!naverToken && <Button title="로그아웃하기" onPress={clearAll} />} */}
    </>
  );
};

export default NaverSignIn;
