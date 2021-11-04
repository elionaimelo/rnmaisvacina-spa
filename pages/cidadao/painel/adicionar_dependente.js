import Head from "next/head";
import {
  FormLabel,
  FormErrorMessage,
  Select,
  Checkbox,
  CheckboxGroup,
  HStack,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Forms } from "src/components";

import GrupoPrioritario from "src/objects/Cadastro/GrupoPrioritario";
import initialValuesForm from "src/objects/AdicionarDependente/initialValuesForm";
import {
  cpfMask,
  cepMask,
  formattedName,
  cnsMask,
} from "src/services/validation.js";

export default function AdicionarDependente() {
  const initialValues = {
    ...initialValuesForm,
  };

  function validateData(values) {
    const errors = {};
    if (!/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(values.cpf)) {
      errors.cpf = "CPF não válido";
    }

    if (values.cns.length < 18) {
      errors.cns = "CNS não válido";
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
        <title>Adicionar Dependente</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Forms maxW="container.md" ms={0} py={"3rem"} px={"5rem"}>
        <Box>
          <Heading>Cadastro de Dependente</Heading>
          <Box bg={"#E2E3E5"} p={4} borderRadius={4} my={3}>
            Os campos indicados com * são obrigatórios.
          </Box>
        </Box>
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
            <Form className="dependente-form">
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

              <Field name="cns">
                {({ field, form }) => (
                  <Forms.FormControl isInvalid={errors.cns && touched.cns}>
                    <FormLabel htmlFor="cns">CNS</FormLabel>
                    <Forms.StylishInput
                      {...field}
                      id="cns"
                      maxLength="18"
                      value={values.cns}
                      onChange={(e) => {
                        const formatted = cnsMask(values.cns);
                        setFieldValue("cns", formatted);
                        handleChange(e);
                      }}
                      onBlur={(e) => {
                        const formatted = cnsMask(values.cns);
                        setFieldValue("cns", formatted);
                        handleBlur(e);
                      }}
                    />
                    <FormErrorMessage>{errors.cns}</FormErrorMessage>
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
                          <div className="subform-appear">
                            <FormLabel ps={5} my={2}>
                              FAVOR, INFORME SEU GRUPO PRIORITÁRIO NA LISTA
                              ABAIXO
                            </FormLabel>
                            <section className="subform">
                              <HStack>
                                <Flex flexDirection="column">
                                  {vetor.map((item, index) => {
                                    const nameItem = formattedName(item);
                                    return (
                                      <Checkbox
                                        key={nameItem + index}
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
                          </div>
                        ) : (
                          vetor !== null && (
                            <div className="subform-hide">
                              <FormLabel ps={5} my={2}>
                                FAVOR, INFORME SEU GRUPO PRIORITÁRIO NA LISTA
                                ABAIXO
                              </FormLabel>
                              <section className="subform">
                                <HStack>
                                  <Flex flexDirection="column">
                                    {vetor.map((item, index) => {
                                      const nameItem = formattedName(item);
                                      return (
                                        <Checkbox
                                          key={nameItem + index}
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
                            </div>
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
                        O CIDADÃO FAZ PARTE DE ALGUM GRUPO PRIORITÁRIO?
                        VERIFIQUE E MARQUE A SEGUIR.
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

              <Field name="relationship">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.relationship && touched.relationship}
                    isRequired
                  >
                    <FormLabel htmlFor="relationship">
                      GRAU DE PARENTESCO
                    </FormLabel>
                    <Select
                      {...field}
                      placeholder="Selecione"
                      id="relationship"
                      value={values.relationship}
                      size="lg"
                    >
                      <option value="amigo">Amigo(a)</option>
                      <option value="avo">Avô/Avó</option>
                      <option value="cuidador">Cuidador(a)</option>
                      <option value="filho">Filho(a)</option>
                      <option value="irmao">Irmão(ã)</option>
                      <option value="mae">Mãe</option>
                      <option value="pai">Pai</option>
                      <option value="primo">Primo(a)</option>
                      <option value="tio">Tio(a)</option>
                      <option value="outro">Outro</option>
                    </Select>
                    <FormErrorMessage>{errors.relationship}</FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="cep">
                {({ field, form }) => (
                  <Forms.FormControl isInvalid={errors.cep && touched.cep}>
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

              <Field name="permissionLogin" type="checkbox">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={
                      errors.permissionLogin && touched.permissionLogin
                    }
                  >
                    <Checkbox
                      {...field}
                      ps={5}
                      id="permissionLogin"
                      onChange={(e) =>
                        setFieldValue("permissionLogin", e.target.checked)
                      }
                    >
                      <FormLabel my={1}>
                        PERMITIR QUE O DEPENDENTE MENOR DE IDADE FAÇA LOGIN NO
                        SISTEMA
                      </FormLabel>
                    </Checkbox>
                    <FormErrorMessage>
                      {errors.permissionLogin}
                    </FormErrorMessage>
                  </Forms.FormControl>
                )}
              </Field>

              <Field name="authorization" type="checkbox">
                {({ field, form }) => (
                  <Forms.FormControl
                    isInvalid={errors.authorization && touched.authorization}
                  >
                    <Checkbox
                      {...field}
                      ps={5}
                      id="authorization"
                      onChange={(e) =>
                        setFieldValue("authorization", e.target.checked)
                      }
                    >
                      <FormLabel my={1}>
                        AUTORIZO MEU (MINHA) DEPENDENTE A TOMAR A VACINA CONTRA
                        A COVID-19
                      </FormLabel>
                    </Checkbox>
                    <FormErrorMessage>{errors.authorization}</FormErrorMessage>
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
                Enviar
              </Forms.Button>
            </Form>
          )}
        </Formik>
      </Forms>
    </>
  );
}
