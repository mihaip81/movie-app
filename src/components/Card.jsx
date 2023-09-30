import React, { useState, useEffect } from "react";

function Card(props) {
  function handleClick() {
    props.onDeleteMovie(props.movie.id);
  }

  function handleChange(event) {
    const { value, id } = event.target;
    props.onModifyDropdown(id, value);
  }

  //DE CE AICI A TREBUIT NEAPARAT SA APELEZ FUNCTIA IN CARD, SI NU AM PUTUT SA O IAU DIRECT DIN APP?!?!!^^^^^

  return (
    <div style={CardStyling.card}>
      <div>
        <p style={CardStyling.title}>{props.movie.name}</p>
        <p style={CardStyling.description}>{props.movie.description}</p>
      </div>
      <div style={CardStyling.actionsContainer}>
        <select
          style={CardStyling.dropDown}
          value={props.movie.status}
          name="watch"
          id={props.movie.id}
          onChange={handleChange}
        >
          <option value="TO WATCH">To watch</option>
          <option value="WATCHING">Watching</option>
          <option value="WATCHED">Watched</option>
        </select>
        <button
          style={CardStyling.button}
          onClick={() => {
            props.onOpenModifyMovie(props.movie.id);
          }}
        >
          Modify
        </button>
        <button style={CardStyling.button} onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

const CardStyling = {
  card: {
    backgroundColor: "#F2A0A9",
    margin: "10px",
    borderRadius: "5px",
    maxWidth: "350px",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
  },

  img: {},

  button: {
    backgroundColor: "#5d252a",
    color: "white",
    padding: "8px 24px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 15px",
    margin: "0 4px",
    borderRadius: "5px",
  },

  dropDown: {
    backgroundColor: "#5d252a",
    color: "white",
    padding: "8px 40px 8px 24px",
    border: "none",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 2px 15px",
    margin: "0 4px",
    borderRadius: "5px",
    background:
      "url(https://upload.wikimedia.org/wikipedia/commons/9/9d/Caret_down_font_awesome_whitevariation.svg) no-repeat right 1.5em center / 1.5em, #5d252a",
    appearance: "none",
  },

  title: {
    fontSize: "32px",
    fontWeight: "600",
    padding: "16px 24px",
  },

  description: {
    padding: "8px 24px",
  },

  actionsContainer: {
    padding: "16px 16px",
  },
};

export default Card;
