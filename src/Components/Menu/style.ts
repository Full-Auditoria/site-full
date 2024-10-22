import styled from "styled-components";

export const HeaderMenu = styled.div` 
    
    div {
        position: fixed;
        height: 50px;
        top: 0;
        width: 100%;
        padding: 35px 10%;
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
    }

    a{
        text-decoration: none;
    }
    
    img{
        width:50px;
        position: relative;
    
    }

    .navbar a{
        position: relative;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        margin-left: 26px;
    }
`
