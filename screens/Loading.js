import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';

import { colors } from '~/constants';
import { auth } from '~/utils';
import { Users, Auth } from '~/services/api';

const getMessage = () => {
  const messages = [
    "Carregando dados...",
    "A paciência é uma virtude...",
    "Estamos buscando seus dados para você!",
    "Vamos, conte até 10!",
    "Minerando bitcoins...",
    "Conectando...",
    "Estamos fazendo o nosso melhor!",
    "Só mais um minutinho..."
  ]

  return messages[parseInt(Math.random() * messages.length)];
}

const Loading = ({ navigation, message = getMessage() }) => {
  useEffect(() => {
    const fetchData = async () => {
      const token = await auth.getToken();
      if (token) {
        const res = await Users.get();
        if (!res) {
          Auth.logout();
          navigation.replace('Login');
        } else {
          navigation.replace('Home', { users: res })
        }
      } else {
        navigation.replace('Login');
      }
    }

    fetchData();
  }, []);

  return (
    <View style={s.container}>
      <ActivityIndicator color={colors.primary} size={80} />

      <Text style={s.message}>
        {message}
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  message: {
    color: colors.primary,
    fontFamily: 'roboto-regular',
    marginTop: 12,
    fontSize: 20,
    paddingHorizontal: 64,
    textAlign: 'center',
  },
})

export default Loading;
