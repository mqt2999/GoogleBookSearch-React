import React from "react"
import "./styles.css"
import ResultCont from "../ResultCont/index"
function SearchContain (props){
   return( 
   <div className="cont">
        <h3> Results </h3>
        <ResultCont {...props.books.map( book => (
           book.items.authors
        ))}
        />
        
    </div>
   )
}
export default SearchContain;