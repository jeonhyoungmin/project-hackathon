import { View, Text, Alert, Modal, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const RegistraionModal = () => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal 
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
      >
        <Text>registraionModal</Text>
      </Modal>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  }
})

export default RegistraionModal