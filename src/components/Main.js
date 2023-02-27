import React from 'react'
import Feed from './Feed'
import SideBar from './SideBar'
import './Main.css'

function Main() {
    return (
        <main>
            <section className='blog-list'>
                <Feed />
            </section>
            <SideBar className='side-bar' />
        </main>
    )
}

export default Main