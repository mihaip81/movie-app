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


    }

    function modifyMovie(id){
        setMovies((prevMovie) =>{
            const newMovies =  prevMovie.findIndex((element,index) =>{
                // return index == id;
                return console.log(id);
                // return JSON.stringify(element.id) == id;
                // return console.log(element); toate obiectele pe rand din array
                // returneaza obj obj si undefined
                // id ul e imputul de modify (obiectul)
                //index ul e index ul
            });
            let myObjMovie_serialized = JSON.stringify(newMovies)
            localStorage.setItem("movies", myObjMovie_serialized)
            // return console.log(myObjMovie_serialized) returneaza -1
            return newMovies
        })
    }

    function deleteMovie(id){
        setMovies((prevMovies) =>{
            const newMovies =  prevMovies.filter((movItem, index) =>{
                return index != id;
            }); 
            let myObjMovie_serialized = JSON.stringify(newMovies)
            localStorage.setItem("movies", myObjMovie_serialized)
            return newMovies
        })
    }

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
            {isModifyMovieOpen ? <ModifyMovie onCloseModifyMovie = {closeModifyMovie} onModifyMovie = {modifyMovie}/> : null}
            <div style={AppStyling.container}>
            {movies.map((movie, index) =>{
                return(
                        <Card id={index} image={movie.image} name={movie.name} description={movie.description} onOpenModifyMovie={openModifyMovie} onDeleteMovie={deleteMovie}/>                     
                    )})}
            </div>                                    
            <Footer />
        </div>
    )
}

const AppStyling = {
    container: {
        backgroundColor : "green",
        display: "flex",
        textAlign: "center",
        height: "600px",
        flexWrap: "wrap"
    }
}

export default App;






