import React from "react";

const Smurfs = props => {
    
    return(
        <div>
        <h2>Name: {props.smurf.name}</h2>
        <p>Age: {props.smurf.age}</p>
        <p>height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurfs;
