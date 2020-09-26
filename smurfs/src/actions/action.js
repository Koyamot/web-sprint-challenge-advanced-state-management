import axios from 'axios';
export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA';

export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const ADD_NEW_SMURF_SUCCESS = 'ADD_NEW_SMURF_SUCCESS';
export const ADD_NEW_SMURF_FAILURE = 'ADD_NEW_SMURF_FAILURE';



export const fetchSmurfs = () => (dispatch) =>{

    dispatch({type: FETCH_SMURF_DATA});

    axios.get("http://localhost:3333/smurfs")
    .then((res) =>{
        console.log("ko: action: fetchSmurfs: getdata: ", res.data)
        dispatch({type: FETCH_SMURF_DATA_SUCCESS, payload: res.data});
    })
    .catch((err) => {
        dispatch({type: FETCH_SMURF_DATA_FAILURE, payload: err.message})
    })
}

export const addNewSmurf = smurf = dispatch => {
    dispatch({ type: ADD_NEW_SMURF })
    
    axios.post("http://localhost:3333/smurfs", smurf)
        .then(res => {
            console.log("ko: action: fetchSmurfs: postdata: ", res.data)
            dispatch({
                type: ADD_NEW_SMURF_SUCCESS, payload: res.data
            })
        .catch(err => {
            dispatch({type: ADD_NEW_SMURF_FAILURE, payload: err.message})
        })
    
    })
};

