import React from 'react';
import { View, StyleSheet } from 'react-native';

const Content = ({ children, style }) => {
  return (
    <View style={{ ...s.container, ...style }}>
      {children}
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})

export default Content;
