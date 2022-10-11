import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';

import {useNavigation} from '@react-navigation/native'

/* 회원가입 화면 */
// 이용약관 및 개인정보 보호정책 문서를 볼 수 있도록 페이지 생성?

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  // const onRegisterPressed = () => {
  //   navigation.navigate('ConfirmEmail');
  //   // console.warn('onRegisterPressed');
  // };

  // const onSignInPress = () => {
  //   navigation.navigate('SignIn');
  //   // console.warn('onSignInPress')
  // }

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

        <CustomButton text="회원가입" onPress={() => navigation.navigate('C')} />

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