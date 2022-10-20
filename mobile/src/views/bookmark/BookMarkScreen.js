import { View, Text, SafeAreaView, ScrollView, StyleSheet, StatusBar, Pressable, Animated, Modal, Alert } from 'react-native'
import React, { useEffect, useRef, useState }  from 'react'
import { RadioButton, TextInput } from 'react-native-paper'
import {useNavigation} from '@react-navigation/native'
// 벡터 아이콘 사용
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';

import SearchBar from '../../components/main/SearchBar';
import CustomRadioButton from '../../components/radiobutton/CustomRadioButton'
import AddBoxButton from '../../components/addboxbutton/AddBoxButton'
import RegistraionModal from '../../components/registraionmodal/RegistraionModal'
import AddAccountBox from '../../components/addaccountbox/AddAccountBox'
import RegisteredModal from '../../components/registeredmodal/RegisteredModal'

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const BookMarkScreen = () => {
  const navigation = useNavigation();

  //등록 modal 창 visible
  const [visible, setVisible] = useState(false)
  //등록된 modal 창 visible
  const [regiVisible, setRegiVisible] = useState(false)

  // 검색 창 visible
  const [search, setSearch] = React.useState(false);
  const searchButtonChange = () => {
    setSearch(!search);
  }

  // 등록한 계정 정보 업데이트
  const [accountData, setAccountData] = useState([])

  // 수정창 Modal에 데이터 전달
  const [clickData, setClickData] = useState([])

  // 데이터 갱신
  useEffect(() =>{
    // console.warn('작동')
    fetch(`${API_URL}/bookmark`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(async res => {
      const jsonRes = await res.json();
      // console.warn(jsonRes);
      setAccountData(jsonRes)
    }). catch (err => {
      console.log(err);
    })
  }, [accountData])


  // 데이터 delete
  const deleteAccount = (regi_id) => {
    fetch(`${API_URL}/bookmark/${regi_id}`, {
      method: "DELETE",
      body: regi_id
    }). then(async (res) => {
      const jsonRes = await res.json();
      console.log(jsonRes)
    }). catch (err => {
      console.log(err)
    })
  }

  return (
    <>
      <StatusBar backgroundColor="white" />
      <SafeAreaView style={styles.container}>

    {/* 등록창 Modal 컴포넌트 */}
      <RegistraionModal visible={visible} setVisible={setVisible} BookMark={true}/>

    {/* 수정창 Modal 컴포넌트 */}
    <RegisteredModal regiVisible={regiVisible} setRegiVisible={setRegiVisible} BookMark={true} regi_id={clickData.regi_id}/>

      {/* 최상단 뒤로가기, 검색 , 카테고리 */}
      <View style={styles.viewTop}>
        {/* flex를 주기 위한 빈 공간 */}
        <View style={styles.topEmpty}></View>
        {/* 뒤로가기, 검색, 카테고리 묶음 */}
        <View style={styles.topContainer}>
          {/* 뒤로 가기 컨테이너 */}
          <View style={styles.backPointer}>
            <Icons onPress={()=>navigation.navigate('Main')} name="chevron-back-sharp" size={32} color="#333" />
          </View>
          {/* 검색 창 및 돋보기 컨테이너 */}
          <View style={styles.searchButton}>
            {/* 검색 창 visible */}
            {search && 
            <View style={styles.searchBar} >
              <TextInput style={styles.searchBarTextInput} placeholder={'검색 내용을 입력해주세요'}/>
            </View>}
            <Pressable onPress={searchButtonChange}  >
              <Icons name="md-search-circle-outline" size={32} color="#333" />
            </Pressable>
            <View>
              <AddBoxButton onPress={() => setVisible(!visible)} iconSize={31} iconColor='#333'/>
            </View>
          </View>
          {/* 카테고리 컨테이너 */}
          <View style={styles.categoryContainer}>
            {/* 카테고리 radio button 컴포넌트*/}
            {/* <CustomRadioButton /> */}
          </View>
        </View>
      </View>




      {/* 가운데 서비스 등록 버튼 */}
      <View style={styles.scrollContainer}>
        <ScrollView style={styles.scroll}>
          {/* 추가된 계정 정보 */}
          {/* map 함수를 사용하여 데이터 수 만큼 컴포넌트 렌더링. 주의! react(react-native)에서는 map 함수를 사용할 시, 데이터를 구분하기 위해 key 값을 지정해 줘야 한다. */}
          {accountData.map((value) => {
            return (
              <View key={value.index}>
                <AddAccountBox
                modalOnPress={() => {setRegiVisible(!regiVisible); setClickData(value)}}
                serviceName={value.regi_service} 
                regi_id={value.regi_id} 
                iconSize={25} 
                iconColor='#333' 
                deleteOnPress={() => Alert.alert('정보 삭제', '정말로 삭제하시겠습니까?', [
                  {text: "Yes", onPress: () => deleteAccount(value.regi_id)},
                  {text: "No"/* , onPress: () => console.warn('보존') */}
                ])}/>
              </View>
            )
          })}
        </ScrollView>
      </View>





      {/* 하단  유사성 검사 버튼과 위치 서비스 버튼*/}
      <View style={styles.viewBottom}>
        <View style={styles.similarButtonBox}>
          <Icon name="account-search-outline" size={25} color="#333" />
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
    width: "90%",
    // borderWidth: 0.5,
    marginTop: "5%",
  },
  scroll: {
    width: "100%",
    height: "100%",
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
