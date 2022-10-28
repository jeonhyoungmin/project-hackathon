import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
  Switch,
  ScrollView,
  Linking,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { ModalTextInput } from '../modaltextinput/ModalTextInput';

const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

//DB에서 데이터를 호출
const RegisteredModal = ({
  regiVisible,
  setRegiVisible,
  BookMark,
  regi_id,
  regi_password,
  regi_url,
  regi_service,
  regi_memo,
  regi_toggle,
  regi_index_bm,
}) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [url, setUrl] = useState('');
  const [memo, setMemo] = useState('');
  const [service, setService] = useState('');
  const [index, setIndex] = useState('');
  const [toggle, setToggle] = useState(false);

  // const toggleValue = () => {
  //   setToggle(!toggle);
  // };

  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    setId(regi_id);
    setPassword(regi_password);
    setUrl(regi_url);
    setMemo(regi_memo);
    setService(regi_service);
    setIndex(regi_index_bm);
    setIsEnabled(Boolean(regi_toggle));
  }, [regiVisible]);

  // 호출한 toggle의 data type이 string이라 toggle이 원하는 대로 활성화되지 않아서
  // 이를 활성화 하기 위해 data type을 boolean값으로 바꾸는 작업
  if (regi_toggle === 'true') {
    regi_toggle = true;
  } else if (regi_toggle === 'false') {
    regi_toggle = false;
  }
  const serverTest = () => {
    const test = {
      id,
      password,
      url,
      service,
      memo,
      index,
      toggle,
    };
    fetch(`${API_URL}/bookmark`, {
      method: 'PUT',
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
      visible={regiVisible}
      onBackdropPress={() => setRegiVisible(!regiVisible)}
      onRequestClose={() => {
        setRegiVisible(!regiVisible);
      }}>
      <Pressable
        style={styles.outside}
        onPress={event => {
          if (event.target === event.currentTarget) {
            setRegiVisible(!regiVisible);
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
                    placeholder={`ID: ${id}`}></TextInput>
                </View>
                {/* <ModalTextInputTwo setting={setPassword} placeholderText={'비밀번호를 입력해주세요'}/> */}
                <View style={styles.textcontainer}>
                  <TextInput
                    maxLength={30}
                    onChangeText={setPassword}
                    style={styles.textInput}
                    placeholder={`PW: ${regi_password}`}></TextInput>
                </View>
              </View>
              {/* <View style={styles.urlContainer}> */}
              {/* <ModalTextInputThree setting={setUrl}  placeholderText={'url를 입력해주세요'} /> */}
              {/* <View style={styles.textcontainer}>
                      <Text>이동하기 :
                        <Text setUrl={regi_url} onPress={() => Linking.openURL(`https://www.${regi_url}`)}>{` ${regi_url}`}</Text>
                      </Text>
                    </View> */}
              {/* </View> */}
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
                    placeholder={`서비스: ${regi_service}`}></TextInput>
                </View>
                <ScrollView style={styles.textcontainer}>
                  <TextInput
                    numberOfLines={2}
                    multiline={true}
                    maxLength={100}
                    onChangeText={setMemo}
                    style={styles.textInput}
                    placeholder={`메모: ${regi_memo}`}></TextInput>
                </ScrollView>
                <View style={styles.textcontainer}>
                  <Text>
                    이동하기 :
                    <Text
                      setUrl={regi_url}
                      onPress={() =>
                        Linking.openURL(`https://www.${regi_url}`)
                      }>{` ${regi_url}`}</Text>
                  </Text>
                </View>
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
                    serverTest();
                    setRegiVisible(!regiVisible);
                  }}>
                  <Text style={styles.textStyle}>수정</Text>
                </Pressable>
              </View>
              <View style={styles.closeContainer}>
                <Pressable
                  style={styles.modalButton}
                  onPress={() => setRegiVisible(!regiVisible)}>
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
    width: '80%',
    height: '80%',
    position: 'absolute',
  },
  centerContainer: {
    width: '95%',
    height: '95%',
    // backgroundColor: 'yellow',
  },

  modalTop: {
    flex: 1,
    // backgroundColor: 'blue',
  },
  accountContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // urlContainer: {
  //   flex: 0.5,
  //   // backgroundColor: 'yellow',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },

  modalMiddle: {
    flex: 2,
    // backgroundColor: 'green',
    // flexDirection: 'column',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  MemoContainer: {
    flex: 5,
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
    marginTop: '2%',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default RegisteredModal;
