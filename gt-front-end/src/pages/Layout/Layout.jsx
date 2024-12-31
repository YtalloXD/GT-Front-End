import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import '../../index.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />

            {children} 

            <Footer />
        </>
    );
}
 
export default Layout;