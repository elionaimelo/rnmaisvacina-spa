import { Footer } from "./footer";
import Image from "next/image";

import sus from "src/assets/images/sus.svg";
import lais from "src/assets/images/lais.svg";
import ufrn from "src/assets/images/ufrn.svg";
import rn from "src/assets/images/rn.svg";

function index() {
  return (
    <Footer>
      <h5>Realização</h5>
      <div className="footer-separator"></div>
      <section className="footer-imgs">
        <span className="footer-img">
          <Image unsized src={sus} alt="" />
        </span>
        <span className="footer-img">
          <Image unsized src={rn} alt="" />
        </span>
        <span className="footer-img">
          <Image unsized src={ufrn} alt="" />
        </span>
        <Image unsized src={lais} alt="" />
        <span className="footer-img">
          <Image unsized src={sus} alt="" />
        </span>
        <span className="footer-img">
          <Image unsized src={sus} alt="" />
        </span>
        <span className="footer-img">
          <Image unsized src={sus} alt="" />
        </span>
      </section>
      <span>
        2021 © Laboratório de Inovação Tecnológica em Saúde - UFRN. Todos os
        direitos reservados.
      </span>
      <span className="footer-code">j2hv34j32h4v</span>
    </Footer>
  );
}

export default index;
