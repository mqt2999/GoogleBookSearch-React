import React from "react"
import "./style.css"

function SearchBar(props) {
    return (
        <div className="searchBox" >
        <form className="form-inline">
            <h3> Search For Books Here </h3>
            <div className="form-group mx-sm-3 mb-2">
                <input type="search" className="form-control" id="title" placeholder="Search..." value={props.title} onChange={props.handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary mb-2" onClick={props.formSubmit}>GO!</button>
        </form>
        </div>
    );
}

export default SearchBar;