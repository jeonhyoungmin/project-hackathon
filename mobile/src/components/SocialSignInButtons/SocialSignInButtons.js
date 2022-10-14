import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import Googlelogin from '../googlelogin/Signin';

const SocialSignInButtons = () => {
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
      <CustomButton
        text="Sign In with Naver"
        onPress={onSignInNaver}
        bgColor="#e7eaf4"
        fgColor="#12dc61"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={Googlelogin}
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
