import { Container } from "./style";
import logo from "../../assets/logo.png";
import Button from "../Button";

export default function Banner() {
  return (
    <Container>
      <div id="home">
        <img src={logo} alt="" />
      </div>
      <div className="containerText">
        <h1>Auditorias Inteligentes</h1>
        <div>
          <p>Mais de 200 milhões recuperados. </p>
          <p>R$ 500.000.000,00 em contratos.</p>
        </div>
        <p>Full 2.0 a solução de incremento de receitas para seu município.</p>
      </div>
      <Button text={"Escritório Virtual"} url={"https://fullauditoria20.com/"}/>
    </Container>
  );
}
