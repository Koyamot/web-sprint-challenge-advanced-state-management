import React from "react";
import { connect } from 'react-redux'

import { deleteSmurf } from '../actions/index'


const Smurfs = props => {
    console.log('ko: smurfs: props: ', props)
    
    return(
        <div className="smurfCard">
        <h3>{props.smurf.name}</h3>
        <p>Age: {props.smurf.age}</p>
        <p>height: {props.smurf.height}</p>
        <button
          className="delete-btn"
          onClick={() => props.deleteSmurf(props.smurf.id)
          }
        >
          Delete
        </button>
        </div>
    )
}

export default connect(null, { deleteSmurf })(Smurfs);
