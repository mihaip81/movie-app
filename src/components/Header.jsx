import React from "react";



function Header(props){

    return (
        <header style={headerStyling.headerDiv}>
            <h1 style={headerStyling.myMovieApp}>MyMovieApp</h1>
            <button style={headerStyling.addMovieButton} onClick={props.onOpenAddMovie} >Add Movie</button>
        </header>
    );
}

const headerStyling = {
    headerDiv : {
        width: "100%",
        height: "60px", 
        backgroundColor : "red", 
        display: "flex",
        alignItems : "center",
        justifyContent : "space-between"
    },

    myMovieApp : {
        paddingLeft : "20px", 
        fontWeight: "400"
    },

    addMovieButton : {
        width: "160px", 
        height: "40px", 
        backgroundColor: "blue",
        marginRight : "20px"
    }
}

export default Header;