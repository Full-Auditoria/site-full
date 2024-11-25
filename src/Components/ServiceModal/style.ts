import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #f1f1f1;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #333;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    margin: 0 0 1rem;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
  }

  button {
    margin-top: 1.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #448EEF;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    color: #fff;

    &:hover {
      background-color: #448EAA;
    }
  }
`;
