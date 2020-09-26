import axios from 'axios';
export const FETCH_SMURF_DATA = 'FETCH_SMURF_DATA';
export const FETCH_SMURF_DATA_SUCCESS = 'FETCH_SMURF_DATA';
export const FETCH_SMURF_DATA_FAILURE = 'FETCH_SMURF_DATA';

export const POST_DATA = 'POST_DATA';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_ERROR = 'POST_ERROR';



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

export const addNewSmurf = (smurf) => dispatch => {
    dispatch({type: POST_DATA});
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
        console.log('POST Response', res.data)
        dispatch({type: POST_SUCCESS, payload: res.data})
    })
    .catch(err => {
        console.log('error', err)
        dispatch({type: POST_ERROR, payload: err})
    })
}

