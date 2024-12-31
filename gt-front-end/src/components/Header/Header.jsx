import React, { useState } from 'react';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
    return (
        <>
            <span className="header1">
                <Logo /> <h1>Digital Store</h1>
                
                <a href="#" >Cadastre-se</a>

                <input type="text" placeholder="Pesquisar produto..." />
            </span>
            
        </>
    );
}
 
export default Header;