import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { colors } from '~/constants';

const Checkbox = ({ value, onChange, label }) => {
  return (
    <TouchableOpacity
      onPress={() => onChange(!value)}
      style={s.container}
    >
      <View style={s.box}>
        {value && <View style={s.checked} />}
      </View>

      <Text style={s.label}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  box: {
    height: 24,
    width: 24,
    borderColor: colors.primary,
    borderRadius: 5,
    borderWidth: 3,
    overflow: 'hidden',
    padding: 2,
  },

  checked: {
    backgroundColor: colors.primary,
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 2,
  },

  label: {
    fontFamily: 'roboto-regular',
    color: colors.primary,
    fontSize: 16,
    marginLeft: 8,
  },
})

export default Checkbox;
