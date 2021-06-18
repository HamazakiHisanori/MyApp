import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

export default function circleButton(props) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonText}>{children}</Text>
    </View>
  );
}

circleButton.protoTypes = {
  children: string.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'purple',
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    borderRadius: 32,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonText: {
    color: 'white',
    fontSize: 40,
    lineHeight: 40,
  },
});
