import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/native'


/* 비밀번호 재설정 -- 이메일 인증코드 입력 및 새로운 비밀번호 입력 */

// 이메일 인증 성공시 새로운 비밀번호로 비밀번호 변경
const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('Main');
    console.warn('비밀번호가 변경되었습니다. 다시 로그인 해주세요');
  };

  // const onSignInPress = () => {
  //   navigation.navigate('SignIn');
  //   // console.warn('onSignInPress')
  // }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        
        <Text style={styles.confirmaion_code}>Confirmation Code</Text>
        <CustomInput placeholder="Enter your new confirmation code" value={code} setValue={setCode}
        />

        <Text style={styles.password}>Password</Text>
        <CustomInput placeholder="Enter your new password" value={newPassword} setValue={setNewPassword}
        />

        <CustomButton text="Submit" onPress={onSubmitPressed} type="SUBMIT"/>

        <CustomButton text="Back to Sign in" onPress={() => navigation.navigate('SignIn')} type="BACKTOSIGNIN"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0e1824',
    marginVertical: 10,
  },
  confirmaion_code: {
    color: '#0e1824',
    marginTop: 20,
  },
  password: {
    color: '#0e1824',
    marginTop: 20,
  },  

});

export default NewPasswordScreen;