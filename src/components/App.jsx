import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import AddMovie from "./AddMovie";

function App(){
    return (
        <div>
            <Header />
            <AddMovie />
            <Card />
            <Footer />
        </div>
    )
}



export default App;