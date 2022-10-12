import { View, Text, Alert, Modal, StyleSheet, Pressable, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Transition } from 'react-native-reanimated';
import { Colors } from 'react-native-paper';

const RegistraionModal = ({visible, setVisible}) => {

  // const [visible, setVisible] = useState(visible);

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onBackdropPress={() => setVisible(!visible)}
      onRequestClose={() => {
        setVisible(!visible)
    }} 
    >
      <View style={styles.container}>
        <View style={styles.modalStyle}>
          <View style={styles.centerContainer}>
            {/* 상단: 아이디, 비밀번호, url 컨테이너 */}
            <View style={styles.modalTop}>
              <View style={styles.accountContainer}>
                <TextInput></TextInput>
                <TextInput></TextInput>
              </View>
              <View style={styles.urlContainer}>
                <TextInput></TextInput>
              </View>
            </View>



            {/* 중단: 메모, 즐겨찾기 컨테이너 */}
            <View style={styles.modalMiddle}>

            </View>



            {/* 하단: 등록, 닫기 컨테이너 */}
            <View style={styles.modalBottom}>
              <View style={styles.registContainer}>
                <Pressable style={styles.modalButton}>
                  <Text style={styles.textStyle}>등록</Text>
                </Pressable>
              </View>
              <View style={styles.closeContainer}>
                <Pressable style={styles.modalButton} onPress={() => setVisible(!visible)}>
                  <Text style={styles.textStyle}>닫기</Text>
                </Pressable>
              </View>
            </View>


          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalStyle: {
    borderWidth: 1,
    borderColor: "#333",
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: "70%",
    height: "50%",
  },
  centerContainer: {
    width: '95%',
    height: '95%',
    // backgroundColor: 'yellow',
  },



  modalTop: {
    flex: 3,
    backgroundColor: 'blue'
  },
  accountContainer: {

  },
  urlContainer: {

  },



  modalMiddle: {
    flex: 2,
    backgroundColor: 'green'
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
    width: "50%",
    height: "50%",
    backgroundColor: "#0e1824",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textStyle: {
    color: 'white',
  }
})

export default RegistraionModal