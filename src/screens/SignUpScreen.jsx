import React from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>

      <View style={styles.inner}>

        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email" />
        <TextInput style={styles.input} value="Password" />

        <Button
          label="Submit"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            });
          }}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLink}>Log In.</Text>
          </TouchableOpacity>
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
