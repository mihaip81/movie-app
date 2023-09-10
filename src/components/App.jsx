import React, { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import AddMovie from "./AddMovie";
//react conditional rendering
function App(){

    const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);

    function openAddMovie(){
        setIsAddMovieOpen(true)
    }

    function closeAddMovie(){
        setIsAddMovieOpen(false)
    }

    const [values, setValues] = useState([])




    function storeMovie(){
        setValues(values.push({photo: document.getElementById("photoFile").value, name: document.getElementById("name").value, description: document.getElementById("description").value}))
        let myObjMovie_serialized = JSON.stringify(values)
        localStorage.setItem("values", myObjMovie_serialized)
        let myObjMovie_deserialized = JSON.parse(localStorage.getItem("values"))
        console.log(myObjMovie_deserialized)
    }



    return (
        <div>
            <Header onOpenAddMovie = {openAddMovie}/>
            {isAddMovieOpen ? <AddMovie onCloseAddMovie = {closeAddMovie} onStoreMovie = {storeMovie}/> : null}
            <Card />
            <Footer />
        </div>
    )
}



export default App;






