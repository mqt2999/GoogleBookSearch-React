import React from "react"
import "./styles.css"

function ResultCont(props){
    return(
        <div className="cont">
            <div className="c1"> 
                <h3> {props.title} </h3>
                <p> Author: {props.author}</p>
                <p> Date Published: {props.date}</p>
                <div className="red"> 
                <a target="_blank" href={props.link}> <button > view </button></a> 
                <button> save</button> 
                </div>


            </div>
            <div className="c2">
                <img id="gg" src={props.image}/>
                <section> {props.description} </section>  
            </div>
        </div>
    )
}
export default ResultCont;