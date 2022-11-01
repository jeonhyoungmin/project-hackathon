import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NaverSignIn from '../naversignin/NaverSignIn.js';
import CustomButton from './CustomButton';
import GoogleSigninScreen from '../../views/GoogleSigninScreen.js';
const SocialSignInButtons = () => {
  const navigation = useNavigation();
  const onSignInNaver = () => {
    console.warn('Naver');
  };

  const onSignInGoogle = () => {
    console.warn('Google');
  };

  const onSignInKakao = () => {
    console.warn('Kakao');
  };

  return (
    <>
      <NaverSignIn />
      <GoogleSigninScreen />
      <CustomButton
        text="Sign In with Kakao"
        onPress={onSignInKakao}
        bgColor="#e7eaf4"
        // #fff880
        fgColor="#391b1b"
        // #391b1b
      />
    </>
  );
};

export default SocialSignInButtons;
