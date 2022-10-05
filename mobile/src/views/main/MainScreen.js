import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import CustomButton from '../../components/main/CustomButton';

const DATA = [
  {
    id: '1',
    title: '',
  },
  {
    id: '2',
    title: '',
  },
  {
    id: '3',
    title: '',
  },
  {
    id: '4',
    title: '',
  },
  {
    id: '5',
    title: '',
  },
  {
    id: '6',
    title: '',
  },
];

const Item = ({title}) => (
  <View style={styles.display}>
    <Text style={styles.mainbox}>{title}</Text>
    <CustomButton></CustomButton>
  </View>
);

const MainScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={Item}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainbox: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  row: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: 10,
  },
  display: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;
