import styled from "styled-components";
import backgroundImg from './../../assets/background-img.png';

export const ContainerImgBanner = styled.div`
    position: absolute;
    z-index: -999;
    left: 60px;
    translate: 60px;

    img{
        width: 900px;

    }
`

export const ContainerBanner = styled.div`
    div{
        align-items: center;
        width: 100%;
        max-width: 1200px;
        height: 100vh;
        top: 266px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center; 
        justify-content: center;
        text-align: center;
        margin: 0 auto;
      
        div{
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 50vh;
        }
        
        p{
            width: 100%;

        }
    }
    img{
        width: 245px;
        height: 222px;
        top: 266px;
        left: 600px;
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


`