import React, {useState, useTransition} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/native'

/* 회원가입 시 입력한 이메일을 인증하기 위한 인증코드 입력 및 재전송 */
// 이메일로 받은 인증코드 입력과 재전송

// ? 만약 이메일을 잘못 입력했을 경우 어떻게 해야 할까?
// 1. 뒤로 가기 or 다시 입력 버튼을 만들어서 다시 입력하게 한다.

// ? 해당 example@example.com (메일) 주소로 인증코드 전송했음을 알리는 팝업 창 구현


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  
  const navigation = useNavigation();

  // const onResendPress = () => {
  //   console.warn('onResendPress');
  // }

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Confirm your email</Text>
        
        <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
        />   

        <CustomButton text="Confirm" onPress={() => navigation.navigate('MainScreen')} />

        <CustomButton
        text="Resend code"
        onPress={() => console.warn('onResendPress')}
        type="SECONDARY"
        />

        <CustomButton
        text="Back to Sign in"
        onPress={navigation.navigate('SignIn')}
        type="BACKTOSIGNIN"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e1824',
    paddingVertical: 20,
  },
});

export default ConfirmEmailScreen;