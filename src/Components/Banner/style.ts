import styled from "styled-components";
import img from "../../assets/background-img.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  overflow: hidden;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-image: none;
  }

  > div {
    width: 500px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      max-width: 300px;
    }

    > img {
      object-fit: cover;
      width: 300px;
      transition: transform 0.3s ease, filter 0.3s ease; /* Suavidade nas interações */
      animation: pulse 3s infinite; /* Animação contínua */

      @media (max-width: 768px) {
        width: 200px;
      }

      @media (max-width: 480px) {
        width: 120px;
      }

      @media (max-width: 420px) {
        width: 100px;
      }

      &:hover {
        transform: scale(1.05); /* Leve aumento ao passar o mouse */
        filter: brightness(1.2) blur(2px); /* Realça e aplica desfoque */
      }
    }
  }
  .containerText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    height: 30%;
    padding: 0 10px;

    > div {
      @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
      }
    }

    h1 {
      width: 100%;
      font-size: 2.4rem;

      @media (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media (max-width: 480px) {
        font-size: 1.2rem;
      }

      @media (max-width: 420px) {
        font-size: 1rem;
      }
    }

    .subtitle {
      font-size: 0.9rem;
    }

    p {
      font-weight: bold;
      font-size: 1.5rem;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
        justify-content: center;

        > div {
          width: 100%;
          max-width: 320px;
        }
      }

      @media (max-width: 420px) {
        font-size: 0.7rem;
      }
    }
  }

  @media (max-width: 420px) {
    padding: 20px;
    flex-direction: column;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.03); /* Leve ampliação no meio do ciclo */
    }
  }
  button {
    width: 460px;
    height: 50px;
    border-radius: 2rem;
    font-size: 1.4rem;
    font-weight: bold;
    box-shadow: 2px 4px 5px -3px rgba(0, 0, 0, 0.75);
  }
  button:hover {
    background-color: #021e73;
  }
`;
