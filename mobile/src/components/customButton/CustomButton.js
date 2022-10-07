import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

const CustomButton = ({ onPress, type="", bgColor, fgColor, text }) => {
  return (
    // CustomButton 이라는 함수는 매개변수(parameter)로 onPress, text, type="", bgColor, fgColor 가지고 있다.

    /*
      다양한 유형의 상호작용 버튼을 만들기 위해서 button 대신 Pressable이라는 컴포넌트를 사용했다.
      Pressable 은 다양한 인터랙션 타입을 지원하고 직접적으로 제어가 가능하게끔 한다.
      이 기능은 hover, blur, focus 등으로 확장될 수 있다.

      onPress 라는 props는 버튼을 눌렀을 때 어떤 함수를 실행할지 결정하는 기능을 한다.
    */
    <Pressable onPress = {onPress} style={[styles.container, styles[`container_${type}`], bgColor ? {backgroundColor: bgColor} : {}]}>
      <Text style={[styles.text, styles[`text_${type}`, fgColor ? {color: fgColor}: {}]]}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 2,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#222',
    borderWidth: 2,
  },

  text: {},
  
});

export default CustomButton;