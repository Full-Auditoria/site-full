import React from 'react';
import { ContainerButton } from './style';
interface Text {
    text:string;
}

const Button = ({text}: Text) => {
    return (
        <ContainerButton>
                <button>{text}</button>
        </ContainerButton>
    );
}

export default Button;
