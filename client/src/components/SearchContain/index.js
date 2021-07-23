import React from "react"
import "./styles.css"
import ResultCont from "../ResultCont/index"

function SearchContain (props){
   return( 
   <div className="Acont">
        <h3 id="resultTitle"> Results </h3>
        
        {props.books.map( book => {
           const b = book.volumeInfo;
                return(
                <ResultCont 
                key={book.id} 
                title={b.title} 
                author={b.authors}
                date={b.publishedDate}
                image={b.imageLinks.smallThumbnail}
                description={b.description}
                link={b.infoLink}
                />);
                })}
        
    </div>
   )
}
export default SearchContain;