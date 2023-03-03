import React from 'react'

function Blog({ title, image, description }) {
    return (
        <div className='blog-post'>
            <img className='blog-img' src={image} alt='' />
            <h3 className='blog-title'>{title}</h3>
            <p className='blog-description'>{description}</p>
            <a href='/blog'>Read more</a>
        </div>
    )
}

export default Blog