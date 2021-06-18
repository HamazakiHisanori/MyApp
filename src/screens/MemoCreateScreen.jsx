import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/appBar';
import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen() {
  return (
    <KeyboardSafeView style={styles.container}>

      <AppBar />

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value="" multiline />
      </View>

      <CircleButton name="checkbox-marked-outline" />

    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});