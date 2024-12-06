import React from 'react';
import Logo from '../Logo/logo-header.svg';
import './index.css';

const Header = () => {
    return (
        <header class="header">
            <Logo /> Digital Store

            <a href="#" >Cadastre-se</a>
        </header>
    );
}
 
export default Header;