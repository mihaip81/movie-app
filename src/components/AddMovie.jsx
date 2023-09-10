import React from "react";

function AddMovie(props){
    return(
    <div className="modal" id="modal" style={AddMovieStyling.modal}>
        <div style={AddMovieStyling.modalContainer}>
            <div className="modalHeader" style={AddMovieStyling.modalHeader}>
                <div className="title" style={AddMovieStyling.title}>Add a new movie</div>
                <button className="closeButton" style={AddMovieStyling.closeButton} onClick={props.onCloseAddMovie}>&times;</button>
            </div>
            <div className="modalBody" style={AddMovieStyling.modalBody}>
                <label htmlFor="" style={AddMovieStyling.label}>
                    Upload Movie Photo
                    <input type="file" id="photoFile" placeholder="Upload photo" style={AddMovieStyling.file}/>
                </label>
                <label htmlFor="" style={AddMovieStyling.label}>
                    Name
                    <input type="text" id="name" placeholder="Ex: John Wick 4" style={AddMovieStyling.input}/>
                </label>
                <label htmlFor="" style={AddMovieStyling.label}>
                    Description
                    <textarea name="" id="description" cols="30" rows="10" placeholder="Type here a description..." style={AddMovieStyling.input}></textarea>
                </label>
                <button style={AddMovieStyling.submitNewMovie} onClick={props.onStoreMovie}>Upload movie</button>
            </div>
        </div>
    </div>
    )
}
//absolute, 0 px, 100vh, 100vw
const AddMovieStyling = {
    modal : {
        display : "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        zIndex: "10",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "100vw",
        height: "100vh",
        top: "0"
    },

    modalContainer: {
        padding: "25px",
        backgroundColor: "white",
    },

    modalHeader: {
        display: "flex",
        padding: "10px 15px",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid black"
    },

    title: {
        fontSize: "20px",
        fontWeight: "bold"
    },

    closeButton: {
        cursor: "pointer",
        border: "none",
        outline: "none",
        background: "none",
        fontSize: "30px",
        fontWeight: "bold"
    },
    
    modalBody: {
        padding: "10px 15px",
        flexDirection: "column",
        display: "flex",
    },

    overlay: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },

    label: {
        display: "flex",
        flexDirection: "column",
        padding: "5px"
    },

    input: {
        padding: "15px",
        margin: "10px 0px"
    },

    file: {
        margin: "10px 0px"
    },

    submitNewMovie: {
        width: "100%",
        height: "40px",
        cursor: "pointer",

    }
}

export default AddMovie