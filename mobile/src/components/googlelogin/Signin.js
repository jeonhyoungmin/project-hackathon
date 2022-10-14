import React from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {View, Text, Image} from 'react-native';

GoogleSignin.configure({
  webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
});

const Googlelogin = () => {
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      } else if (error.code === statusCodes.IN_PROGRESS) {
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      } else {
      }
    }

    return (
      <View>
        <Text>{this.state.userGoogleInfo.user.name}</Text>
        <Text>{this.state.userGoogleInfo.user.email}</Text>
        <Image
          style={{width: '100', height: '100'}}
          source={{uri: this.state.userGoogleInfo.user.photo}}
        />
      </View>
    );
  };
};

export default Googlelogin;
