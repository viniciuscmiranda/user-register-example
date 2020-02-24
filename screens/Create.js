import React, { useState } from 'react';

import Toolbar from '~/components/Toolbar';
import Form from '~/components/Form';
import { KeyboardContent, Container } from '~/components/containers';
import { forms } from '~/utils';
import { Users } from '~/services/api';

const Create = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [inputs] = useState({
    username: forms.fields.username(),
    email: forms.fields.email({ required: false }),
    password: forms.fields.password(),
    is_staff: forms.inputs.checkbox({ label: "Administrador" })
  });

  return (
    <Container>
      <Toolbar title="Cadastrar" back />
      <KeyboardContent>
        <Form
          loading={loading}
          onSubmit={async data => {
            setLoading(true);
            const res = await Users.create(data);

            const feedback = {};
            if (res) {
              feedback.message = "Usuário cadastrado";
            } else {
              feedback.error = true;
              feedback.message = "Não foi possível cadastrar";
            }

            navigation.replace("Feedback", { feedback });
            setLoading(false);
          }}
          inputs={inputs}
          submitLabel="Cadastrar"
        />
      </KeyboardContent>
    </Container>
  )
}

export default Create
