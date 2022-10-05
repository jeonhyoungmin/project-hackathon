import React from 'react'
import { SafeAreaView, StyleSheet, Text, secureTextEntry } from 'react-native'
import InputBox from '../../components/InputBox'
import InputButton from '../../components/InputButton'

const SignInScreen = () => {

  const onSignInPressed = () => {
    console.warn('Sign in');
  }

  return (
    <SafeAreaView style={styles.root}>
      {/* <InputBox MarginBottom placeholder="아이디를 입력하세요."/>
      <InputBox MarginBottom
      placeholder="비밀번호를 입력하세요."
      secureTextEntry={secureTextEntry}
      autoCapitalize='none'
      /> */}
      <InputButton text="버튼입니다." onPress={onSignInPressed}/>
    </SafeAreaView>
      
  )
}

const styles = StyleSheet.create({
  root: {
    color: '#000'
  },
});


export default SignInScreen;

