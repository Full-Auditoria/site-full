import styled from "styled-components";

export const Banner = styled.div` 
    
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        position: fixed;
        height: 50px;
        width: 100%;
        padding: 35px 10%;
        background: transparent;
        margin-left: -4px;
    }

    a {
        text-decoration: none;
        transition: ease-in-out 250ms;
    }
    
    img {
        width:50px;
        position: relative;
    }

    .button{
        padding: 10px;
        background-color: var(--mediun-blue);
        width: 84px;
        height: 30px;
        font-family: var(--font-family);
        font-size: 12px;
        border-radius: 10px;
        transition: ease-in-out 250ms;

    }

    .button:hover{
        background-color: #fff;
        color: var(--mediun-blue);
        font-weight: 700;

    }
    
    .navbar a{
        position: relative;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        margin-left: 26px;

    }

    .navbar a:hover{
        color: var(--mediun-blue);
    
    }

    .mobile-menu-icon{
        display: none;
    }

    .menu-mobile{
        display: none;
        
    }

`