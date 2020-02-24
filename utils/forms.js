export const validation = {
  //validate email based on RFC 5322 
  email: email => (
    (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(email)
  ),

  username: username => (
    !(/^(.*\s+.*)+$/).test(username)
  )
}

export const fields = {
  email: (props = {}) => ({
    autoCompleteType: "email",
    autoCapitalize: "none",
    keyboardType: "email-address",
    label: 'E-mail',
    required: true,
    errorMessage: 'E-mail inválido',
    validation: validation.email,
    value: '',
    ...props,
  }),

  username: (props = {}) => ({
    label: 'Usuário',
    autoCapitalize: "none",
    autoCompleteType: "name",
    required: true,
    errorMessage: 'O nome não pode conter espaços',
    validation: validation.username,
    value: '',
    ...props,
  }),

  password: (props = {}) => ({
    label: 'Senha',
    required: true,
    secureTextEntry: true,
    autoCapitalize: "none",
    value: '',
    ...props,
  }),
}

export const inputs = {
  checkbox: (props = {}) => ({
    type: 'checkbox',
    value: false,
    ...props,
  }),
}