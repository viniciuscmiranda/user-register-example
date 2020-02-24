import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ children, style }) => {
  return (
    <View style={{ ...s.container, ...style }}>
      {children}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Container;
