import Head from "next/head";
import {
  FormLabel,
  FormErrorMessage,
  Select,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Forms } from "src/components";
import { cpfMask } from "src/services/validation.js";

export default function RecuperarSenha() {
  const initialValues = {
    cpf: "",
    password: "",
    confirmPassword: "",
    dateBirth: "",
    group: "",
    city: "",
  };

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
    <>
      <Head>
        <title>Recuperar Senha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Forms maxW="container.md" ms={0} py={"3rem"} px={"5rem"}>
        <Heading size="md" mb={"20px"} fontWeight={800}>
          Redefinição de senha
        </Heading>
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
                  <Forms.FormControl isInvalid={errors.cpf && touched.cpf}>
                    <FormLabel htmlFor="cpf">CPF</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="dateBirth">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.dateBirth && touched.dateBirth}
                  >
                    <FormLabel htmlFor="dateBirth">
                      DATA DE NASCIMENTO
                    </FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">NOVA SENHA</FormLabel>
                    <Forms.StylishInput
                      {...field}
                      id="password"
                      type="password"
                    />
                    <FormHelperText>
                      Sua senha deve ter entre 6 e 20 dígitos
                    </FormHelperText>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="confirmPassword">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={
                      errors.confirmPassword && touched.confirmPassword
                    }
                  >
                    <FormLabel htmlFor="confirmPassword">
                      CONFIRMAÇÃO DE SENHA
                    </FormLabel>
                    <Forms.StylishInput
                      {...field}
                      id="confirmPassword"
                      type="password"
                    />
                    <FormErrorMessage>
                      {errors.confirmPassword}
                    </FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="group">
                {({ field, form }) => (
                  <Forms.FormControl isInvalid={errors.group && touched.group}>
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="city">
                {({ field, form }) => (
                  <Forms.FormControl
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
                  </Forms.FormControl>
                )}
              </Field>

              {/* habilitar depois da validaçao dos dados*/}
              <Forms.Button
                // isDisabled
                mt={4}
                isLoading={isSubmitting}
                type="submit"
              >
                Alterar senha
              </Forms.Button>
            </Form>
          )}
        </Formik>
      </Forms>
    </>
  );
}
