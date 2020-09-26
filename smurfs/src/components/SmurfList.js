import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchSmurfs } from '../actions/action'

import Smurfs from "./Smurfs"

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <div>
            {props.smurfs.map(smurf => (
                <Smurf key={smurf.id} smurf={smurf} />
            ))}
        </div>
    )
}

const mapSateToProps = state => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapSateToProps, {fetchSmurfs})(smurfList);