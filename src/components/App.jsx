import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import AddMovie from "./AddMovie";
import ModifyMovie from "./ModifyMovie";

//react conditional rendering
function App(){

    const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
    const [movies, setMovies] = useState([])
    const [isModifyMovieOpen, setIsModifyMovieOpen] = useState(false);
    

    function openAddMovie(){
        setIsAddMovieOpen(true)
    }

    function closeAddMovie(){
        setIsAddMovieOpen(false)
    }

    function openModifyMovie(){
        setIsModifyMovieOpen(true)
    }

    function closeModifyMovie(){
        setIsModifyMovieOpen(false)
    }

    function storeMovie(movie){
        
        setMovies((prevMovie) =>{
            const newMovies = [...prevMovie, movie]
            let myObjMovie_serialized = JSON.stringify(newMovies)
            localStorage.setItem("movies", myObjMovie_serialized)

            return newMovies
        })


        let myObjMovie_deserialized = JSON.parse(localStorage.getItem("movies"))
    }

    

    //FIRST TRY
    // let myObjMovie_deserialized = JSON.parse(localStorage.getItem("movies"))
    // setMovies((prevMovie) =>{
    //     const endMovies = [...prevMovie, JSON.parse(localStorage.getItem("movies"))]
    //     return endMovies
    // })

    // SECOND TRY
    useEffect(() =>{
        const movieData = JSON.parse(localStorage.getItem("movies"))
        if(movieData){
            setMovies(movieData)
        }
    }, [])

    return (
        <div>
            <Header onOpenAddMovie = {openAddMovie}/>
            {isAddMovieOpen ? <AddMovie onCloseAddMovie = {closeAddMovie} onStoreMovie = {storeMovie}/> : null}
            {isModifyMovieOpen ? <ModifyMovie onCloseModifyMovie = {closeModifyMovie}/> : null}
            {movies.map((movie, index) =>{
                return(
                    <Card key={index} id={index} image={movie.image} name={movie.name} description={movie.description} onOpenModifyMovie={openModifyMovie}/>                           
                    )})}
            <Footer />
        </div>
    )
}



export default App;






