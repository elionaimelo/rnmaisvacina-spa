import { useState } from "react";
import Link from "next/link";

//import da lib de interface e form (chakra, formik)
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Forms } from "src/components";
import { cpfMask } from "src/services/validation.js";

export function FormLogin() {
  const [isDisabled, setIsDisabled] = useState(true);

  function validateData(values) {
    const errors = {};
    if (!values.cpf) {
      errors.cpf = "Campo obrigatório";
    } else if (!/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(values.cpf)) {
      errors.cpf = "CPF não válido";
    }

    if (!values.password) {
      errors.password = "Campo obrigatório";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      )
    ) {
      errors.password = "Password não válido";
    }

    // if (errors === {}) {
    //   setIsDisabled(true);
    // }
    return errors;
  }

  const buttonDisabled = () => {
    return;
  };
  return (
    <Forms maxW="container.md" ms={0} py={"3rem"} px={"5rem"}>
      <Box maxW="sm">
        <Formik
          initialValues={{ cpf: "", password: "" }}
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
            <Form>
              <Field name="cpf">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.cpf && touched.cpf}>
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
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.password && touched.password}
                    mt="3"
                  >
                    <FormLabel htmlFor="password">SENHA</FormLabel>
                    <Forms.StylishInput
                      {...field}
                      id="password"
                      type="password"
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex flexDirection="column" mt="2">
                <Link href="/cidadao/recuperar_senha">
                  <a>Esqueci minha senha</a>
                </Link>

                {/* habilitar depois da validaçao dos dados*/}
                <Forms.Button
                  isDisabled={isDisabled}
                  mt={4}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Entrar
                </Forms.Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Forms>
  );
}
