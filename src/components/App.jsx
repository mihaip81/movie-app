import React, { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import AddMovie from "./AddMovie";
import ModifyMovie from "./ModifyMovie";
import axios from "axios";

//react conditional rendering
function App() {
  const [isAddMovieOpen, setIsAddMovieOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isModifyMovieOpen, setIsModifyMovieOpen] = useState(false);
  const [modifyId, setModifyId] = useState(null);

  function openAddMovie() {
    setIsAddMovieOpen(true);
  }

  function closeAddMovie() {
    setIsAddMovieOpen(false);
  }

  function openModifyMovie(id) {
    setIsModifyMovieOpen(true);
    console.log(id);
    setModifyId(id);
  }

  function closeModifyMovie() {
    setIsModifyMovieOpen(false);
  }

  function storeMovie(movie) {
    axios.post(`http://localhost:8080/`, movie).then((res) => {
      console.log(res);
      getMoviesFromBackend();
    });
    // setMovies((prevMovie) => {
    //   const newMovies = [...prevMovie, movie];
    //   let myObjMovie_serialized = JSON.stringify(newMovies);
    //   localStorage.setItem("movies", myObjMovie_serialized);

    //   return newMovies;
    // });
  }

  function modifyMovie(objectMovie) {
    axios
      .patch(`http://localhost:8080/${modifyId}`, objectMovie)
      .then((res) => {
        console.log(res);
        getMoviesFromBackend();
      });

    // setMovies((prevMovie) => {
    //   const newMovies = prevMovie.findIndex((element, index) => {
    //     // return index == id;
    //     return console.log(id);
    //     // return JSON.stringify(element.id) == id;
    //     // return console.log(element); toate obiectele pe rand din array
    //     // returneaza obj obj si undefined
    //     // id ul e imputul de modify (obiectul)
    //     //index ul e index ul
    //   });
    //   let myObjMovie_serialized = JSON.stringify(newMovies);
    //   localStorage.setItem("movies", myObjMovie_serialized);
    //   // return console.log(myObjMovie_serialized) returneaza -1
    //   return newMovies;
    // });
  }

  function deleteMovie(id) {
    axios.delete(`http://localhost:8080/${id}`).then((res) => {
      console.log(res);
      getMoviesFromBackend();
    });

    // setMovies((prevMovies) => {
    //   const newMovies = prevMovies.filter((movItem, index) => {
    //     return index != id;
    //   });
    //   let myObjMovie_serialized = JSON.stringify(newMovies);
    //   localStorage.setItem("movies", myObjMovie_serialized);
    //   return newMovies;
    // });
  }

  function modifiyDropdown(id, value) {
    axios
      .patch(`http://localhost:8080/status/${id}`, { status: value })
      .then((res) => {
        console.log(res);
        getMoviesFromBackend();
      });
  }

  function getMoviesFromBackend() {
    axios.get(`http://localhost:8080/`).then((res) => {
      console.log(res.data);

      if (res.data) {
        setMovies(res.data);
      }
    });
  }

  useEffect(() => {
    getMoviesFromBackend();
    // const movieData = JSON.parse(localStorage.getItem("movies"));
    // if (movieData) {
    //   setMovies(movieData);
    // }
  }, []);

  return (
    <>
      <Header onOpenAddMovie={openAddMovie} />
      {isAddMovieOpen ? (
        <AddMovie onCloseAddMovie={closeAddMovie} onStoreMovie={storeMovie} />
      ) : null}
      {isModifyMovieOpen ? (
        <ModifyMovie
          onCloseModifyMovie={closeModifyMovie}
          onModifyMovie={modifyMovie}
        />
      ) : null}
      <div style={AppStyling.container}>
        {movies.map((movie) => {
          return (
            <Card
              movie={movie}
              onOpenModifyMovie={openModifyMovie}
              onDeleteMovie={deleteMovie}
              onModifyDropdown={modifiyDropdown}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

const AppStyling = {
  container: {
    marginTop: "32px",
    display: "flex",
    textAlign: "center",
    flexWrap: "wrap",
    justifyContent: "center",
  },
};

export default App;
