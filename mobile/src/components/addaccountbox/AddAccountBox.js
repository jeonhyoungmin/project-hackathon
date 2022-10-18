import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const AddAccountBox = () => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Text>서비스 이름</Text>
      </View>
      <View>
        <Text>ID</Text>
      </View>
      <View>
        <Text>삭제</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    backgroundColor: 'pink',
  }
})

export default AddAccountBox