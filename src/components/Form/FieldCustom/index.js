import { Field } from "formik";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { StylishInput } from "./style";

function cpfMask(value) {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

function FieldCustom({
  label,
  name,
  values,
  errors,
  touched,
  handleChange,
  isSubmitting,
  setFieldValue,
  handleBlur,
}) {
  return (
    <Field name={name}>
      {({ field }) => (
        <FormControl isInvalid={errors.cpf && touched.cpf} mt={5}>
          <FormLabel htmlFor={name}>{label}</FormLabel>
          <StylishInput
            {...field}
            id={name}
            maxLength="14"
            value={values.cpf}
            onChange={(e) => {
              const formatted = cpfMask(values.cpf);
              setFieldValue({ name }, formatted);
              handleChange(e);
            }}
            onBlur={(e) => {
              const formatted = cpfMask(values.cpf);
              setFieldValue({ name }, formatted);
              handleBlur(e);
            }}
          />
          <FormErrorMessage>{errors.cpf}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default FieldCustom;
