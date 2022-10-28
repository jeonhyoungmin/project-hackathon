import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CustomButton from '../components/button/CustomButton';

const GoogleSigninScreen = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId:
        '930626829523-c1bgr5rt0qkr0v7ra8jmgphu0bc22too.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  });
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }

    const isSignedIn = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      if (!isSignedIn) {
        getCurrentUserInfo();
      } else {
        console.log('로그인을 하세요');
      }
    };

    const getCurrentUserInfo = async () => {
      try {
        const userInfo = await GoogleSignin.signInSilently();
        setUser(userInfo);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        } else {
        }
      }
    };
    const signOut = async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setUser({});
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <View style={{flex: 1, margin: 50}}>
        <View style={styles.main}>
          <CustomButton
            text="Sign In with Google"
            onPress={signIn}
            bgColor="#e7eaf4"
            fgColor="#4765a9"
          />

          <TouchableOpacity onPress={signOut}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default GoogleSigninScreen;
