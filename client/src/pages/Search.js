import React, {useState, useEffect} from "react"
import SearchBox from "../components/SearchBox/index"
import API from "../utils/API"
function Search() {
    const [title, setTitle] = useState({})
    const [books,setBooks] = useState([])
    

    useEffect(()=> {
        loadBooks()
    },[])
    function loadBooks() {
        API.getBooks(title)
        .then(res =>  setBooks(res.data)
        )
        .catch(err => console.error(err))
    }
    
    function handleInputChange (event) {
        setTitle({title: event.target.value})
    }
    
    function formSubmit(event) {
        event.preventDefault()
    }
    return(
        <SearchBox handleInputChange={handleInputChange} />
        
    );
}

export default Search;