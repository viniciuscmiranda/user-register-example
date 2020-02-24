import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TouchableRipple } from 'react-native-paper';

import { colors } from '~/constants';

const Button = ({
  onPress,
  label,
  loading = false,
  labelColor = '#fff',
  containerStyles,
}) => {
  return (
    <TouchableRipple
      style={{ ...s.container, ...containerStyles }}
      onPress={onPress}
      disabled={loading}
      rippleColor="#fff2"
    >
      {!loading ? (
        <Text style={{ ...s.label, color: labelColor }}>
          {label}
        </Text>
      ) : (
          <ActivityIndicator
            size={22}
            color={labelColor}
          />
        )}
    </TouchableRipple>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 12,
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
  },

  label: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'roboto-regular',
  },
})

export default Button;
