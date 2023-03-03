import React from 'react'

function Header() {
    return (
        <header>
            <h1>tripMaster</h1>
            <nav>
                <ul>
                    <li><a href="/home">Explore</a></li>
                    <li><a href='/new'>New</a></li>
                    <li><a href="/destinations">Destinations</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
