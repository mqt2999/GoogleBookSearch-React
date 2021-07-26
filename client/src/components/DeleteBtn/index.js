import React from "react"
import axios from "axios"
function DeleteBtn(props){

    function Delete (id) {
        axios.delete("/api/books/" + id)
        .then(window.location.reload())
        .catch(err => {
            console.log(err)
        })
    }
    
    
    return(  <a onClick={() => {Delete(props.id)}}> <button > Delete </button> </a>)
}

export default DeleteBtn;