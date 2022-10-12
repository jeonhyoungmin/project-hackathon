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

const SearchBar = () => {
  const [visible, setVisible] = useState(false);
  const {keyword, onChangeText} = useContext(SearchContext);
  const toggleModal = () => {
    setVisible(!visible);
  };
  return (
    <View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        style={styles.modal}
        onDismiss={toggleModal}> */}
      <TextInput
        style={[styles.searchInput, styles.searchbarPosition]}
        placeholder="검색어를 입력해 주세요"
        value={keyword}
        onChangeText={onChangeText}
        autoFocus

        // value={props.searchText}
        // onChangeText={text => props.setSrearchText(text)}
        // onSubmitEditing={props.onSubmit}
      />
      {/* </Modal> */}
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => setVisible(false)}>
        <Icon name="cancel" size={5} color="#9e9e9e" />
      </Pressable>
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
    bottom: 370,
    left: -110,
  },
  button: {
    marginLeft: 8,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: 5,
    transform: [{translateX: -(width * 0.4)}, {translateY: -90}],
    height: 180,
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 7,
  },
});
// 검색바에 쓰이는 스타일 값
export default SearchBar;
