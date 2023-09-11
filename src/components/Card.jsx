import React from "react";

function Card(props){
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