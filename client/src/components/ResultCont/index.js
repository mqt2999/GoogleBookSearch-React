import React from "react"
import "./styles.css"

function ResultCont(props){
    return(
        <div className="cont">
            <div className="c1"> 
                <h3> {console.log("this is author",props.author)}</h3>
                <p> author </p>

            </div>
            <div className="c2">
                <h4 id="gg"> image </h4>
                <h4> description </h4>
            </div>
        </div>
    )
}
export default ResultCont;