import React, {useState} from 'react';
import { View, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import CustomInput from '../components/textinput/CustomInput';
import CustomButton from '../components/button/CustomButton';


/* 회원가입 시 입력한 이메일을 인증하기 위한 인증코드 입력 및 재전송 */
// 이메일로 받은 인증코드 입력과 재전송

// ? 만약 이메일을 잘못 입력했을 경우 어떻게 해야 할까?
// 1. 뒤로 가기 or 다시 입력 버튼을 만들어서 다시 입력하게 한다.

// ? 해당 example@example.com (메일) 주소로 인증코드 전송했음을 알리는 팝업 창 구현


const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    // navigation.push('SignIn');
    Alert.alert('인증이 완료되었습니다.');
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  }

  const onResendPress = () => {
    Alert.alert('이메일로 인증 코드를 다시 전송했습니다. 확인해주세요.');
  }

  return (
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        
        <CustomInput
        placeholder="Enter your confirmation code"
        value={code}
        setValue={setCode}
        />   

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
        text="Resend code"
        onPress={onResendPress}
        type="SECONDARY"
        />

        <CustomButton
        text="Back to Sign in"
        onPress={onSignInPress}
        type="BACKTOSIGNIN"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e1824',
    paddingVertical: 20,
  },
});

export default ConfirmEmailScreen;