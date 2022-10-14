import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  Pressable,
  Animated,
  Modal,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {RadioButton, TextInput} from 'react-native-paper';
import CustomRadioButton from '../../components/radiobutton/CustomRadioButton';
// 벡터 아이콘 사용
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import AddBoxButton from '../../components/addboxbutton/AddBoxButton';
import RegistraionModal from '../../components/registraionmodal/RegistraionModal';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/main/SearchBar';

const BookMarkScreen = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const [search, setSearch] = React.useState(false);
  const searchButtonChange = () => {
    setSearch(!search);
  };

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.container}>
        {/* Modal 컴포넌트 */}
        <RegistraionModal visible={visible} setVisible={setVisible} />

        {/* 최상단 뒤로가기, 검색 , 카테고리 */}
        <View style={styles.viewTop}>
          {/* flex를 주기 위한 빈 공간 */}
          <View style={styles.topEmpty}></View>
          {/* 뒤로가기, 검색, 카테고리 묶음 */}
          <View style={styles.topContainer}>
            {/* 뒤로 가기 컨테이너 */}
            <View style={styles.backPointer}>
              <Icons
                onPress={() => navigation.navigate('Main')}
                name="chevron-back-sharp"
                size={32}
                color="#333"
              />
            </View>
            {/* 검색 창 및 돋보기 컨테이너 */}
            <View style={styles.searchButton}>
              {/* 검색 창 visible */}
              {search && (
                <View>
                  <SearchBar visible={search} setSearch={setSearch} />
                </View>
              )}
              <Pressable onPress={searchButtonChange}>
                <Icons name="md-search-circle-outline" size={32} color="#333" />
              </Pressable>
              <View>
                <AddBoxButton
                  onPress={() => setVisible(!visible)}
                  iconSize={31}
                  iconColor="#333"
                />
              </View>
            </View>
            {/* 카테고리 컨테이너 */}
            <View style={styles.categoryContainer}>
              {/* 카테고리 radio button 컴포넌트*/}
              <CustomRadioButton />
            </View>
          </View>
        </View>

        {/* 가운데 서비스 등록 버튼 */}
        <View style={styles.scrollContainer}>
          <ScrollView style={styles.scroll}>
            {/* 추가된 계정 정보 */}
          </ScrollView>
        </View>

        {/* 하단  유사성 검사 버튼과 위치 서비스 버튼*/}
        <View style={styles.viewBottom}>
          <View style={styles.similarButtonBox}>
            <Icon name="account-search-outline" size={25} color="#333" />
          </View>
          <View style={styles.locationButtonBox}>
            <Icons name="location-outline" size={25} color="#333" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // 상단 스타일
  viewTop: {
    flex: 1.5,
    // backgroundColor: 'pink',
    width: '90%',
  },
  topEmpty: {
    flex: 1,
    // backgroundColor: 'yellow'
  },
  topContainer: {
    flex: 9,
    // backgroundColor: 'blue'
  },
  backPointer: {
    flex: 4,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  searchButton: {
    flex: 3,
    // backgroundColor: 'yellowgreen',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // marginRight: "2%",
  },
  searchBar: {
    marginRight: '5%',
    width: 250,
    height: 30,
    borderRadius: 5,
  },
  categoryContainer: {
    flex: 1.5,
    // backgroundColor: 'cadetblue',
    flexDirection: 'row',
  },

  // 중간 스크롤 스타일
  scrollContainer: {
    flex: 4,
    width: '90%',
    borderWidth: 0.5,
    marginTop: '3%',
  },
  scroll: {
    // backgroundColor: 'red'
  },

  // 하단 기능 스타일
  viewBottom: {
    flex: 1,
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    width: '90%',
  },
  similarButtonBox: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationButtonBox: {
    flex: 1,
    // backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Modal 스타일
  modalStyle: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '50%',
  },
});

export default BookMarkScreen;
