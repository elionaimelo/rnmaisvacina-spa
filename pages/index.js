import Link from "next/link";
import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Flex,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import { Content } from "src/styles/home";

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
      <Header />
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
              <Field name="password">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.password && touched.password}>
                    <FormLabel htmlFor="password">SENHA</FormLabel>
                    <Input {...field} id="password" type="password" />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Flex flexDirection="column">
                <Link href="/">
                  <a className="forgot-password">Esqueci minha senha</a>
                </Link>
                {/* habilitar depois da validaçao dos dados*/}
                <Button
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
      </main>
      <Footer />
    </Content>
  );
}
