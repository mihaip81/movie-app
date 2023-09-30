import React from "react";

function Header(props) {
  return (
    <header style={headerStyling.headerDiv}>
      <h1 style={headerStyling.myMovieApp}>MyMovieApp</h1>
      <button
        style={headerStyling.addMovieButton}
        onClick={props.onOpenAddMovie}
      >
        Add Movie
      </button>
    </header>
  );
}

const headerStyling = {
  headerDiv: {
    width: "100%",
    height: "60px",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },

  myMovieApp: {
    paddingLeft: "20px",
    fontWeight: "400",
  },

  addMovieButton: {
    textDecoration: "none",
    padding: "8px 32px",
    backgroundColor: "#DC1E31",
    marginRight: "20px",
    color: "white",
    border: "none",
  },
};

export default Header;

// <!-- HTML !-->
// <button class="button-1" role="button">Button 1</button>

// /* CSS */
// .button-1 {
//   background-color: #EA4C89;
//   border-radius: 8px;
//   border-style: none;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   display: inline-block;
//   font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
//   font-size: 14px;
//   font-weight: 500;
//   height: 40px;
//   line-height: 20px;
//   list-style: none;
//   margin: 0;
//   outline: none;
//   padding: 10px 16px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   transition: color 100ms;
//   vertical-align: baseline;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
// }

// .button-1:hover,
// .button-1:focus {
//   background-color: #F082AC;
// }
