import React from 'react'
import './styles.css'
import { Link } from 'gatsby'
import Navigation from '../Navigation/Navigation'

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-wrapper">
                <Link className="header__logo-link" to="/">
                    <img className='header__logo' src="/images/kairos_logo.png" />
                </Link>
            </div>
            <Navigation />
        </header>
        
    )
}

export default Header