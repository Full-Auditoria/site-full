import React from 'react';
import logo from "./../../assets/logo.png"
import { ContainerBanner, ContainerImgBanner} from './style';
import backgroundImg from "./../../assets/background-img.png"
import Button from '../Button';

const Banner = () => {
    return (
        <>
        <ContainerImgBanner>
            <img src={backgroundImg} alt="backgroundFull" />
        </ContainerImgBanner>
        <ContainerBanner>
            <div>
                <img src={logo} alt="logoFull"  />
                <span className='auditorias'><h2>Auditorias Inteligentes</h2>
                <span className='resultados'><br />Mais de 200 milhões recuperados.<br/> 
                    R$ 500.000.000,00 em contratos.<br /></span>
                    <br /><span className='solucao'>Full 2.0 a solução de incremento de receitas para seu município.</span>
                </span>
                <br /><Button text={"Escritório Virtual"}/>
            </div>
        </ContainerBanner>
        
        </>
    );
}

export default Banner;