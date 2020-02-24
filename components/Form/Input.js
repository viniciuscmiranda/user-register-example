import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import { colors } from '~/constants';

const Input = ({ inputProps, error, label, style }) => {
  return (
    <View>
      <View style={{ ...s.container, ...style }}>
        <TextInput
          style={s.input}
          autoCompleteType="off"
          autoCorrect={false}
          placeholder={label}
          {...inputProps}
        />
      </View>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <Text style={s.error}>{error}</Text>
        <Text style={s.label}>{label}</Text>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    borderBottomColor: colors.dark,
    borderBottomWidth: 1,
  },

  input: {
    color: colors.dark,
    fontFamily: 'roboto-regular',
    fontSize: 16,
  },

  label: {
    textAlign: 'right',
    color: colors.dark,
    fontFamily: 'roboto-regular',
    marginTop: 4,
  },

  error: {
    textAlign: 'right',
    color: colors.error,
    fontFamily: 'roboto-regular',
    marginTop: 4,
  },
});

export default Input;
