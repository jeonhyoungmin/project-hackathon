import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native'

/* 회원가입 화면 */
// 이용약관 및 개인정보 보호정책 문서를 볼 수 있도록 페이지 생성

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const SignUpScreen = () => {
  /*
    원격 API에서 관리하고 있는 데이터를 생성해야한다면 요청 전문을 포함할 수 있는 POST 방식의 HTTP 통신이 필요하다.
    method 옵션을 POST로 지정해주고, headers 옵션을 통해 JSON 포멧을 사용한다고 알려줘야 하며, 요청 전문을 JSON 포멧으로 직렬화하여 가장 중요한 body 옵션에 설정해준다.
  */
  const SignUpRegistration = () => {
    const user_info = {
      username,
      password,
      email
      // 비밀번호 일치 유효성 검사 필요
    }
    fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(user_info),
    })
    .then(res => {
      try{
        const jsonRes = res;
        console.log(jsonRes)
        if(res.status !== 200) {
          console.log('fail');
        } else {
          console.log('success');
        }
      } catch (err) {
        console.log(err);
      }  
    })
    .catch(err => {
      console.log(err);
    });
  }
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onTermsOfUsePressed = () => {
    navigation.navigate('onTermsOfUsePressed');
    // console.warn('onTermsOfUsePressed');
  }

  const onPrivacyPressed = () => {
    navigation.navigate('onPrivacyPressed');
    // console.warn('onPrivacyPressed');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>회원가입</Text>
        {/* Create an account */}

        <CustomInput
        placeholder="아이디"
        value={username}
        setValue={setUsername} />
        <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail} />
        <CustomInput
        placeholder="비밀번호"
        value={password}
        setValue={setPassword}
        secureTextEntry
        />
        <CustomInput
        placeholder="비밀번호 확인"
        value={passwordRepeat}
        setValue={setPasswordRepeat}
        secureTextEntry
        />

        <CustomButton text="회원가입" onPress={() => {navigation.navigate('ConfirmEmail'); SignUpRegistration()}} />

        <Text style={styles.text}>
          회원가입을 통해{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}> 이용약관 </Text> 및{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}> 개인정보 보호정책{' '}</Text>
          에 대한 동의를 확인할 수 있습니다.
          {/* By registering, your confirm that you accept our Terms of Use and Privacy Policy */}
        </Text>

        <SocialSignInButtons />

        <CustomButton
        text="회원신가요?   로그인"
        // "Don't have an account? Create one"
        onPress={() => navigation.navigate('SignIn')}
        type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e1824',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    fontWeight: 'bold',
    color: '#0e1824',
  }
});

export default SignUpScreen;