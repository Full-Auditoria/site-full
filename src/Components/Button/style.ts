import styled from "styled-components"

export const ContainerButton = styled.div`
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--mediun-blue);
        color: #FFFFFF;
        border:none;
        cursor: pointer;
        transition: ease-in-out 250ms;
        
    }
    
    button:hover{
            background-color: white;
            color: var(--mediun-blue);
        }
    
`