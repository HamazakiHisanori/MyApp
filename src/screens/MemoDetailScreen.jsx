import React from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import AppBar from '../components/appBar';
import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>

      <AppBar />

      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2020年12月24日 0:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>買い物メモ</Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: 'auto' }}>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  memoHeader: {
    backgroundColor: 'purple',
    height: 88,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: 'white',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoDate: {
    color: 'white',
    fontSize: 16,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
