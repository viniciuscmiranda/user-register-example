import React from 'react'
import {
  Modal,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Icon from '@expo/vector-icons/MaterialIcons';

import { Button } from '~/components/Form';
import { colors } from '~/constants';

const WarningModal = ({
  open,
  onConfirm,
  onClose,
  confirmLabel = "Confirmar",
  cancelLabel = "Cancelar",
  text,
  loading,
  success,
  error,
  returnLabel = "Voltar",
}) => {
  const handleAction = action => {
    if (!loading) action();
  }

  const CustomIcon = () => {
    if (loading && !success && !error) {
      return (
        <ActivityIndicator
          size={98}
          color={colors.primary}
        />
      )
    } else if (error) {
      return (
        <Icon
          name="cancel"
          style={s.icon}
        />
      )
    } else if (success) {
      return (
        <Icon
          name="check-circle"
          style={s.icon}
        />
      )
    } else {
      return (
        <Icon
          name="warning"
          style={s.icon}
        />
      )
    }
  }

  return (
    <Modal
      visible={open}
      transparent
      animationType="fade"
    >
      <View style={s.container}>
        <View
          style={s.background}
          onTouchStart={() => handleAction(onClose)}
        />

        <View style={s.content}>
          <CustomIcon />

          <Text style={s.text}>
            {text}
          </Text>

          <View style={s.actions}>
            <Button
              containerStyles={s.button}
              onPress={() => handleAction(onClose)}
              label={(!success && !error) ? cancelLabel : returnLabel}
            />

            {(!success && !error) && <Button
              containerStyles={{ ...s.button, ...s.confirmButton }}
              onPress={() => handleAction(onConfirm)}
              label={confirmLabel}
            />}
          </View>
        </View>
      </View>
    </Modal>
  )
}


const s = StyleSheet.create({
  background: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0, 0, 0,.6)'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    backgroundColor: colors.backgroundSecondary,
    padding: 24,
    borderRadius: 5,
    alignSelf: 'stretch',
    margin: 24,
    alignItems: 'center',
  },

  icon: {
    fontSize: 100,
    color: colors.primary,
  },

  text: {
    color: colors.primary,
    fontSize: 18,
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    marginHorizontal: 32,
  },

  actions: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginTop: 52,
    justifyContent: 'space-between',
  },

  button: {
    flex: 1,
    marginHorizontal: 8,
  },

  confirmButton: {
    backgroundColor: colors.error,
  },
})

export default WarningModal;
