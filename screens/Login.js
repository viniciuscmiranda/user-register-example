import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';

import Toolbar from '~/components/Toolbar';
import Form from '~/components/Form';
import { KeyboardContent, Container } from '~/components/containers';
import { colors } from '~/constants';
import { forms } from '~/utils';
import { Auth } from '~/services/api';

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [inputs] = useState({
    username: forms.fields.username(),
    password: forms.fields.password(),
  });

  return (
    <Container>
      <Toolbar title="Login" logoff={false} />
      <KeyboardContent style={s.content}>
        <Text style={s.message}>
          {"Seja bem-vindo à Cooperativa Personal!"}
        </Text>

        <Form
          loading={loading}
          onSubmit={async (values, setInputError) => {
            setLoading(true);

            const res = await Auth.login(values);
            setLoading(false);

            if (res) {
              navigation.replace('Loading');
            } else {
              setInputError(
                'username',
                'Usuário ou senha inválidos'
              );
            }
          }}
          inputs={inputs}
          submitLabel="Entrar"
        />
      </KeyboardContent>
    </Container>
  )
}

const s = StyleSheet.create({
  message: {
    fontFamily: 'roboto-regular',
    textAlign: 'center',
    fontSize: 16,
    color: colors.dark,
    marginHorizontal: 48,
    marginBottom: 64,
  }
})

export default Login;
