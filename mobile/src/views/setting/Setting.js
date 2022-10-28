import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {NaverLogin} from '@react-native-seoul/naver-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

// 컴포넌트 파일 불러오기
import CustomButton from '../../components/button/CustomButton';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

// Setting 스크린
const Setting = () => {
  const [naverToken, setNaverToken] = React.useState(null);
  const navigation = useNavigation();
  // const [storage, setStorage] = useState('');

  // const asyncStorageExcute = () => {
  //   AsyncStorage.getItem('sns_info', (err, result) => {
  //     if (err) throw err;
  //     const sns_id = JSON.parse(result);
  //     const snsInfo = sns_id.response.id;
  //     setStorage(snsInfo);
  //     console.log(snsInfo);
  //   });
  // };
  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken('');
    console.log();
    AsyncStorage.clear();
    // asyncStorageExcute();
    navigation.navigate('SignIn');
  };
  const SignOut = () => {
    fetch(`${API_URL}/signout`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async res => {
        const jsonRes = await res.json();
        console.log(res.status);
        console.log(jsonRes.message);
        if (res.status === 200) {
          navigation.navigate('SignIn');
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 나중에 필요한 경우를 대비해 버튼 함수를 주석으로 처리
  // const onApplicationInfoPressed = () => {
  //   navigation.navigate('ApplicationInfo');
  // };
  // const onAuthenticationPressed = () => {
  //   navigation.navigate('Authentication');
  // };
  // const onAuthorityPressed = () => {
  //   navigation.navigate('Authority');
  // };
  // const onDataManagementPressed = () => {
  //   navigation.navigate('DataManagement');
  // };
  // const onInterfaceSettingPressed = () => {
  //   navigation.navigate('InterfaceSetting');
  // };
  // const onMyInfoPressed = () => {
  //   navigation.navigate('MyInfo');
  // };
  // const onNotificationPressed = () => {
  //   navigation.navigate('Notification');
  // };
  // const onPrivacyPolicyPressed = () => {
  //   navigation.navigate('PrivacyPolicy');
  // };
  // const onSignOutPressed = () => {
  //   navigation.navigate('Home');
  // };
  // const onSuggestionQuestionPressed = () => {
  //   navigation.navigate('SuggestionQuestion');
  // };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <CustomButton
          text="내 정보"
          onPress={() => navigation.navigate('MyInfo')}
          type="SECONDARY"
        />
        <CustomButton
          text="인증 수단"
          onPress={() => navigation.navigate('Authentication')}
          type="SECONDARY"
        />
        <CustomButton
          text="권한"
          onPress={() => navigation.navigate('Authority')}
          type="SECONDARY"
        />
        <CustomButton
          text="데이터 관리"
          onPress={() => navigation.navigate('DataManagement')}
          type="SECONDARY"
        />
      </View>
      <View style={styles.container}>
        <CustomButton
          text="인터페이스 설정"
          onPress={() => navigation.navigate('InterfaceSetting')}
          type="SECONDARY"
        />
        <CustomButton
          text="알림"
          onPress={() => navigation.navigate('Notification')}
          type="SECONDARY"
        />
        <CustomButton
          text="C'lock 정보"
          onPress={() => navigation.navigate('ApplicationInfo')}
          type="SECONDARY"
        />
        <CustomButton
          text="개인정보 처리방침"
          onPress={() => navigation.navigate('PrivacyPolicy')}
          type="SECONDARY"
        />
        <CustomButton
          text="건의/문의"
          onPress={() => navigation.navigate('SuggestionQuestion')}
          type="SECONDARY"
        />
        <CustomButton
          text="로그아웃"
          onPress={() => {
            {
              SignOut();
              naverLogout();
            }
          }}
          type="SECONDARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {},
});

export default Setting;
