import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SuggestionQuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SuggestionQuestion</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SuggestionQuestionScreen;