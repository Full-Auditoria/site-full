import React from "react";
import { Container } from "./style";

export default function Form({ list }: any) {
  return (
    <Container>
      <form>
        <input type="text" name="" id="" placeholder="Nome" />
        <input type="text" name="" id="" placeholder="Email" />
        <input type="text" name="" id="" placeholder="Telefone" />
        <select>
          <option defaultValue="Especialização">Especialização</option>
          {list.map((element: string) => (
            <option value={element}>{element}</option>
          ))}
        </select>
        <textarea placeholder="Mensagem..."></textarea>
        <div className="footerForm">
          <div className="containerCheckbox">
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="checkbox">li e aceito os termos de uso</label>
          </div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </Container>
  );
}
