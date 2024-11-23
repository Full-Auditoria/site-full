import { Container } from "./style";
import { Service, servicesElements } from "../Mock";
import Card from "../Card";

export default function Services() {
  return (
    <Container>
      <div className="content" id="services">
        <div className="containerLeft">
          <div>
            <h1>Nossos Serviços</h1>
            <p>
              Assessoria Jurídica e Tributária para o setor público e privado.
            </p>
          </div>
        </div>
        <div className="containerRight">
          <div>
            {servicesElements.map((item: Service) => (
              <Card service={item}/>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
