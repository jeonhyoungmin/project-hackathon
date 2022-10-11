import React, {useState} from 'react';
import SearchBar from '../../components/main/SearchBar';
import {View, Text} from 'react-native';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}></SearchBar>
      <Text>{searchText}</Text>
    </View>
  );
};
// 검색창 (아직 구현중)
export default SearchScreen;
