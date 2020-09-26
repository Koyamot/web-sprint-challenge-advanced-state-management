import { FETCH_SMURF_DATA, FETCH_SMURF_DATA_FAILURE, FETCH_SMURF_DATA_SUCCESS, ADD_NEW_SMURF, ADD_NEW_SMURF_FAILURE, ADD_NEW_SMURF_SUCCESS } from '../actions/action'

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
        case ADD_NEW_SMURF:
            return{
                ...state,
                isLoading: true,
                smurfs: [...state.smurfs]
            }

        case ADD_NEW_SMURF_SUCCESS:
                return{
                    ...state,
                    isPosting: true,
                    smurfs: action.payload
                }
        case ADD_NEW_SMURF_FAIL:
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