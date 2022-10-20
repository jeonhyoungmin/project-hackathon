import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../assets/Logo_1.png';
import WelcomeDTG from '../../components/WelcomeDTG/WelcomeDTG';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native'

/* 로그인 화면 */

// 비밀번호 찾기
// 아이디 찾기
// 필수 입력 항목 구현 ( 미입력시 경고창 띄우기 )

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const SignInScreen = () => {

  const SignIn = () => {
    const user_info = {
      username,
      password
    }
    fetch(`${API_URL}/signin`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(user_info),
    })
    .then( async res => {
      const jsonRes = await res.json();
      try {
        if (res.status !== 200) {
          console.log(jsonRes.message);
        } else {
          console.log(jsonRes.message);
        }
      }catch (err) {
        console.log(err);
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  // const onSignInPressed = () => {
  //   // validate user
  //   navigation.navigate('HomeScreen');
  //   // console.warn('Sign in');
  // };

  // const onForgotPasswordPressed = () => {
  //   navigation.navigate('ForgotPassword');
  //   // console.warn('onForgotPasswordPressed');
  // };

  // const onSignUpPress = () => {
  //   navigation.navigate('SignUp');
  //   // console.warn('onSignUpPress');
  // }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain"/>

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}
        />

        <CustomButton text="Sign in" onPress={() => {/* SignIn(); */ navigation.navigate('Main')} } />

        <CustomButton text="Forgot password?" onPress={() => navigation.navigate('ForgotPassword')} type="TERTIARY" />

        <SocialSignInButtons />

        <CustomButton text="Don't have an account? Create one" onPress={() => navigation.navigate('SignUp')} type="TERTIARY"
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
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 170,
    height: 100,
    marginBottom: 10,
  },
});

export default SignInScreen;