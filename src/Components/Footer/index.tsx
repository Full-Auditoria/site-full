import { Container } from "./style";
import phone from "../../assets/iconPhone.svg";
import email from "../../assets/iconEmail.svg";
import build from "../../assets/iconInterprise.svg";
import insta from "../../assets/iconInsta.svg";
import linkedin from "../../assets/iconLinkedin.svg";

export default function Footer() {
  return (
    <Container>
      <div className="content" id="contact">
        <div className="containerLeft">
          <div>
            <h1>Entre em Contato</h1>
            <p>
              Acesse nossas redes para conhecer mais da Full 2.0 Entre em
              contato via telefone ou email solicite seu orçamento, treinamento
              in loco e oportunidades de novas parcerias.
            </p>
            <ul>
              <li>
                <img src={email} />
                administrativo@fullauditoria20.com
              </li>
              <li>
                <img src={phone} />
                (32) 98509-9808
              </li>
              <li>
                <img src={build} />
                Rua Padre José de Anchieta 639, Jd Guanabara Mar de Espanha MG.
              </li>
            </ul>
            <div className="socialMedia">
              <a href="https://www.linkedin.com/company/full-2-0-auditorias-inteligentes">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/full_auditoriasinteligentes">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="containerRight">
          <div></div>
        </div>
      </div>
    </Container>
  );
}
