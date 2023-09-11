import React, { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import AddMovie from "./AddMovie";

//react conditional rendering
function App(){

    const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
    const [movies, setMovies] = useState([])

    function openAddMovie(){
        setIsAddMovieOpen(true)
    }

    function closeAddMovie(){
        setIsAddMovieOpen(false)
    }

    function storeMovie(movie){
        
        setMovies((prevMovie) =>{
            const newMovies = [...prevMovie, movie]
            let myObjMovie_serialized = JSON.stringify({newMovies})
            localStorage.setItem("movies", myObjMovie_serialized)
            return newMovies
        })
        let myObjMovie_deserialized = JSON.parse(localStorage.getItem("movies"))

    }
console.log(movies)

    return (
        <div>
            <Header onOpenAddMovie = {openAddMovie}/>
            {isAddMovieOpen ? <AddMovie onCloseAddMovie = {closeAddMovie} onStoreMovie = {storeMovie}/> : null}
            {movies.map((movie, index) =>{
                return(
                    <Card key={index} id={index} image={movie.image} name={movie.name} description={movie.description} />                           
                    )})}
            <Footer />
        </div>
    )
}



export default App;






