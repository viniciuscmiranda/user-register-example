import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';

import Input from './Input';
import Button from './Button';
import Checkbox from './Checkbox';

const _inputRefs = {};
const Form = ({
  inputs: propInputs = {},
  onSubmit = () => { },
  submitLabel = "Enviar",
  containerStyle,
  loading,
}) => {
  const [inputs, setInputs] = useState(propInputs);

  const handleChange = (name, value) => {
    const newInputs = { ...inputs };
    newInputs[name].value = value;
    setInputs(newInputs);
  }

  const setInputError = (name, error) => {
    const newInputs = { ...inputs };
    Object.keys(newInputs).forEach(key => delete newInputs[key].error);

    if (name) {
      newInputs[name].error = error;
      _inputRefs[name].focus();
    }

    setInputs(newInputs);
  }

  const handleSubmit = () => {
    const data = {};
    setInputError();

    const valid =
      Object.entries(inputs).every(([name, { value, ...input }]) => {
        try {
          switch (input.type) {
            default: {
              if (!value && input.required) {
                setInputError(name, 'Campo obrigátorio');
                throw 'Required Field';
              } else if (
                value &&
                input.validation &&
                !input.validation(value)
              ) {
                setInputError(name, input.errorMessage);
                throw 'Invalid Value';
              }
            }
          };
        } catch {
          return false;
        } finally {
          data[name] = value;
        }

        return true;
      });

    if (valid) onSubmit(data, setInputError);
  }

  const focustInput = name => {
    if (_inputRefs[name]) {
      _inputRefs[name].focus();
    } else {
      Keyboard.dismiss();
    }
  }

  const focusNextInput = curr => {
    const keys = Object.keys(inputs);
    const name = keys[keys.indexOf(curr) + 1]
    focustInput(name);
  }

  return (
    <View style={containerStyle}>
      <View>
        {Object
          .entries(inputs)
          .map(([name, { label, type, error, ...props }]) => {
            const last = Object.keys(inputs).slice(-1)[0] === name;

            switch (type) {
              case "checkbox":
                return (
                  <Checkbox
                    key={name}
                    onChange={value => handleChange(name, value)}
                    label={label}
                    {...props}
                  />
                );

              default:
                return (
                  <View
                    key={name}
                    style={{ marginVertical: 8 }}
                  >
                    <Input
                      error={error}
                      label={label}
                      inputProps={{
                        onChangeText: text => handleChange(name, text),
                        ref: ref => _inputRefs[name] = ref,
                        onSubmitEditing: () =>
                          last ? handleSubmit() : focusNextInput(name),
                        returnKeyType: last ? "send" : "next",
                        blurOnSubmit: last,
                        ...props
                      }}
                    />
                  </View>
                )
            }
          })
        }
      </View>

      <Button
        loading={loading}
        containerStyles={{ marginTop: 32 }}
        onPress={handleSubmit}
        label={submitLabel}
      />
    </View>
  )
}

export default Form;
