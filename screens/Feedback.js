import React, { useEffect } from 'react';
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { colors } from '~/constants';

const Feedback = ({ navigation, route }) => {
  const { feedback } = route.params;
  const { error, title, message, replace } = feedback;

  useEffect(() => {
    setTimeout(() => {
      if (replace) {
        navigation.replace(replace);
      } else {
        DeviceEventEmitter.emit('force-refresh');
        navigation.popToTop();
      }

    }, 1500)
  })

  return (
    <View style={{
      ...s.container,
      ...error ? s.errorContainer : s.successContainer
    }}>
      <Icon
        style={s.icon}
        name={error ? "cancel" : "check-circle"}
      />

      <Text style={s.title}>
        {title || error ? "Ocorreu um erro" : "Sucesso!"}
      </Text>

      <Text style={s.message}>
        {message}
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorContainer: {
    backgroundColor: colors.error,
  },

  successContainer: {
    backgroundColor: colors.primary,
  },

  icon: {
    position: 'absolute',
    color: colors.feedbackIcon,
    fontSize: 700,
    right: 0,
    top: 0,
  },

  title: {
    color: colors.text,
    textTransform: 'uppercase',
    fontFamily: 'roboto-bold',
    fontSize: 32,
  },

  message: {
    color: colors.text,
    fontFamily: 'roboto-regular',
    fontSize: 20,
    marginTop: -2,
  },
})

export default Feedback;
