import styled from "styled-components";
import logo from "../../assets/logofullDark.png"
export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(0, 0, 54, 0.9);
    color: #fff;
    height: 50vh;
    color: #056CF2;
    h1{
        color: #fff;
    }
    p{
        margin: 10px 0;
    }
    .content{
        width: 100%;
        max-width: 1200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        height: 100%;
        padding: 20px;
        flex-wrap: wrap;
        @media (max-width: 1000px) {
            height: auto;
        }
        >div{
            min-width: 300px;
            width: 50%;
            @media (max-width: 1000px) {
            width: 100%;
        }
        }

        @media (max-width:768px) {
            justify-content: center;
            div{
                width: 100%;
            }
        }
    }
    .containerLeft {
        height: 100%;
    > div {
        background-image: url(${logo});
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        background-size: 350px; 
        background-repeat: no-repeat; 
        background-position: center; 
        height: 100%;
    }
    
}
.containerRight{
        line-height: 20px;
        text-align: justify;
    }
`