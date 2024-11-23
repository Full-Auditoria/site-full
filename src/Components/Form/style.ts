import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    min-height: 350px;
    background-color: rgba(217, 217, 217);
    border-radius: 10px;
    padding: 20px;
    >form{
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 10px;
        input, textarea, select{
            width: 100%;
            min-width: 300px;
            border-radius: 4px;
            border: none;
            padding: 10px;
            
        }
        input, select{
            height: 40px;
        }
        textarea{
            height: 100px;
        }
    }
    .footerForm{
        display: flex;
        width: 100%;
        justify-content: space-between;
        .containerCheckbox{
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: italic;
            color: rgba(0,0,0,0.3);
            gap: 10px;
          >input{width: 20px;
            height: 20px;
            min-width: 20px;
        }
        }
        button{
            width: 100px;
            height: 40px;
            border-radius: 10px;
            border: none;
            box-shadow: 6px 7px 5px -4px rgba(0,0,0,0.49);
        }
    }
`