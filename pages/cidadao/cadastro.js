import Head from "next/head";
import Link from "next/link";
import {
  Box,
  FormLabel,
  FormErrorMessage,
  Select,
  FormHelperText,
  Checkbox,
  CheckboxGroup,
  HStack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";

import GrupoPrioritario from "src/objects/Cadastro/GrupoPrioritario";
import initialValuesForm from "src/objects/Cadastro/initialValuesForm";
import { Forms } from "src/components";
import {
  cpfMask,
  phoneMask,
  cepMask,
  formattedName,
} from "src/services/validation.js";

export default function Cadastro() {
  const initialValues = {
    ...initialValuesForm,
  };

  function validateData(values) {
    const errors = {};
    if (!/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(values.cpf)) {
      errors.cpf = "CPF não válido";
    }
    if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) &&
      values.email !== ""
    ) {
      errors.email = "Email não válido";
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        values.password
      ) ||
      values.password.length < 6 ||
      values.password.length > 20
    ) {
      errors.password = "Senha não válida";
    }
    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "As senhas devem ser iguais";
    }

    return errors;
  }

  return (
    <>
      <Head>
        <title>Cadastro</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Forms maxW="container.md" ms={0} py={"3rem"} px={"5rem"}>
        <Formik
          initialValues={initialValues}
          validate={(values) => validateData(values)}
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values, null, 2));
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
                  <Forms.FormControl
                    isInvalid={errors.cpf && touched.cpf}
                    isRequired
                  >
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

              <Field name="name">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.name && touched.name}
                    isRequired
                  >
                    <FormLabel htmlFor="name">NOME COMPLETO</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="dateBirth">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.dateBirth && touched.dateBirth}
                    isRequired
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

              <Field name="email">
                {({ field, form }) => (
                  <Forms.FormControl isInvalid={errors.email && touched.email}>
                    <FormLabel htmlFor="email">E-MAIL</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="phone">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.phone && touched.phone}
                    isRequired
                  >
                    <FormLabel htmlFor="phone">TELEFONE</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="profession">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.profession && touched.profession}
                    isRequired
                  >
                    <FormLabel htmlFor="profession">
                      PROFISSÃO OU TRABALHO
                    </FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="priorityGroup" type="checkbox">
                {({ field, form }) => {
                  function checkbox(label, subform, vetor) {
                    const nameField = formattedName(label);
                    return (
                      <>
                        <Checkbox
                          key={nameField}
                          value={nameField}
                          {...field}
                          id={nameField}
                          onChange={(e) => {
                            setFieldValue(nameField, e.target.checked);
                          }}
                        >
                          <FormLabel my={1}>{label}</FormLabel>
                        </Checkbox>
                        {subform && values[nameField] ? (
                          <Box className="subform-appear">
                            <FormLabel ps={5} my={2}>
                              FAVOR, INFORME SEU GRUPO PRIORITÁRIO NA LISTA
                              ABAIXO
                            </FormLabel>
                            <section className="subform">
                              <HStack>
                                <Flex flexDirection="column">
                                  {vetor.map((item) => {
                                    const nameItem = formattedName(item);
                                    return (
                                      <Checkbox
                                        key={nameItem}
                                        value={nameItem}
                                        {...field}
                                        id={nameItem}
                                        onChange={(e) => {
                                          setFieldValue(
                                            nameItem,
                                            e.target.checked
                                          );
                                        }}
                                      >
                                        <FormLabel my={1}>{item}</FormLabel>
                                      </Checkbox>
                                    );
                                  })}
                                </Flex>
                              </HStack>
                            </section>
                          </Box>
                        ) : (
                          vetor !== null && (
                            <Box className="subform-hide">
                              <FormLabel ps={5} my={2}>
                                FAVOR, INFORME SEU GRUPO PRIORITÁRIO NA LISTA
                                ABAIXO
                              </FormLabel>
                              <section className="subform">
                                <HStack>
                                  <Flex flexDirection="column">
                                    {vetor.map((item) => {
                                      const nameItem = formattedName(item);
                                      return (
                                        <Checkbox
                                          key={nameItem}
                                          value={nameItem}
                                          {...field}
                                          id={nameItem}
                                          onChange={(e) => {
                                            setFieldValue(
                                              nameItem,
                                              e.target.checked
                                            );
                                          }}
                                          isChecked={false}
                                        >
                                          <FormLabel my={1}>{item}</FormLabel>
                                        </Checkbox>
                                      );
                                    })}
                                  </Flex>
                                </HStack>
                              </section>
                            </Box>
                          )
                        )}
                      </>
                    );
                  }
                  return (
                    <Forms.FormControl
                      isInvalid={errors.agreement && touched.agreement}
                    >
                      <FormLabel>
                        VOCÊ FAZ PARTE DE ALGUM GRUPO PRIORITÁRIO? VERIFIQUE E
                        MARQUE A SEGUIR.
                      </FormLabel>
                      <CheckboxGroup>
                        <HStack>
                          <Flex flexDirection="column">
                            {GrupoPrioritario.map((el) => {
                              return checkbox(el.name, el.options, el.objects);
                            })}
                          </Flex>
                        </HStack>
                      </CheckboxGroup>
                      <FormErrorMessage>{errors.agreement}</FormErrorMessage>
                    </Forms.FormControl>
                  );
                }}
              </Field>

              <Field name="agreement" type="checkbox">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.agreement && touched.agreement}
                  >
                    <Checkbox
                      {...field}
                      id="agreement"
                      onChange={(e) =>
                        setFieldValue("agreement", e.target.checked)
                      }
                    >
                      <FormLabel>
                        DESEJO RECEBER NOTIFICAÇÃO POR E-MAIL COM OS LEMBRETES
                        PARA PRÓXIMA DOSE
                      </FormLabel>
                    </Checkbox>
                    <FormErrorMessage>{errors.agreement}</FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="cep">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.cep && touched.cep}
                    isRequired
                  >
                    <FormLabel htmlFor="cep">CEP</FormLabel>
                    <Forms.StylishInput
                      {...field}
                      id="cep"
                      maxLength="8"
                      value={values.cep}
                      onChange={(e) => {
                        const formatted = cepMask(values.cep);
                        setFieldValue("cep", formatted);
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        const formatted = cepMask(values.cep);
                        setFieldValue("cep", formatted);
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.cep}</FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="street">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.street && touched.street}
                    isRequired
                  >
                    <FormLabel htmlFor="street">RUA</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="number">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.number && touched.number}
                    isRequired
                  >
                    <FormLabel htmlFor="number">NÚMERO</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="complement">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.complement && touched.complement}
                  >
                    <FormLabel htmlFor="complement">COMPLEMENTO</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="neighborhood">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.neighborhood && touched.neighborhood}
                    isRequired
                  >
                    <FormLabel htmlFor="neighborhood">BAIRRO</FormLabel>
                    <Forms.StylishInput
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="city">
                {({ field, form }) => (
                  <Forms.FormControl
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
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="password">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.password && touched.password}
                    isRequired
                  >
                    <FormLabel htmlFor="password">SENHA</FormLabel>
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

              <Field name="declaration" type="checkbox">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.declaration && touched.declaration}
                    isRequired
                  >
                    <Checkbox
                      {...field}
                      ps={5}
                      id="declaration"
                      onChange={(e) =>
                        setFieldValue("declaration", e.target.checked)
                      }
                    >
                      <FormLabel my={1}>
                        EU DECLARO QUE AS INFORMAÇÕES SÃO VERDADEIRAS, DE ACORDO
                        COM O ART. 219 DO CÓDIGO CIVIL.
                      </FormLabel>
                    </Checkbox>
                    <FormErrorMessage>{errors.declaration}</FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="agreement" type="checkbox">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.agreement && touched.agreement}
                    isRequired
                  >
                    <Checkbox
                      {...field}
                      ps={5}
                      id="agreement"
                      onChange={(e) =>
                        setFieldValue("agreement", e.target.checked)
                      }
                    >
                      <FormLabel my={1}>
                        EU LI E CONCORDO COM A POLÍTICA DE PRIVACIDADE.
                      </FormLabel>
                    </Checkbox>
                    <FormErrorMessage>{errors.agreement}</FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>
              <Flex direction={"column"}>
                <Link href="/">
                  <a>Abrir termos e condições</a>
                </Link>

                {/* habilitar depois da validaçao dos dados*/}
                <Forms.Button
                  // isDisabled
                  mt={4}
                  isLoading={isSubmitting}
                  type="submit"
                >
                  Enviar
                </Forms.Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </Forms>
    </>
  );
}
