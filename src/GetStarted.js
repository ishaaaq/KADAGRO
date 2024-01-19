import React from "react";
import image from './images/image 1.png'

function GetStarted({clickHandler}){
    return(<>
        <div id='getStarted'>
        <h1>KADUNA STATE AGRICULTURE</h1>
        <p>Kaduna State Agriculture.</p>

        <div className="getStarted-btn">
            <button className="btn  GetStarted" onClick={clickHandler}>Get Started</button>
            <button className="btn learnMore" onClick={clickHandler}>Learn More</button>
        </div>
        </div>
       
    </>
    )
}

export default GetStarted