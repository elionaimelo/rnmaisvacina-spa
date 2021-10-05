import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  FormHelperText,
  Checkbox,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Content } from "src/styles/cadastro.style";
import { Header, Footer } from "src/components";

export default function Cadastro() {
  const initialValues = {
    cpf: "",
    name: "",
    dateBirth: "",
    email: "",
    phone: "",
    profession: "",
    priorityGroup: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    password: "",
    confirmPassword: "",
    declaration: false,
    agreement: false,
  };

  function cpfMask(value) {
    return value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
  }

  function phoneMask(value) {
    // //Filter only numbers from the input
    // let cleaned = ("" + value).replace(/\D/g, "");

    // //Check if the input is of correct length
    // let match = cleaned.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);

    // if (match) {
    //   console.log(match);
    //   return "(" + match[1] + ") " + match[2] + " " + match[3] + "-" + match[4];
    // }

    return value
      .toString()
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})/, "($1) ") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{5})(\d{4})/, "$1-$2");
  }

  function validateData(values) {
    const errors = {};
    // const required = [
    //   "cpf",
    //   "name",
    //   "dateBirth",
    //   "profession",
    //   "cep",
    //   "street",
    //   "number",
    //   "neighborhood",
    //   "city",
    //   "password",
    //   "confirmPassword",
    //   "declaration",
    //   "agreement",
    // ];
    // for (let field of required) {
    //   if (!values[field]) {
    //     errors[field] = "Campo obrigatório";
    //   } else {
    if (!/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(values.cpf)) {
      errors.cpf = "CPF não válido";
    }
    //   }
    // }

    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      values.email !== ""
    ) {
      errors.email = "Email não válido";
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

    return errors;
  }
  return (
    <Content>
      <Header />
      <main>
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
                  <FormControl isInvalid={errors.cpf && touched.cpf} isRequired>
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

              <Field name="name">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.name && touched.name}
                    isRequired
                  >
                    <FormLabel htmlFor="name">NOME COMPLETO</FormLabel>
                    <Input
                      {...field}
                      id="name"
                      type="text"
                      value={values.name}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="dateBirth">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.dateBirth && touched.dateBirth}
                    isRequired
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

              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={errors.email && touched.email}>
                    <FormLabel htmlFor="email">E-MAIL</FormLabel>
                    <Input
                      {...field}
                      id="email"
                      type="text"
                      value={values.email}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="phone">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.phone && touched.phone}
                    isRequired
                  >
                    <FormLabel htmlFor="phone">TELEFONE</FormLabel>
                    <Input
                      {...field}
                      id="phone"
                      maxLength="11"
                      value={values.phone}
                      onChange={(e) => {
                        const formatted = phoneMask(values.phone);
                        setFieldValue("phone", formatted);
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        const formatted = phoneMask(values.phone);
                        setFieldValue("phone", formatted);
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="profession">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.profession && touched.profession}
                    isRequired
                  >
                    <FormLabel htmlFor="profession">
                      PROFISSÃO OU TRABALHO
                    </FormLabel>
                    <Input
                      {...field}
                      id="profession"
                      type="text"
                      value={values.profession}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.profession}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              {/* radio checks, cep */}

              <Field name="street">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.street && touched.street}
                    isRequired
                  >
                    <FormLabel htmlFor="street">RUA</FormLabel>
                    <Input
                      {...field}
                      id="street"
                      type="text"
                      value={values.street}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.street}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="number">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.number && touched.number}
                    isRequired
                  >
                    <FormLabel htmlFor="number">NÚMERO</FormLabel>
                    <Input
                      {...field}
                      id="number"
                      type="number"
                      value={values.number}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.number}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="complement">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.complement && touched.complement}
                  >
                    <FormLabel htmlFor="complement">COMPLEMENTO</FormLabel>
                    <Input
                      {...field}
                      id="complement"
                      type="text"
                      value={values.complement}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.complement}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="neighborhood">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.neighborhood && touched.neighborhood}
                    isRequired
                  >
                    <FormLabel htmlFor="neighborhood">BAIRRO</FormLabel>
                    <Input
                      {...field}
                      id="neighborhood"
                      type="text"
                      value={values.neighborhood}
                      onChange={(e) => {
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.neighborhood}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="city">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.city && touched.city}
                    isRequired
                  >
                    <FormLabel htmlFor="city">MUNICÍPIO</FormLabel>
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

              <Field name="password">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.password && touched.password}
                    isRequired
                  >
                    <FormLabel htmlFor="password">SENHA</FormLabel>
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

              <Field name="declaration" type="checkbox">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.declaration && touched.declaration}
                    isRequired
                  >
                    <Checkbox
                      {...field}
                      id="declaration"
                      onChange={(e) =>
                        setFieldValue("declaration", e.target.checked)
                      }
                    >
                      EU DECLARO QUE AS INFORMAÇÕES SÃO VERDADEIRAS, DE ACORDO
                      COM O ART. 219 DO CÓDIGO CIVIL.
                    </Checkbox>
                    <FormErrorMessage>{errors.declaration}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>

              <Field name="agreement" type="checkbox">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={errors.agreement && touched.agreement}
                    isRequired
                  >
                    <Checkbox
                      {...field}
                      id="agreement"
                      onChange={(e) =>
                        setFieldValue("agreement", e.target.checked)
                      }
                    >
                      EU LI E CONCORDO COM A POLÍTICA DE PRIVACIDADE.
                    </Checkbox>
                    <FormErrorMessage>{errors.agreement}</FormErrorMessage>
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
      <Footer />
    </Content>
  );
}
