import { useState } from "react";
import Link from "next/link";

//import da lib de interface e form (chakra, formik)
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
  Container,
  Box,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import FieldCustom from "../Form/FieldCustom";

function FormLogin() {
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
    <Container maxW="container.xl" my="10">
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
            <Form className="agendamento-form">
              <FieldCustom
                label="CPF"
                name="cpf"
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
              <FieldCustom
                label="Senha"
                name="password"
                values={values}
                errors={errors}
                touched={touched}
                handleChange={handleChange}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                handleBlur={handleBlur}
              />
              {/* <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.password && touched.password}
                    mt="3"
                  >
                    <FormLabel htmlFor="password">SENHA</FormLabel>
                    <Input {...field} id="password" type="password" />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field> */}
              <Flex flexDirection="column" mt="2">
                <Link href="/recuperar_senha">
                  <a className="forgot-password">Esqueci minha senha</a>
                </Link>
                {/* habilitar depois da validaçao dos dados*/}
                <Button
                  isDisabled={isDisabled}
                  mt={4}
                  isLoading={isSubmitting}
                  type="submit"
                  className="form-button"
                >
                  Entrar
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
}

export default FormLogin;
