import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {PlusButton} from '../../components/main/CustomButton';
import {SearchButton} from '../../components/main/CustomButton';
import {SettingButton} from '../../components/main/CustomButton';
import {HambergurButton} from '../../components/main/CustomButton';
import SearchBar from '../../components/main/SearchBar';
import {Icon} from 'react-native-vector-icons/icon';
import Setting from '../setting/Setting';

const DATA = [
  {
    id: '1',
    title: '',
  },
  {
    id: '2',
    title: '',
  },
  {
    id: '3',
    title: '',
  },
  {
    id: '4',
    title: '',
  },
  {
    id: '5',
    title: '',
  },
  {
    id: '6',
    title: '',
  },
];

//메인 버튼 데이터를 저장하는 배열

const Item = ({title, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
    <Text style={styles.mainbox}>{title}</Text>
    <PlusButton>
      <Image
        style={styles.img}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
        resizeMode="cover"
      />
    </PlusButton>
  </TouchableOpacity>
);
// FlatList의 Item 변수 설정

const MainScreen = ({onPress, style, navigation}) => {
  const [visible, setVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={Item}></FlatList>
      <TouchableOpacity
        onPress={() => {
          setVisible(!visible);
        }}
        style={[styles.display, style]}>
        <View style={styles.Searchposition}>
          <SearchButton />
        </View>
        {visible && <SearchBar />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={[styles.display, style]}>
        <View style={styles.Settingposition}>
          <SettingButton />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
        <View style={styles.Hambergurposition}>
          <HambergurButton />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
//FlatList를 사용하여 메인화면 UI를 배치시킴, Touchable 명령어를 통해 각 버튼에 터치효과 부여
//※ 아직 검색버튼은 손보는 중이라 터치하지 말것
const styles = StyleSheet.create({
  mainbox: {
    width: 150,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  display: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Searchposition: {
    position: 'absolute',
    bottom: 400,
    left: 300,
  },
  Settingposition: {
    position: 'absolute',
    bottom: 400,
    left: 340,
  },
  Hambergurposition: {
    position: 'absolute',
    bottom: 470,
    left: 40,
  },
  img: {
    width: '50%',
    height: '50%',
    position: 'absolute',
  },
  container: {
    position: 'relative',
    top: 200,
  },
});
// 메인화면에 쓰일 스타일 값들
export default MainScreen;
