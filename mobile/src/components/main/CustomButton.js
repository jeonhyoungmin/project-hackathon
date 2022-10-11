import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../../views/main/SearchScreen';

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
      <Pressable onPress={SearchScreen}>
        <Icons name="md-search-circle-outline" size={32} color="#333" />
      </Pressable>
    </View>
  );
};
// 검색버튼
const SettingButton = () => {
  return (
    <View style={styles.container}>
      <Icons name="md-settings-outline" size={30} color="#333" />
    </View>
  );
};
//설정버튼

const HambergurButton = () => {
  return (
    <View style={styles.container}>
      <Icons name="md-menu-sharp" size={30} color="#333" />
    </View>
  );
};
// 전체페이지로 이동하기 위한 햄버거메뉴 모양 버튼
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
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
