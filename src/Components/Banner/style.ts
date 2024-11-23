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

    > img {
      object-fit: cover;
      width: 300px;
    }
  }

  .containerText {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;
    height: 30%;

    h1 {
      width: 100%;
    }
    p {
      font-weight: bold;
    }
  }

  @media (max-width: 1000px) {
    background-image: none;
  }
`;
