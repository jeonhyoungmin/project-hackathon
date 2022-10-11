import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/native'

/* 비밀번호 재설정 -- 이메일 또는 아이디 입력 */
// 아이디를 입력하면 회원 가입할 때 등록했던 이메일로 인증 코드 발송
// 이메일을 입력하면 입력한 이메일로 인증 코드 발송

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  
  const navigation = useNavigation();

  // const onSendPressed = () => {
  //   navigation.navigate('NewPassword');
  //   // console.warn('onSendPressed');
  // };

  // const onSignInPress = () => {
  //   navigation.navigate('SignIn');
  //   // console.warn('onSignInPress')
  // }



  return (
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        {/* 비밀번호 초기화 */}

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />   

        <CustomButton text="Send" onPress={() => navigation.navigate('NewPassword')} />

        <CustomButton text="Back to Sign in" onPress={() => navigation.navigate('SignIn')} type="TERTIARY"/>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e1824',
    margin: 10,
  },
});

export default ForgotPasswordScreen;