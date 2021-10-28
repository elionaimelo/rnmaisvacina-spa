import Link from "next/link";
import { Box, Heading, Text } from "@chakra-ui/react";

import Contatos from "src/objects/Agendamento/Contatos.json";
import "./style";
import { Content } from "./style";

export function CardContact({ municipio }) {
  const contactData = Contatos.municipios.filter((el) => el.nome === municipio);
  const phone = contactData[0].telefones;
  const email = contactData[0].emails;
  const site = contactData[0].sites;
  return (
    <Content>
      <Box p={5} bg="#ededed" color="#0e162d">
        <Heading fontSize="3xl">{municipio}</Heading>
        <section className="info">
          <Text fontSize="lg">Telefone(s):</Text>
          <ul className="info-list">
            {phone.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </section>
        <section className="info">
          <Text fontSize="lg">E-mail(s):</Text>
          <ul className="info-list">
            {email.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </section>
        <section className="info">
          <Text fontSize="lg">Site(s):</Text>
          <ul className="info-list">
            {site.map((item) => (
              <li>
                <Link href={item}>
                  <a>{item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Box>
    </Content>
  );
}
