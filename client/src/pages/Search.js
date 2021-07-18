import React, {useState, useEffect} from "react"
import SearchBox from "../components/SearchBox/index"
import API from "../utils/API"
import SearchContain from "../components/SearchContain/index"
function Search() {
    const [title, setTitle] = useState("")
    const [books,setBooks] = useState([])
    

    // useEffect(()=> {
    //     loadBooks()
    // },[])
    function loadBooks() {
        API.getBooks(title)
        .then(res =>  {setBooks(res.data)
            console.log("the books where got")
    
        })
        .catch(err => console.error(err))
    }
    
    function handleInputChange (event) {
        setTitle(event.target.value)
    }
    
    function formSubmit(event) {
        event.preventDefault()
        loadBooks()
    }
    return(
        <div>
        <SearchBox handleInputChange={handleInputChange} formSubmit={formSubmit}/>
        
        <SearchContain books={books}/>
        
        </div>
    );
}

export default Search;