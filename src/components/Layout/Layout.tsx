import React from 'react'
import 'normalize.css';
import './styles.css'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = (props: {children: JSX.Element | JSX.Element[]}) => {
    const {children} = props;
    
    return (
        <>
            <Header />
            <main id="main" className="main">
                <div className="layout">
                    {children}
                </div>
            </main>
            <Footer />
        </>
        
    )
}

export default Layout