import styled from "styled-components";

interface ModalFooterProps {
    disabled: boolean;
  }

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* Escurece o fundo */
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  bottom: 20px; /* Referência do bottom */
  left: 50%;
  transform: translateX(-50%);
  width: 90%; /* Proporção ajustada */
  max-width: 400px;
  height: 60%; /* Altura maior que largura */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ModalHeader = styled.h3`
  font-size: 18px;
  margin: 16px;
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto; /* Scroll para o conteúdo */
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
`;

export const ModalFooter = styled.div<ModalFooterProps>`
  text-align: right;
  padding: 16px;

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

    &:hover {
      background-color: ${(props) => (props.disabled ? "#007bff" : "#0056b3")};
    }
  }
`;
