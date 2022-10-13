import { View, Text, Alert, Modal, StyleSheet, Pressable, Button, TextInput, KeyboardAvoidingView, Switch, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import ModalTextInput from '../modaltextinput/ModalTextInput';

const RegistraionModal = ({ visible, setVisible, BookMark }) => {
  // const [visible, setVisible] = useState(visible);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
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
                    <ModalTextInput /* bgColor='greenyellow' */ placeholderText={'아이디를 입력해주세요'} />
                    <ModalTextInput /* bgColor={'purple'} */ placeholderText={'비밀번호를 입력해주세요'}/>
                  </View>
                  <View style={styles.urlContainer}>
                    <ModalTextInput /* bgColor={'blue'} */ placeholderText={'url를 입력해주세요'} />
                  </View>
                </View>

                {/* 중단: 메모, 즐겨찾기 컨테이너 */}
                <View style={styles.modalMiddle}>
                  <View style={styles.MemoContainer}>
                    <ModalTextInput containerWidth={"95%"} textHeight={"100%"} textWidth={'100%'} placeholderText={'Memo'} />
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
                    <Pressable style={styles.modalButton}>
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
    height: '50%',
    position: 'absolute',
  },
  centerContainer: {
    width: '95%',
    height: '95%',
    // backgroundColor: 'yellow',
  },

  modalTop: {
    flex: 3,
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
    width: "100%",
    // backgroundColor: 'red',
    alignItems: 'center'
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
});

export default RegistraionModal;