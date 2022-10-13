import React, {useContext, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from './SearchContext';
import {Modal} from 'react-native';

const {width} = Dimensions.get('window');

const SearchBar = (search, setSearch) => {
  // const [search, setSearch] = useState(false);
  const {keyword, onChangeText} = useContext(SearchContext);

  return (
    <Modal animationType="slide" transparent={true} visible={search}>
      <View style={styles.container}>
        <View style={styles.modal}>
          {/* <TextInput
          style={[styles.searchInput, styles.searchbarPosition]}
          placeholder="검색어를 입력해 주세요"
          value={keyword}
          onChangeText={onChangeText}
          autoFocus
        /> */}
          <Pressable
            style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
            onPress={() => setSearch(!search)}>
            <Icon name="cancel" size={5} color="#9e9e9e" />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
// 검색창에 쓰일 검색바

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
    bottom: 370,
    left: -110,
  },
  button: {
    marginLeft: 8,
  },
  modal: {
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
});
// 검색바에 쓰이는 스타일 값
export default SearchBar;
