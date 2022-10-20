import { View, Text, Alert, Modal, StyleSheet, Pressable, Button, TextInput, KeyboardAvoidingView, Switch, TouchableWithoutFeedback, Keyboard, ScrollView, Linking } from 'react-native';
import React, { useState } from 'react';
import {ModalTextInput, ModalTextInputTwo, ModalTextInputThree, ModalTextInputFour}from '../modaltextinput/ModalTextInput';
import { Link } from '@react-navigation/native';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

const RegisteredModal = ({ regiVisible, setRegiVisible, BookMark, regi_id, regi_password, regi_url, regi_service, regi_memo }) => {

  const serverTest = () => {
    const test = {
      id,
      password,
      url,
      service,
      memo,
    }
    console.log(test)
    fetch(`${API_URL}/bookmark`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(test)
    })
    .then(async res => {
      try{
        const jsonRes = await res.json();
        console.log(jsonRes)
        if(res.status !== 200){
          // console.warn('안됨');
        } else {
          // console.warn('됨')
        }
      } catch (err) {
        console.log(err);
      }
    })
    .catch(err => {
      console.log(err)
    })
  }

  const [id, setId] = useState(regi_id);
  const [password, setPassword] = useState(regi_password);
  const [url, setUrl] = useState(regi_url);
  const [memo, setMemo] = useState(regi_memo);
  const [service, setService] = useState(regi_service);
  
  // const [visible, setVisible] = useState(visible);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

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
                      <TextInput maxLength={30} onChangeText={setId} style={styles.textInput} placeholder={`ID: ${regi_id}`}></TextInput>
                    </View>
                    {/* <ModalTextInputTwo setting={setPassword} placeholderText={'비밀번호를 입력해주세요'}/> */}
                    <View style={styles.textcontainer}>
                      <TextInput maxLength={30} onChangeText={setPassword} style={styles.textInput} placeholder={`PW: ${regi_password}`}></TextInput>
                    </View>
                  </View>
                  <View style={styles.urlContainer}>
                    {/* <ModalTextInputThree setting={setUrl}  placeholderText={'url를 입력해주세요'} /> */}
                    <View style={styles.textcontainer}>
                      <Text>이동하기 :
                        <Text setUrl={regi_url} onPress={() => Linking.openURL(`https://www.${regi_url}`)}>{` ${regi_url}`}</Text>
                      </Text>
                    </View>
                  </View>
                </View>

                {/* 중단: 메모, 즐겨찾기 컨테이너 */}
                <View style={styles.modalMiddle}>
                  <View style={styles.MemoContainer}>
                    {/* <ModalTextInputFour setting={setMemo} containerWidth={"95%"} textHeight={"100%"} textWidth={'100%'} placeholderText={'Memo'} /> */}
                    <View style={styles.textcontainer}>
                      <TextInput maxLength={10} onChangeText={setService} style={styles.textInput} placeholder={regi_service}></TextInput>
                    </View>
                    <ScrollView style={styles.textcontainer}>
                      <TextInput numberOfLines={2} multiline={true} maxLength={100} onChangeText={setMemo} style={styles.textInput} placeholder={regi_memo}></TextInput>
                    </ScrollView>
                  </View>
                  {/* BookMark가 true 시 즐겨찾기 토글 스위치 visible */}
                  { BookMark && 
                  <View style={styles.toggleContainer}>
                    <Text>즐겨찾기</Text> 
                    <Switch
                      trackColor={{ false: '#767577', true: '#81b0ff' }}
                      // switch bar color
                      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                      // switch 동그라미 색깔
                      // ios_backgroundColor="#3e3e3e"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                  }
                </View>

                {/* 하단: 등록, 닫기 컨테이너 */}
                <View style={styles.modalBottom}>
                  <View style={styles.registContainer}>
                    <Pressable 
                      style={styles.modalButton}
                      onPress={() => {serverTest(); setRegiVisible(!regiVisible)}} 
                      >
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
    flex: 2,
    // backgroundColor: 'blue',
  },
  accountContainer: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  urlContainer: {
    flex: 0.5,
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
    width: "100%",
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  toggleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: "95%",
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
    width: "95%",
    // height: "95%",
  },
  textInput: {
    // width: "100%",
    // height: "80%",
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5
  }
});

export default RegisteredModal;