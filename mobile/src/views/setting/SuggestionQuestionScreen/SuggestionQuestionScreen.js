import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SuggestionQuestionScreen = () => {
  return (
    <View style={styles.root}>
      <Text>SuggestionQuestion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }
});

export default SuggestionQuestionScreen;