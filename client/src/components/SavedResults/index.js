import react from "react"
import ViewBtn from "../viewBtn/index"
import DeleteBtn from "../DeleteBtn/index"

function SavedResults(props){
    

    
    return (
        <div className="cont">
            <div className="c1"> 
                <h3> {props.title} </h3>
                <p> Author: {props.author}</p>
                <div className="red"> 
                <ViewBtn link={props.link}/>
                <DeleteBtn id={props.id}/>
                </div>


            </div>
            <div className="c2">
                <img id="gg" src={props.image}/>
                <section> {props.description} </section>  
            </div>
        </div>

    )

}

export default SavedResults;