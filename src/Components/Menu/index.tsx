import React from 'react';
import {HeaderMenu} from './style.ts';
import logo from "./../../assets/logo.png"

const Menu = () => {
    return (
        <HeaderMenu>
            <div>
                <img src= {logo} alt='logo'></img>
                <nav className='navbar'>
                    <a href="/">Home</a>
                    <a href="/">Quem Somos</a>
                    <a href="/">Nossos Serviços</a>
                    <a href="/">Trabalhe conosco</a>
                    <a href="/">Entre em contato</a> 
                </nav>
            </div>
        </HeaderMenu>
    );
}

export default Menu;
