import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>My App</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: 'white',
    fontWeight: 'bold',
  },
});
