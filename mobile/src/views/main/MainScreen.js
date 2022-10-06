import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import {PlusButton} from '../../components/main/CustomButton';
import {SearchButton} from '../../components/main/CustomButton';
import {SettingButton} from '../../components/main/CustomButton';
import {HambergurButton} from '../../components/main/CustomButton';

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

const Item = ({title, onPress, style}) => (
  <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
    <Text style={styles.mainbox}>{title}</Text>
    <PlusButton>
      <Image
        style={styles.img}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
        resizeMode="cover"
      />
    </PlusButton>
  </TouchableOpacity>
);

const MainScreen = ({onPress, style}) => {
  return (
    <SafeAreaView>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        data={DATA}
        renderItem={Item}></FlatList>
      <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
        <View style={styles.Searchposition}>
          <SearchButton />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
        <View style={styles.Settingposition}>
          <SettingButton />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={[styles.display, style]}>
        <View style={styles.Hambergurposition}>
          <HambergurButton />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainbox: {
    width: 150,
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
  Searchposition: {
    position: 'absolute',
    bottom: 400,
    left: 300,
  },
  Settingposition: {
    position: 'absolute',
    bottom: 400,
    left: 340,
  },
  Hambergurposition: {
    position: 'absolute',
    bottom: 470,
    left: 40,
  },
  img: {
    width: '50%',
    height: '50%',
    position: 'absolute',
  },
});

export default MainScreen;
