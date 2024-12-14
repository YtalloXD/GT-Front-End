import React, { useState } from 'react';
import Logo from '../Logo/Logo.jsx';

const Header = () => {
    return (
        <>
            <Logo /> <h1>Digital Store</h1>
            
            <a href="#" >Cadastre-se</a>

            <input type="text" placeholder="Pesquisar produto..." />
        
            
        </>
    );
}
 
export default Header;