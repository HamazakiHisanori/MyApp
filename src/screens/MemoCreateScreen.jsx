import React from 'react';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoCreateScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardSafeView style={styles.container}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value="" multiline />
      </View>

      <CircleButton
        name="checkbox-marked-outline"
        onPress={() => { navigation.goBack(); }}
      />

    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
