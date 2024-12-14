import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '../index.css';

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