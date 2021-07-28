import React from "react"
import "./styles.css"
import ViewBtn from "../viewBtn/index"
import API from "../../utils/API"

function ResultCont(props){

    function saveBook(){
        API.saveBook({
            title:props.title,
            author: props.author,
            link:props.link,
            image:props.image,
            description:props.description
        })
        .then(res => res.json() )
        .catch(err => {
            console.error(err)
        })
      
      }

    return(
        <div className="cont">
            <div className="c1"> 
                <h3> {props.title} </h3>
                <p> Author: {props.author}</p>
                <p> Date Published: {props.date}</p>
                <div className="red"> 
                <ViewBtn link={props.link}/>
                <button onClick={saveBook}> save</button> 
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