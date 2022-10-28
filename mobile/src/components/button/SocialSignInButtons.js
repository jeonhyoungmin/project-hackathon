import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NaverSignIn from '../naversignin/NaverSignIn'
import CustomButton from './CustomButton';

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
      <CustomButton
        text="Sign In with Google"
        onPress={() => navigation.navigate('GoogleSigninScreen')}
        bgColor="#e7eaf4"
        fgColor="#4765a9"
      />
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
