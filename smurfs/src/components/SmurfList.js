import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions'

import Smurfs from "./Smurfs"

function SmurfList(props) {
    console.log('ko: Smurflist: props1: ', props)

    useEffect(() => {
        props.fetchSmurfs();
      }, [])

    

    return (
        <div>
            <h2>Smurf List</h2>
            <div className="smurfContainer">
            {props.smurfs.map(smurf => {
                return <Smurfs smurf={smurf} key={smurf.id}/>                 
            })}
            </div>
        </div>
    )
}

const mapSateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapSateToProps, {fetchSmurfs})(SmurfList);