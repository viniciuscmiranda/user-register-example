import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
import Icon from '@expo/vector-icons/MaterialIcons';

import { colors } from '~/constants';

const Fab = ({ onPress, icon }) => {
  return (
    <TouchableRipple
      onPress={onPress}
      rippleColor="#fff2"
      style={s.container}
    >
      <Icon
        name={icon}
        style={s.icon}
      />
    </TouchableRipple>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.dark,
    padding: 8,
    position: 'absolute',
    bottom: 16,
    right: 16,
    borderRadius: 32,
    elevation: 2,
  },

  icon: {
    color: colors.text,
    fontSize: 32,
  },
})

export default Fab;
