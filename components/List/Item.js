import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';
import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from '@react-navigation/core';

import { colors } from '~/constants';

const Item = ({ item = {}, onDelete }) => {
  const navigation = useNavigation();

  return (
    <View style={s.container}>
      <View style={s.data}>
        <Text style={{ ...s.username, ...(item.is_staff && s.staffUsername) }}>
          {item.username}
        </Text>
        <Text style={s.email}>
          {item.email}
        </Text>
      </View>

      <View style={s.actions}>
        <TouchableRipple
          rippleColor="#fff2"
          style={{ ...s.editActionContainer, ...s.actionContainer }}
          onPress={() => {
            navigation.navigate('Edit', { user: item })
          }}
        >
          <Icon
            style={s.actionIcon}
            name="create"
          />
        </TouchableRipple>

        <TouchableRipple
          rippleColor="#fff2"
          onPress={onDelete}
          style={{ ...s.deleteActionContainer, ...s.actionContainer }}
        >
          <Icon
            style={s.actionIcon}
            name="delete"
          />
        </TouchableRipple>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
    padding: 16,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: colors.primary,
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  data: {
    flex: 1,
  },

  username: {
    color: colors.primary,
    fontFamily: 'roboto-regular',
    fontSize: 16,
  },

  staffUsername: {
    fontFamily: 'roboto-bold'
  },

  email: {
    color: colors.textSecondary,
  },

  actions: {
    flexDirection: 'row',
  },

  actionContainer: {
    padding: 6,
    borderRadius: 5,
  },

  editActionContainer: {
    backgroundColor: colors.primary,
    marginRight: 8,
  },

  deleteActionContainer: {
    backgroundColor: colors.error,
  },

  actionIcon: {
    fontSize: 20,
    color: colors.text,
  },

})

export default Item;
