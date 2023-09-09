import React from "react";

function AddMovie(){
    return(
    <div className="modal" id="modal" style={AddMovieStyling.modal}>
        <div style={AddMovieStyling.modalContainer}>
            <div className="modalHeader" style={AddMovieStyling.modalHeader}>
                <div className="title" style={AddMovieStyling.title}>Title</div>
                <button className="closeButton" style={AddMovieStyling.closeButton}>&times;</button>
            </div>
            <div className="modalBody" style={AddMovieStyling.modalBody}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quod ea fuga voluptatem libero tempora provident magni eligendi voluptatibus, voluptas necessitatibus ut sequi reprehenderit corrupti eius debitis fugiat exercitationem quam distinctio dolore et consectetur? Veritatis tempora maxime laboriosam ut rem obcaecati dolorum suscipit saepe deserunt, corrupti adipisci sunt consequatur nihil quae ea. Qui similique vero ut porro dicta possimus tenetur aliquam in dolore repellendus, voluptas temporibus iusto, ratione quasi. Maiores beatae minus perferendis adipisci aspernatur ratione labore at rem facilis?
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
        width: "50%",
        backgroundColor: "white"
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
        fontSize: "20px",
        fontWeight: "bold"
    },
    
    modalBody: {
        padding: "10px 15px"
    },

    overlay: {
        position: "absolute",
        // opacity: "0",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(0, 0, 0, 0.5)",

    }
}

export default AddMovie