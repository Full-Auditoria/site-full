import styled from "styled-components"

export const ContainerButton = styled.div`
    button{
        width: 500px;
        height: 35px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--mediun-blue);
        color: #FFFFFF;
        border:none;
        cursor: pointer;
        transition: ease-in-out 250ms;

        &hover{
            background-color: white;
            color: var(--mediun-blue);
        }
        
    }
    
    
    
`