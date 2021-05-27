import './App.css';
import React, {useState} from 'react'
import MovieList from './components/MovieList'
import {List} from './data'
import Header from './components/Header'
import Footer from './components/Footer'
import Add from './components/Add'

function App() {

    const[movies, setMovie] = useState(List)
    const[textsearch, setTextSearch] = useState("")

    const add = (x) => {
        setMovie ([
            ...movies, x 
        ])
    }


    return (
    <div className="App">
        <Header setTextSearch={setTextSearch} setMovie={setMovie}/>
        <MovieList movies={movies} textsearch={textsearch}/>
        <Add add={(x) => add(x)} setMovie={setMovie} movies={movies}/>
        <Footer />
    </div>
    );
}

export default App;
