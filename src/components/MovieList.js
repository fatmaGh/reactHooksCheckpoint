import React from 'react'
import MovieCard from './MovieCard'
import '../App.css'

const MovieList = ({movies,textsearch}) => {
    return (
        <div className="movieList">
            {movies.filter(el=>el.title.toLowerCase().includes(textsearch.toLowerCase())).map((movie) => (
            
                <MovieCard movie={movie}/>

            ))}

        </div>
    )
}

export default MovieList
