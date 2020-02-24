import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

const Content = ({ children, style, behavior = "padding" }) => {
  return (
    <KeyboardAvoidingView
      style={{ ...s.container, ...style }}
      behavior={behavior}
    >
      {children}
    </KeyboardAvoidingView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingHorizontal: 32,
    justifyContent: 'center',
  }
})

export default Content;
