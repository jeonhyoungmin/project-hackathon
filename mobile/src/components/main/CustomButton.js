import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const PlusButton = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/button2.png')}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
};
// 메인화면 App추가용 + 버튼

const SearchButton = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../src/assets/searchicon.png')}
        style={styles.img}
        resizeMode="center"
      />
    </View>
  );
};
// 검색버튼
const SettingButton = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../src/assets/setting.png')}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
};
//설정버튼

const HambergurButton = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../src/assets/HambergurIcon.png')}
        style={styles.img}
        resizeMode="stretch"
      />
    </View>
  );
};
// 전체페이지로 이동하기 위한 햄버거메뉴 모양 버튼
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#dedede',
    borderRadius: 24,
    position: 'absolute',
  },
  img: {
    width: '70%',
    height: '70%',
  },
});
// 각 버튼들의 스타일
export {PlusButton, SearchButton, SettingButton, HambergurButton};
