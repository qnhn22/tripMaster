import React from 'react'
import Blog from './Blog'
import './Feed.css'

function Feed() {
    return (
        <section>
            <Blog
                title={'Beauty in Carlisle'}
                image={'https://source.unsplash.com/600x400/?travel'}
                description={"No matter the season, you will find the best things to do in Carlisle, Pennsylvania will keep you entertained. Located in Cumberland County, Pennsylvania, Carlisle is a borough and the county's seat."}
            />
            <Blog
                title={'Beauty in Carlisle'}
                image={'https://source.unsplash.com/600x400/?travel'}
                description={"No matter the season, you will find the best things to do in Carlisle, Pennsylvania will keep you entertained. Located in Cumberland County, Pennsylvania, Carlisle is a borough and the county's seat."}
            />
            <Blog
                title={'Beauty in Carlisle'}
                image={'https://source.unsplash.com/600x400/?travel'}
                description={"No matter the season, you will find the best things to do in Carlisle, Pennsylvania will keep you entertained. Located in Cumberland County, Pennsylvania, Carlisle is a borough and the county's seat."}
            />
        </section>

    )
}

export default Feed