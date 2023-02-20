import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './Blog.css'

function Blog({ title, image, description }) {
    return (
        <Card className='blog-post'>
            <Card.Img className='blog-img' src={image} variant='top' />
            <Card.Body className='blog-body'>
                <Card.Title className='blog-title'>{title}</Card.Title>
                <Card.Text className='blog-description'>{description}</Card.Text>
            </Card.Body>
            <Button className='read-more-btn' href='/blog'>Read more</Button>
        </Card>
        // <div className="blog-post">
        //     <img src={imgLink} alt=''></img>
        //     <h3>{title}</h3>
        //     <p>{description}</p>
        //     <Button className='read-more-btn' href='/blog'>Read more</Button>
        // </div>
    )
}

export default Blog