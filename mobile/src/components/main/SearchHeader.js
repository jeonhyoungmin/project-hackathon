import React from 'react';
import {
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  <View style={[styles.block, {width: width - 32}]}></View>;
};

const styles = StyleSheet.create({
  block: {},
});
