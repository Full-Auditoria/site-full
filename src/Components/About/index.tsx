import { Container } from "./style";

export default function About() {
  return (
    <Container>
      <div className="content" id="about">
        <div className="containerLeft">
          <div>
            <h1>Quem Somos</h1>
            <p>
              Assessoria completa e expertise para garantir o compilance
              tributário eficiente para sua empresa.
            </p>
          </div>
        </div>
        <div className="containerRight">
          <p>
            A Full nasceu no município de Mar de Espanha, no ano de 2017. Tudo
            começou quando o chefe do departamento de Dívida Ativa e Arrecadação
            percebeu a necessidade de fortalecer as finanças municipais para
            garantir o pagamento dos servidores públicos da época. Após uma
            série de auditorias no sistema municipal, identificou-se um débito
            de três milhões e meio de reais inscritos na dívida ativa municipal.
            A partir desse resultado extraordinário, a Full se especializou no
            desenvolvimento de sistemas e softwares para agilizar essas
            recuperações. Hoje, contamos com uma equipe altamente qualificada
            que não apenas lida com a dívida ativa, mas também realiza outras
            recuperações, como ISSQN, previdenciário, IRPJ, recadastramento
            imobiliário e auditorias nos cadastros municipais, assimcontribuindo
            para o aumento exponencial de todas as receitas do município.
          </p>
        </div>
      </div>
    </Container>
  );
}
