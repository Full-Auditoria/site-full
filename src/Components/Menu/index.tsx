import React from 'react';
import {Banner} from './style.ts';
import logo from "./../../assets/logo.png"

const Menu = () => {
    return (
        <Banner>
            <div>
                <img src= {logo} alt='logo'></img>
                <nav className='navbar'>
                    <a href="/">Home</a>
                    <a href="/">Quem Somos</a>
                    <a href="/">Nossos Serviços</a>
                    <a href="/">Trabalhe conosco</a>
                    <a href="/" className='button'>Entre em Contato</a>
                </nav>
            </div>
        </Banner>
    );
}

export default Menu;
