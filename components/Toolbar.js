import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

import { colors } from '~/constants';
import { Auth } from '~/services/api';

const Toolbar = ({ back, title, logoff }) => {
  const navigation = useNavigation();

  return (
    <View style={s.container}>
      <View style={s.left}>
        {back && (
          <TouchableOpacity
            onPress={navigation.goBack}
            style={s.actionContainer}
          >
            <Icon name="arrow-back" style={s.icon} />
          </TouchableOpacity >
        )}
        <View style={s.titleContainer}>
          <Text style={s.title}>{title}</Text>
          <Text style={s.subTitle}>
            {"Cooperativa Personal"}
          </Text>
        </View>
      </View>

      <View style={s.right}>
        {logoff && (
          <TouchableOpacity
            onPress={() => {
              Auth.logout();
              navigation.replace("Login");
            }}
          >
            <Icon name="exit-to-app" style={s.icon} />
          </TouchableOpacity >
        )}
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxHeight: 64,
  },

  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  titleContainer: {
  },

  actionContainer: {
    marginRight: 12,
  },

  title: {
    color: colors.text,
    fontSize: 16,
    marginBottom: -2,
    fontFamily: 'roboto-medium',
  },

  subTitle: {
    color: colors.darker,
    fontSize: 12,
    fontFamily: 'roboto-regular',
  },

  right: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  icon: {
    color: colors.text,
    fontSize: 24,
  }
});

export default Toolbar;
