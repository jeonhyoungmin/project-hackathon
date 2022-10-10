import { View, Text, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Transition } from 'react-native-reanimated';

const RegistraionModal = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
      <Modal 
      animationType='slide'
      transparent={true}
      // visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      >
        <View style={styles.container}>
          <View style={styles.modalStyle}>
            <Text>registraionModal</Text>
          </View>
        </View>
      </Modal>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalStyle: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 200,
  }
})

export default RegistraionModal