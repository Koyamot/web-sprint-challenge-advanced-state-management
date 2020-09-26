import { FETCH_SMURF_DATA, FETCH_SMURF_DATA_FAILURE, FETCH_SMURF_DATA_SUCCESS, POST_DATA, POST_ERROR, POST_SUCCESS } from '../actions'

const initialState = {
    smurfs: [],
    isLoading: false,
    isPosting: false,
    error: ''
};

export const smurfReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_SMURF_DATA:
            const addSmurf = [

            ]
            return{
                ...state,
                isLoading: true,
            }
        case FETCH_SMURF_DATA_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isLoading: false,
                error: ""
            }
        case FETCH_SMURF_DATA_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload                
            }
        case POST_DATA:
            return{
                ...state,
                isLoading: true,
                smurfs: [...state.smurfs]
            }

        case POST_SUCCESS:
                return{
                    ...state,
                    isPosting: true,
                    smurfs: action.payload
                }
        case POST_ERROR:
            return{
                ...state,
                isPosting: false,
                err: action.payload
            }
            default:
                return state
    }
}

export default smurfReducer;