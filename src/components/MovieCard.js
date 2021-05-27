import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import '../App.css'
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie: {title, description, posterURL, rating}}) => {

    return (
        <div className='movieCard'>            
            <Card style={{ width: '16rem'}}>
                <Card.Img style={{width:'15.7rem', margin:'0.5%'}} variant="top" src={posterURL} />
                <Card.Body>
                    <Card.Title className='cardTitle'>{title}</Card.Title>
                    <Card.Text className='desc'>
                    {description}
                    </Card.Text>
                    <StarRatingComponent 
                        // name="rate2" 
                        // editing={false}
                        // renderStarIcon={() => <span></span>}
                        // starCount={5}
                        value={rating}
                    />
                </Card.Body>
            </Card>
        </div>
    )
}

export default MovieCard
