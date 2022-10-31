import React, {useContext} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Pressable,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchContext from '../searchcontext/SearchContextProvider';
import {Modal} from 'react-native';

const SearchBarModal = ({search, setSearch}) => {
  const searchModal = () => {
    setSearch(!search);
  };
  const {keyword, onChangeText} = useContext(SearchContext);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={search}
        onRequestClose={() => {
          setSearch(!search);
        }}>
        <Pressable
          style={styles.outside}
          onPress={event => {
            if (event.target === event.currentTarget) {
              setSearch(false);
            }
          }}>
          <View style={styles.modal}>
            <View style={styles.input}>
              <TextInput
                style={[styles.searchInput]}
                placeholder="검색어를 입력해 주세요"
                value={keyword}
                onChangeText={onChangeText}
                autoFocus
              />
              <Pressable
                style={({pressed}) => [
                  styles.button,
                  pressed && {opacity: 0.5},
                ]}
                onPress={() => onChangeText('')}>
                <Icon name="cancel" size={20} color="#9e9e9e" />
              </Pressable>
            </View>
            <Text style={styles.text}>{keyword}</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};
// 검색창에 쓰일 검색바

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  modal: {
    borderWidth: 1,
    borderColor: '#333',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
    height: '50%',
    position: 'absolute',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginLeft: 20,
  },

  searchInput: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 16,
    padding: 0,
    borderRadius: 5,
    height: 30,
    backgroundColor: 'white',
    width: 250,
  },
  searchbarPosition: {
    bottom: 50,
  },

  button: {
    marginLeft: 8,
    padding: 10,
    position: 'absolute',
  },
  text: {
    marginLeft: 30,
  },
  outside: {
    backgroundColor: 'rgba(1,1,1,0.2)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
// 검색바에 쓰이는 스타일 값
export default SearchBarModal;
