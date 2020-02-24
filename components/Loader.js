import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { colors } from '~/constants';

const Loader = ({ fullscreen = true }) => (
  <View style={fullscreen && s.container}>
    <ActivityIndicator
      color={colors.primary}
      size={52}
    />
  </View>
);

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Loader;
