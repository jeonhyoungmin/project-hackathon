import {
  View,
  Text,
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { ModalTextInput } from '../textinput/ModalTextInput';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

// NaverSignIn.js 에서 사용했던 naverToken을 RegistaionModal에서 매개변수로 사용하여 useEffect가 NaverToken에 이벤트가 발생되었을때  AsyncStorge.getItem이 실행되도록 설정
const RegistraionModal = ({visible, setVisible, BookMark, naverToken}) => {
  useEffect(() => {
    AsyncStorage.getItem('sns_info', (err, result) => {
      if (err) throw err;
      const sns_id = JSON.parse(result);
      setStorage(sns_id);
      console.log('storage :' + sns_id);
    });
  }, [naverToken]);

  const serverTest = () => {
    const test = {
      id,
      password,
      url,
      service,
      memo,
      storage,
      toggle,
    };
    console.log('storage data' + storage);
    fetch(`${API_URL}/bookmark`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(test),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          console.log(jsonRes);
          if (res.status !== 200) {
            
          } else {

          }
        } catch (err) {
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    setIsEnabled(false);
  }, [visible]);
  const [storage, setStorage] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [memo, setMemo] = useState('');
  const [service, setService] = useState('');
  const [toggle, setToggle] = useState(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled(
      previousState => !previousState,
      setToggle(toggle => !toggle),
      console.log(toggle),
    );

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onBackdropPress={() => setVisible(!visible)}
      onRequestClose={() => {
        setVisible(!visible);
      }}>
      <Pressable
        style={styles.outside}
        onPress={event => {
          if (event.target === event.currentTarget) {
            setVisible(!visible);
          }
        }}>
        <View style={styles.modalStyle}>
          <View style={styles.centerContainer}>
            {/* 상단: 아이디, 비밀번호, url 컨테이너 */}
            <View style={styles.modalTop}>
              <View style={styles.accountContainer}>
                {/* <ModalTextInput setting={setId} placeholderText={'아이디를 입력해주세요'} /> */}
                <View style={styles.textcontainer}>
                  <TextInput
                    maxLength={30}
                    onChangeText={setId}
                    style={styles.textInput}
                    placeholder="아이디를 입력해주세요"></TextInput>
                </View>
                {/* <ModalTextInputTwo setting={setPassword} placeholderText={'비밀번호를 입력해주세요'}/> */}
                <View style={styles.textcontainer}>
                  <TextInput
                    maxLength={30}
                    onChangeText={setPassword}
                    style={styles.textInput}
                    placeholder="비밀번호를 입력해주세요"></TextInput>
                </View>
              </View>
              <View style={styles.urlContainer}>
                {/* <ModalTextInputThree setting={setUrl}  placeholderText={'url를 입력해주세요'} /> */}
                <View style={styles.textcontainer}>
                  <TextInput
                    maxLength={30}
                    onChangeText={setUrl}
                    style={styles.textInput}
                    placeholder="url를 입력해주세요"></TextInput>
                </View>
              </View>
            </View>

            {/* 중단: 메모, 즐겨찾기 컨테이너 */}
            <View style={styles.modalMiddle}>
              <View style={styles.MemoContainer}>
                {/* <ModalTextInputFour setting={setMemo} containerWidth={"95%"} textHeight={"100%"} textWidth={'100%'} placeholderText={'Memo'} /> */}
                <View style={styles.textcontainer}>
                  <TextInput
                    maxLength={10}
                    onChangeText={setService}
                    style={styles.textInput}
                    placeholder="서비스 이름"></TextInput>
                </View>
                <ScrollView style={styles.textcontainer}>
                  <TextInput
                    numberOfLines={2}
                    multiline={true}
                    maxLength={100}
                    onChangeText={setMemo}
                    style={styles.textInput}
                    placeholder="memo"></TextInput>
                </ScrollView>
              </View>
              {/* BookMark가 true 시 즐겨찾기 토글 스위치 visible */}
              {BookMark && (
                <View style={styles.toggleContainer}>
                  <Text>즐겨찾기</Text>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    // switch bar color
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    // switch 동그라미 색깔
                    // ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              )}
            </View>

            {/* 하단: 등록, 닫기 컨테이너 */}
            <View style={styles.modalBottom}>
              <View style={styles.registContainer}>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => {
                    if (!id || !password || !url || !service) {
                      Alert.alert('id, password, url, service를 입력해주세요');
                    } else {
                      serverTest();
                      setVisible(!visible);
                    }
                  }}>
                  <Text style={styles.textStyle}>등록</Text>
                </Pressable>
              </View>
              <View style={styles.closeContainer}>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => setVisible(!visible)}>
                  <Text style={styles.textStyle}>닫기</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '70%',
    position: 'absolute',
  },
  centerContainer: {
    width: '95%',
    height: '95%',
    // backgroundColor: 'yellow',
  },

  modalTop: {
    flex: 2,
    // backgroundColor: 'blue',
  },
  accountContainer: {
    flex: 2,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  urlContainer: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalMiddle: {
    flex: 2,
    // backgroundColor: 'green',
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  MemoContainer: {
    flex: 2,
    width: '100%',
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  toggleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '95%',
    // backgroundColor: 'red'
  },

  modalBottom: {
    flex: 1,
    // backgroundColor: 'pink',
    flexDirection: 'row',
  },
  registContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    width: '50%',
    height: '50%',
    backgroundColor: '#0e1824',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textStyle: {
    color: 'white',
  },
  outside: {
    backgroundColor: 'rgba(1,1,1,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textcontainer: {
    flex: 1,
    width: '95%',
    // height: "95%",
  },
  textInput: {
    // width: "100%",
    // height: "80%",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default RegistraionModal;
