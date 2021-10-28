import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  FormHelperText,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Content } from "src/styles/recuperar_senha.style";

export default function RecuperarSenha() {
  const initialValues = {
    cpf: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    group: "",
    city: "",
  };

  function cpfMask(value) {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  function validateData(values) {
    const errors = {};
    const required = ["cpf", "password", "dateBirth"];
    for (let field of required) {
      if (!values[field]) {
        errors[field] = "Campo obrigatório";
      } else {
        if (!/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(values.cpf)) {
          errors.cpf = "CPF não válido";
        }

        if (
          !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            values.password
          )
        ) {
          errors.password = "Senha não válida";
        }

        if (values.confirmPassword !== values.password) {
          errors.confirmPassword = "As senhas devem ser iguais";
        }
      }
    }

    return errors;
  }
  return (
    <Content>
      <main>
        <h1 className="title">Redefinição de senha</h1>
        <Formik
          initialValues={initialValues}
          validate={(values) => validateData(values)}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            isSubmitting,
            setFieldValue,
            handleBlur,
          }) => (
            <Form className="agendamento-form">
              <Field name="cpf">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.cpf && touched.cpf}>
                    <FormLabel htmlFor="cpf">CPF</FormLabel>
                    <Input
                      {...field}
                      id="cpf"
                      maxLength="14"
                      value={values.cpf}
                      onChange={(e) => {
                        const formatted = cpfMask(values.cpf);
                        setFieldValue("cpf", formatted);
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        const formatted = cpfMask(values.cpf);
                        setFieldValue("cpf", formatted);
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.cpf}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="dateBirth">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.dateBirth && touched.dateBirth}
                  >
                    <FormLabel htmlFor="dateBirth">
                      DATA DE NASCIMENTO
                    </FormLabel>
                    <Input
                      {...field}
                      type="date"
                      id="dateBirth"
                      maxLength="14"
                      value={values.dateBirth}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.dateBirth}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.password && touched.password}>
                    <FormLabel htmlFor="password">NOVA SENHA</FormLabel>
                    <Input {...field} id="password" type="password" />
                    <FormHelperText>
                      Sua senha deve ter entre 6 e 20 dígitos
                    </FormHelperText>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="confirmPassword">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor="confirmPassword">
                      CONFIRMAÇÃO DE SENHA
                    </FormLabel>
                    <Input {...field} id="confirmPassword" type="password" />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="group">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.group && touched.group}>
                    <FormLabel htmlFor="group">
                      GRUPO QUE VOCÊ PERTENCE
                    </FormLabel>
                    <Select
                      {...field}
                      placeholder="Selecione"
                      id="group"
                      value={values.group}
                      size="lg"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <FormErrorMessage>{errors.group}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="city">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.city && touched.city}
                    // isRequired
                  >
                    <FormLabel htmlFor="city">
                      QUAL SEU MUNICÍPIO DE RESIDÊNCIA
                    </FormLabel>
                    <Select
                      {...field}
                      placeholder="Selecione"
                      id="city"
                      value={values.city}
                      size="lg"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    <FormErrorMessage>{errors.city}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* habilitar depois da validaçao dos dados*/}
              <Button
                // isDisabled
                mt={4}
                isLoading={isSubmitting}
                type="submit"
                className="form-button"
              >
                Alterar senha
              </Button>
            </Form>
          )}
        </Formik>
      </main>
    </Content>
  );
}
