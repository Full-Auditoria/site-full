import styled from "styled-components";

export const Banner = styled.div<{ menuOpen: boolean }>`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    position: fixed;
    height: 60px;
    width: 100%;
    padding: 20px 10%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  img {
    width: 50px;
    object-fit: cover;
  }

  .navbar {
    display: flex;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      text-decoration: none;
      font-size: 16px;
      color: #fff;
      font-weight: 700;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: var(--mediun-blue);
      }
    }

    .button {
      padding: 10px 15px;
      background-color: #fff;
      color: var(--main-blue);
      font-size: 14px;
      border-radius: 10px;
      font-weight: 700;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: var(--mediun-blue);
        color: #fff;
      }
    }
  }

  .mobile-menu-icon {
    display: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;

    span {
      width: 25px;
      height: 3px;
      background-color: #fff;
      border-radius: 2px;
      transition: all 0.3s ease-in-out;
    }

    &:hover span {
      background-color: var(--mediun-blue);
    }
  }

  @media (max-width: 1000px) {
    .navbar {
      display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
      position: absolute;
      top: 100%;
      right: 0%;
      flex-direction: column;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      text-align: left;
      align-items: flex-start;
    }

    .mobile-menu-icon {
      display: flex;
      justify-content: space-between;
      align-items: end;
    }
  }
`;
