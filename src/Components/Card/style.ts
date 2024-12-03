import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  width: 180px;
  height: 180px;
  background-color: #d9d9d9;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 6px 7px 5px -4px rgba(0, 0, 0, 0.49);
  @media (max-width: 768px) {
    position: sticky;
    top: 20px;
  }
  p {
    font-size: 14px;
    text-align: center;
    font-weight: bold;
    color: #010b40;
    padding: 10px;
  }
`;
