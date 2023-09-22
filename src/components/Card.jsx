import React, { useState, useEffect } from "react";

function Card(props){

    function handleClick(){
        props.onDeleteMovie(props.id);
    }
        //DE CE AICI A TREBUIT NEAPARAT SA APELEZ FUNCTIA IN CARD, SI NU AM PUTUT SA O IAU DIRECT DIN APP?!?!!^^^^^


    return(
        <div style={CardStyling.div}>
            <p>{props.name}</p>
            <img src= {props.image} alt="" />
            <p>{props.description}</p>
            <button onClick={props.onOpenModifyMovie}>Modify</button>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

const CardStyling = {
    div : {
        backgroundColor: "brown",
        width: "340px",
        height: "400px",
        margin: "10px"
    },

    title : {
        fontSize: "50px"
    },

    img : {

    },

    description : {

    },

    buttonModify : {

    },

    buttonDelete : {
        
    }
}

export default Card;