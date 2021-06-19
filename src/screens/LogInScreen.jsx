import React from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function LogInScreen() {
  return (
    <View style={styles.container}>

      <AppBar />

      <View style={styles.inner}>

        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="Password" />

        <Button label="Submit" />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    backgroundColor: 'white',
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 2,
  },
  footerText: {
    fontSize: 16,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 16,
    lineHeight: 24,
    color: 'purple',
  },
  footer: {
    flexDirection: 'row',
  },
});
