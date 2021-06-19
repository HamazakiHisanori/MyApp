import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <MaterialCommunityIcons name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: 'purple',
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 43,
    bottom: 48,
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
