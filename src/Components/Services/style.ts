import styled from "styled-components";
import img from "../../assets/fundolistras.png";

export const Container = styled.div`
  background-color: #f1f1f1;
  background-image: url(${img});

  .content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    padding: 20px;
    color: #010b40;
    flex-wrap: wrap;
    .containerLeft {
      width: 40%;
    }
    > div {
      width: 50%;
      min-width: 300px;
      @media (max-width: 1000px) {
        width: 100%;
      }
    }
    h1 {
      font-size: 2.2rem;
    }
    p {
      margin: 10px 0;
      font-size: 1.2rem;
    }
    @media (max-width: 768px) {
      padding: 0 5px;
      margin: 10px 0;
    }
  }
  .containerRight {
    > div {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      width: 100%;
      p {
        font-size: 0.9rem;
        width: 95%;
      }
      justify-content: space-between;
      @media (max-width: 1000px) {
        justify-content: flex-start;
      }
      @media (max-width: 768px) {
        justify-content: center;
        align-items: center;
        padding: 10px;

        > div {
          width: 100%;
        }
      }
    }
  }
`;
