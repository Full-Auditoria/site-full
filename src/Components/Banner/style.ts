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

  > div {
    width: 500px;
    box-sizing: border-box;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
      }

    > img {
      object-fit: cover;
      width: 300px;

      @media (max-width: 768px) {
        width: 200px;
      }

      @media (max-width: 480px) {
        width: 120px;
      }

      @media (max-width: 420px) {
        width: 100px;
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
    >div{
        @media (max-width: 768px) {
        width: 100%;
        max-width: 300px;
      }

    }

    h1 {
      width: 100%;
      font-size: 2rem;

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

    p {
      font-weight: bold;
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.9rem;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
        justify-content: center;
        >div{
            width: 100%;
            max-width: 320px;

        }
      }

      @media (max-width: 420px) {
        font-size: 0.7rem;
      }
    }
  }

  @media (max-width: 1000px) {
    background-image: none;

  }

  @media (max-width: 420px) {
    padding: 20px; 
    flex-direction: column;
  }
`;
