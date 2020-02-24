import React, { useState } from 'react';

import Toolbar from '~/components/Toolbar';
import Form from '~/components/Form';
import { KeyboardContent, Container } from '~/components/containers';
import { forms } from '~/utils';
import { Users } from '~/services/api';

const Create = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const user = route.params?.user;

  const [inputs] = useState({
    username: forms.fields.username({ value: user.username }),
    email: forms.fields.email({ value: user.email, required: false }),
    password: forms.fields.password(),
    is_staff: forms.inputs.checkbox({
      label: "Administrador",
      value: user.is_staff,
    })
  });

  return (
    <Container>
      <Toolbar title="Editar" back />
      <KeyboardContent>
        <Form
          loading={loading}
          onSubmit={async data => {
            setLoading(true);
            const res = await Users.edit({ id: user.id, data });

            const feedback = {};
            if (res) {
              feedback.message = "Usuário salvo";
            } else {
              feedback.error = true;
              feedback.message = "Não foi possível salvar";
            }

            navigation.replace("Feedback", { feedback });
            setLoading(false);
          }}
          inputs={inputs}
          submitLabel="Salvar"
        />
      </KeyboardContent>
    </Container>
  )
}

export default Create
