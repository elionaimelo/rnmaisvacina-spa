import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import Link from "next/link";
import Footer from "../src/components/Footer";
import { Content } from "../src/styles";

export default function Home() {
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
    return errors;
  }
  return (
    <Content>
      <header>
        <Box className="header-top" bg="#fff" w="100%" color="#00B3F3">
          <h1>RN + VACINA</h1>
        </Box>
        <Box
          className="header-bottom"
          bg="#00B3F3"
          w="100%"
          p={4}
          color="#fff"
          h="15vh"
        >
          <h1>Bem-vindo ao RN + Vacina Cidadão,</h1>
          <span>
            Veja suas vacinas, detalhes da aplicação e saiba quando deverá tomar
            as próximas doses.
          </span>
        </Box>
      </header>
      <main>
        {" "}
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
              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.password && touched.password}>
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <Input {...field} id="password" type="password" />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex flexDirection="column">
                <Link href="/">
                  <a>Esqueci minha senha</a>
                </Link>
                <Button mt={4} isLoading={isSubmitting} type="submit">
                  Enviar
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </main>
      <Footer />
    </Content>
  );
}
