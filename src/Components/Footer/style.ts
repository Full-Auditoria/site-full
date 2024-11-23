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
        font-weight: 300;
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
        color: #f1f1f1;
        ul{
            list-style-type: none;
            display: flex;
            flex-direction: column;
            gap: 20px;
            li{
                gap: 10px;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                margin: 5px 0px;
            }
        }
    > div {
       width: 70%;
       height: 100%;
       flex-direction: column;
       justify-content: space-between;
       >p{
        line-height: 25px;
       }
    }
    .socialMedia{
        width: 100%;
        max-width: 300px;
        display: flex;
        align-items: center;
        height: 100px;
        gap: 20px;
    }
}
.containerRight{
        line-height: 20px;
        text-align: justify;
        >div{
            background-image: url(${logo});
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-size: 350px; 
            background-repeat: no-repeat; 
            background-position: center; 
            height: 100%;
            min-height: 400px;
        }
    }
`