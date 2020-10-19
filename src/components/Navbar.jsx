import { render } from '@testing-library/react';
import React from 'react';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';
import LogoMenu from '../Assets/Menu.png';
import Logo from '../Assets/Logo.png';

function Navbar() {
    return (
        <div className="Navbar_container">
            <img src={ Logo } alt="Rick"/>
            <div className="Navbar">
                <div className="menu_item">
                    <img src={ LogoMenu } alt="Menu"/>
                    <div className="menu">
                        <Link to="/">
                            <p className="menu_Characters">Characters</p>
                        </Link>
                        <Link to="locations">
                            <p className="menu_locations">locations</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;