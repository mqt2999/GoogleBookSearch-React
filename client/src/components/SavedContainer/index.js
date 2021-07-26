import React, {useEffect, useState} from "react"
import axios from "axios"
import SavedResults from "../SavedResults/index"
import { propTypes } from "react-bootstrap/esm/Image"
import "./styles.css"
function SavedContainer() {

    const [savedBooks, setSavedBooks] = useState([])

    useEffect ( () => {
        axios.get("/api/books")
        .then(res => {
          setSavedBooks(res.data)
        })
        .catch(err => console.error(err))
        },[])

        console.log("saved books",savedBooks)

        if(savedBooks.length === 0){
            return  <div className="Acont">
            <h3 id="resultTitle"> Saved Books </h3>
            <h1 id="noCont"> No Books Saved  </h1>

            </div>
        }

        else{
        
        return (
            <div className="Acont">
            <h3 id="resultTitle"> Saved Books </h3>
            
            {savedBooks.map( book => {
               
                    return(
            <SavedResults 
                    key={book.id} 
                title={book.title} 
                author={book.author}
                image={book.image}
                description={book.description}
                link={book.link}
                id={book._id}
                    />);
                    })}
            
        </div>
        )
                }
}

export default SavedContainer;