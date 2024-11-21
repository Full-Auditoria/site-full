import styled from "styled-components";
import backgroundImg from './../../assets/background-img.png';

export const ContainerImgBanner = styled.div`
    position: absolute;
    z-index: -999;
    left: 60px;
    translate: 60px;

`

export const ContainerBanner = styled.div`
    
    div{
        width: 100%;
        height: 600px;
        max-width: 1200px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
        text-align: center;
        margin: 0 auto; 
        
    }

    img{
        width: 245px;
        height: 222px;
    }

    h2{
        font-size: 38px;
        margin: 0 10px;
    }

    .resultados{
        text-align: justify;
        font-size: 28px;
        margin-bottom: 20px;
    }

    .solucao{
        font-size: 16px;
    }

    Button{
        width: 464px;
        height: 64px;
        border-radius: 30px;
        font-weight: 700;
        font-size: 28px;
        justify-content: center; //Alinhamento horizontal
        align-items: center; //Alinhamento vertical
    }

`