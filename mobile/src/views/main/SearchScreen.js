import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import SearchBar from '../../components/main/SearchBar';

// const SearchScreen = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       style={styles.flex}>
//       <SearchBar />
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   flex: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

import SearchContext from '../../components/main/SearchContext';

const SearchScreen = ({navigation}) => {
  const {keyword} = useContext(SearchContext);
  return (
    <View style={styles.flex}>
      <Text>{keyword}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  flex: {},
});

export default SearchScreen;
