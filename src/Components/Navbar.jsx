import React from 'react';
import logo from '../assets/Images1/Plantbased2Logo.jpg';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="Plantbased-logo">
                <img src={logo} alt="Plantbased Meals Logo" />
            </div>
            <div className="contact-info">
                <h1>Call Now: +2348064095522</h1>
            </div>
        </nav>
    );
}
