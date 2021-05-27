import React, {useState} from 'react'
import {Form} from 'react-bootstrap'
import '../App.css'
import Add from './Add'
import StarRatingComponent from 'react-star-rating-component';



const Header = ({setTextSearch}) => {   


    // const add = (e) => {
    //     e.preventDefault();
    //     setMovie([
    //         ...Movies,{title: e.}
    //     ])
    // }

    const handleChange = (e) => {
        setTextSearch(e.target.value)
    }

    return (
            <header>
                <h1 className='title'>Watch it</h1>
                <Form.Control onChange={handleChange} className="searchBar" type="text" placeholder="What do you want to watch?" />
                <StarRatingComponent className='stars'/>
            </header>
    )
}

export default Header
