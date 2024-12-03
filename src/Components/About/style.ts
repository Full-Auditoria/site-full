import styled from "styled-components";
import logo from "../../assets/logofullDark.png";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: rgba(0, 0, 54, 0.9);
  color: #f1f1f1;
  height: 50vh;
  h1 {
    color: #fff;
  }
  p {
    margin: 10px 0;
  }
  @media (max-width: 768px) {
    height: auto;
  }
  .content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 20px;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
      height: auto;
      padding: 20px 0;
    }
    > div {
      min-width: 300px;
      width: 50%;
      @media (max-width: 1000px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      justify-content: center;
      div {
        width: 100%;
      }
      p {
        padding: 0 10px;
        font-size: 14px;
      }
    }
  }
  .containerLeft {
    height: 100%;
    > div {
      position: relative;
      width: 100%;
      height: 100%;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${logo});
        background-size: 350px;
        background-repeat: no-repeat;
        background-position: center;
        opacity: 0.4;
        z-index: -1;
        @media (max-width: 1000px) {
          background-image: none;
        }
      }

      display: flex;
      align-items: flex-start;
      flex-direction: column;
      z-index: 0;
    }

    @media (max-width: 768px) {
      justify-content: center;
      background-image: none;
    }
  }

  .containerRight {
    line-height: 20px;
    text-align: justify;
  }
`;
