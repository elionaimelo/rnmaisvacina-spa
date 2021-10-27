import { Text } from "@chakra-ui/react";

const LangStrings = {
  pt_br: {
    TITLE: "Certificado",
    DESCRIPTION(name, cpf, cns) {
      return (
        <Text>
          Certificamos que,{" "}
          <Text as="span" fontWeight={600}>
            {name}
          </Text>
          , CPF{" "}
          <Text as="span" fontWeight={600}>
            {cpf}
          </Text>
          , CNS{" "}
          <Text as="span" fontWeight={600}>
            {cns}
          </Text>
          , teve os seguintes registros de vacinação inseridos na plataforma RN
          + Vacina Cidadão:
        </Text>
      );
    },
    MANUFACTURER: "Vacina:",
    PLACE: "Unidade de Saúde:",
    DATE: "Data da Aplicação:",
    DOSE: "Dose Aplicada:",
    VERIFY:
      "Escaneie e consulte de maneira fácil e rápida a autenticidade do certificado.",
    AUTHKEY: "Chave de Autenticação",
    ISSUE: "Emitido em",
    VISIT: "Consultar autenticidade do certificado em:",
  },
  en_us: {
    TITLE: "COVID-19 Vaccination Certificate",
    DESCRIPTION(name, cpf, cns) {
      return (
        <Text>
          This is to certify that{" "}
          <Text as="span" fontWeight={600}>
            {name}
          </Text>
          , CPF{" "}
          <Text as="span" fontWeight={600}>
            {cpf}
          </Text>{" "}
          has on the date indicated been vaccinated against:
        </Text>
      );
    },
    MANUFACTURER: "Manufacturer:",
    PLACE: "Country:",
    DATE: "Data da Aplicação:",
    DOSE: "Dose:",
    VERIFY: "Scan this QR code to verify this certificate.",
    AUTHKEY: "Authentication Key",
    ISSUE: "Issued on",
    VISIT: "Scan QR code or visit:",
  },
  es_es: {
    TITLE: "Certificado de Vacunación COVID-19",
    DESCRIPTION(name, cpf, cns) {
      return (
        <Text>
          Certificamos que{" "}
          <Text as="span" fontWeight={600}>
            {name}
          </Text>
          , CPF{" "}
          <Text as="span" fontWeight={600}>
            {cpf}
          </Text>
          , ha sido vacunado/a en la fecha indicada contra:
        </Text>
      );
    },
    MANUFACTURER: "Fabricante:",
    PLACE: "País:",
    DATE: "Fecha:",
    DOSE: "Dosis:",
    VERIFY:
      "Para verificar la autenticidad de este certificado escanea el código QR.",
    AUTHKEY: "ID del Certificado",
    ISSUE: "Fecha de Emisión",
    VISIT: "Escanea el código QR o dirígete a:",
  },
};

export default LangStrings;
