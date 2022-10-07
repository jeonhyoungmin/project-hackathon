import React from 'react';
import {TextInput, StyleSheet, Text, View} from 'react-native';

const SearchBar = props => {
  return (
    <View>
      <TextInput
        style={[styles.searchInput, styles.searchbarPosition]}
        placeholder="검색어를 입력해 주세요"
        value={props.searchText}
        onChangeText={text => props.setSrearchText(text)}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
};
// 검색창에 쓰일 검색바

const styles = StyleSheet.create({
  searchInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 16,
    padding: 0,
    borderRadius: 5,
    height: 30,
    backgroundColor: 'white',
    width: 200,
  },
  searchbarPosition: {
    position: 'absolute',
    bottom: 375,
    left: 100,
  },
});
// 검색바에 쓰이는 스타일 값
export default SearchBar;
