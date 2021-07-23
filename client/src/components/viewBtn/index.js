import React from "react"

function ViewBtn(props){

    return (
        <a target="_blank" href={props.link}> <button > view </button></a> 
    );
}

export default ViewBtn;