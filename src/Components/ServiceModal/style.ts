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
  max-width: 850px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #010B40;
  max-height: 600px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  h2 {
    margin: 0 0 1rem;
    font-size: 2rem;

  }
  img{
    height: 100%;
    max-height: 400px;
  }

  p {
    font-size: 1.3rem;
    line-height: 1.9;
    color: #010B40;
  }
  .textElement{
    display: flex ;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    max-height: 400px;
    p{
      font-size: 16px;
    }

  }

  button {
    margin-top: 1.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #448EEF;
    border: 1px solid #ccc;
    border-radius:20px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    text-transform: uppercase;
    color: #fff;
    height: 80px;
    font-weight: bold;

    &:hover {
      background-color: #448EAA;
    }
  }
`;
