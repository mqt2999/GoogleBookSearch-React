import React from "react"
import "./style.css"

function SearchBar(props) {
    return (
        <div className="searchBox" >
        <form class="form-inline">
            <h3> Search For Books Here </h3>
            <div class="form-group mx-sm-3 mb-2">
                <input type="search" class="form-control" id="title" placeholder="Search..." value={props.title} onChange={props.handleInputChange}/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">GO!</button>
        </form>
        </div>
    );
}

export default SearchBar;