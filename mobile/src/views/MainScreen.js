import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { PlusButton, SearchButton, SettingButton, HambergurButton } from '../components/button/MainCustomButton'
import SearchBar from '../components/modal/SearchBarModal';
import RegistraionModal from '../components/modal/RegistraionModal';

const DATA = [
  {
    id: '1',
    regi_id: '',
    regi_password: '',
    regi_url: '',
    regi_service: '',
    regi_memo: '',
  },
  {
    id: '2',
    regi_id: '',
    regi_password: '',
    regi_url: '',
    regi_service: '',
    regi_memo: '',
  },
  {
    id: '3',
    regi_id: '',
    regi_password: '',
    regi_url: '',
    regi_service: '',
    regi_memo: '',
  },
  {
    id: '4',
    regi_id: '',
    regi_password: '',
    regi_url: '',
    regi_service: '',
    regi_memo: '',
  },
  {
    id: '5',
    regi_id: '',
    regi_password: '',
    regi_url: '',
    regi_service: '',
    regi_memo: '',
  },
  {
    id: '6',
    regi_id: '',
    regi_password: '',
    regi_url: '',
    regi_service: '',
    regi_memo: '',
  },
];

//메인 버튼 데이터를 저장하는 배열

const Item = ({title, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
    <Text style={styles.mainbox}>{title}</Text>
    <PlusButton></PlusButton>
  </TouchableOpacity>
);
// FlatList의 Item 변수 설정

const MainScreen = ({title, style, navigation}) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <RegistraionModal visible={visible} setVisible={setVisible} />
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => setVisible(!visible)}
            style={[styles.display, style]}>
            <Text style={styles.mainbox}>{DATA[0].title}</Text>
            <PlusButton></PlusButton>
          </TouchableOpacity>
        )}></FlatList>
      <TouchableOpacity
        onPress={() => {
          setSearch(!search);
        }}
        style={[styles.display, style]}>
        <View style={styles.Searchposition}>
          <SearchButton />
        </View>
        {search && <SearchBar visible={search} setSearch={setSearch} />}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={[styles.display, style]}>
        <View style={styles.Settingposition}>
          <SettingButton />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('BookMark')}
        style={[styles.display, style]}>
        <View style={styles.Hambergurposition}>
          <HambergurButton />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
//FlatList를 사용하여 메인화면 UI를 배치시킴, Touchable 명령어를 통해 각 버튼에 터치효과 부여

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
