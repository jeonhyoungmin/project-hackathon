import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
