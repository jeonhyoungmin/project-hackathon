import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

const BookMarkScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* 상단 뒤로가기 버튼, 검색 버튼, 카테고리 버튼 */}
      <View style={styles.viewTop}>
        
      </View>


      {/* 가운데 서비스 등록 버튼 */}
      <View style={styles.scrollContainer}>
      <ScrollView style={styles.scroll}>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>gd</Text></View>
        <View><Text>6d</Text></View>
        <View><Text>5d</Text></View>
        <View><Text>g1</Text></View>
        <View><Text>g2</Text></View>
        <View><Text>3d</Text></View>
        <View><Text>3d</Text></View>
        <View><Text>3d</Text></View>
        <View><Text>3d</Text></View>
      </ScrollView>
      </View>


      {/* 하단  유사성 검사 버튼과 위치 서비스 버튼*/}
      <View style={styles.viewBottom}>
        <View style={styles.similarButtonBox}>

        </View>
        <View style={styles.locationButtonBox}></View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    flex: 1.5,
    backgroundColor: 'pink',
  },
  scrollContainer: {
    flex: 3,
  },
  scroll: {
    backgroundColor: 'red'
  },






  viewBottom: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  similarButtonBox: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationButtonBox: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default BookMarkScreen