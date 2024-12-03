import { Container } from "./style";
import { specialists } from "../Mock";
import Form from "../Form";

export default function Workus() {
  return (
    <Container>
      <div className="content" id="workus">
        <div className="containerLeft">
          <div>
            <h1>Trabalhe Conosco</h1>
            <p>
              Advogado, contador, especialista da área de tecnologia da
              informação, consultor de vendas, seja um parceiro do Grupo Full
              Assossiados na sua cidade.
            </p>
          </div>
        </div>
        <div className="containerRight">
          <Form list={specialists} />
        </div>
      </div>
    </Container>
  );
}
