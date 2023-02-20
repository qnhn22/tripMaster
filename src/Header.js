import React from 'react'
import './Header.css'

function Header() {
    return (
        <header>
            <h1>tripMaster</h1>
            <nav>
                <ul>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/destinations">Destinations</a></li>
                    <li><a href='/about'>Home</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
