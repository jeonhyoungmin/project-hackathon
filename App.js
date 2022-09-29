/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
//  * @format
 * @flow strict-local
 */

// import { StatusBar } from 'react-native';
import React from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, Button, Alert} from 'react-native';

const App = () => {
const HiText= () => 
Alert.alert(
  "Hi",
)
  return (
    <SafeAreaView style = {styles.container}>
      <View style={styles.viewContainer}>
        <View><TextInput value={Text} placeholder='아이디를 입력해주세요' style={styles.viewOne}></TextInput></View>
        <View><TextInput value={Number} placeholder='비밀번호를 입력해주세요' style={styles.viewTwo}></TextInput></View>
          <View style={styles.buttonContainer}>
            <View><Button color="pink" title='회원가입' onPress={HiText} style={styles.buttonOne}></Button></View>
            <View><Button color="pink" title='로그인' style={styles.buttonTwo}></Button></View>
          </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center"
  },
  viewContainer:{
    width: 200,
    height: 150,
    // backgroundColor: "green",
    justifyContent: "space-around"
  },
  viewOne: {
    // backgroundColor: "red"
    borderWidth: 1,
    borderRadius: 5
  },
  viewTwo: {
    // backgroundColor: "cadetblue"
    borderWidth: 1,
    borderRadius: 5
  },
  buttonContainer:{
    flexDirection: "row",
    justifyContent: "space-around"
  },
  buttonOne: {
  },
  buttonTwo: {
  }
});

export default App;




// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.subContainerOne}></View>
//       <View style={styles.subContainerTwo}></View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   subContainerOne: {
//     flex:1,
//     backgroundColor:"yellow"
//   },
//   subContainerTwo: {
//     flex:1,
//     backgroundColor:"green"
//   }
// });


// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
// 		//각 태그들에는 style이라는 속성을 갖습니다.
// 		//이 속성은 파일 최하단에 작성한 스타일 코드 객체의 키 값을 부여해
//     // 엘리먼트들에 스타일을 줄 수 있습니다.
//     //이는 JSX문법을 배우고 난 다음 더 자세히 다룹니다.
//     <View style={styles.container}>
// 			{/* //보인 영역을 갖는 엘리먼트 7가 반복적으로 쓰였습니다. */}
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//     </View>
//   );
// }

// //텍스트가 영역을 갖고, 가운데 정렬도 하며, 테두리 스타일을 갖게 끔 하는 코드입니다.
// //JSX를 마저 배우고 스타일에 대해 자세히 다루니
// //걱정 안해도 좋습니다!
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     borderColor:'#000',
//     borderWidth:1,
//     borderRadius:10,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   }
// });





// import React from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     borderColor:'#000',
//     borderWidth:1,
//     borderRadius:10,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   }
// });



// import React from 'react';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
//         {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
//         <Button 
//           style={styles.buttonStyle} 
//           title="버튼입니다 "
//           color="#f194ff" 
//           onPress={function(){
//             Alert.alert('팝업 알람입니다!!')
//           }}
//         />
//         {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
//         <Button 
//             style={styles.buttonStyle} 
//             title="버튼입니다 "
//             color="#FF0000" 
//             onPress={()=>{
//               Alert.alert('팝업 알람입니다!!')
//             }}
//           />
//           </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   },
// });



// import React from 'react';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
//         {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
//         <Button 
//           style={styles.buttonStyle} 
//           title="버튼입니다 "
//           color="#f194ff" 
//           onPress={function(){
//             Alert.alert('팝업 알람입니다!!')
//           }}
//         />
//         {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
//         <Button 
//             style={styles.buttonStyle} 
//             title="버튼입니다 "
//             color="#FF0000" 
//             onPress={()=>{
//               Alert.alert('팝업 알람입니다!!')
//             }}
//           />
//           </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   },
// });



// import React from 'react';
// import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// export default function App() {
//   //화살표 함수 형식으로 함수를 정의하고
//   //jSX문법 안에서 사용할 수 있습니다
//   const customAlert = () => {
//     Alert.alert("JSX 밖에서 함수 구현 가능!")
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
//         {/* onPress에 밖에서 구현한 함수 이름을 고대로 넣을 수도 있고*/}
//         <Button 
//           style={styles.buttonStyle} 
//           title="버튼입니다 "
//           color="#f194ff" 
//           onPress={customAlert}
//         />
//         {/* onPress를 누르면 속성에 바로 구현해 놓은 함수 안에 customALert함수를 두고 실행할 수 있게도 가능합니다 */}
//         <Button 
//             style={styles.buttonStyle} 
//             title="버튼입니다 "
//             color="#FF0000" 
//             onPress={() => {customAlert()}}
//           />
//           </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   textContainer: {
//     height:100,
//     margin:10,
//   },
//   textStyle: {
//     textAlign:"center"
//   },
// });




// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerOne}>

//       </View>
//       <View style={styles.containerTwo}>
//         <View style={styles.innerOne}>

//         </View>
//         <View style={styles.innerTwo}>

//         </View>

//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1
//   },
//   containerOne: {
//     flex:1,
//     backgroundColor:"red"
//   },
//   containerTwo:{
//     flex:2,
//     backgroundColor:"yellow"
//   },
//   innerOne: {
//     flex:1,
//     backgroundColor:"blue"
//   },
//   innerTwo: {
//     flex:4,
//     backgroundColor:"orange"
//   }
// });