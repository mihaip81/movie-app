import React, { useState, useEffect } from "react";

function Card(props){

    // A PATRA INCERCARE
    // const [showMovie, setShowMovie] = useState();

    //     useEffect(() =>{
    //     const movieData = JSON.parse(localStorage.getItem("movies"))
    //     setShowMovie((prevValue) =>{
    //         return {...prevValue, movieData}
    //     })
    // }, [showMovie])

        // A TREIA INCERCARE
        // useEffect(() =>{
    //     const movieData = JSON.parse(localStorage.getItem("movies"))
    //     setMovies(movieData)
    // }, [movies])


    return(
        <div>
            <p>{props.name}</p>
            <img src= {props.image} alt="" />
            <p>{props.description}</p>
            <button>Modify</button>
            <button>Delete</button>
        </div>
    )
}

export default Card;