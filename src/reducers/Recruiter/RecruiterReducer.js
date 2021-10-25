import * as Type from './type';
let initialState = {
    loading: true,
    recruiter: null,
    err: null,
}
const RecruiterReducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GETRECRUITER_REQUEST: {
            state.loading = true;
            state.recruiter = null;
            state.err = null;
            return {...state}
        }
        case Type.GETRECRUITER_SUCCESS:{
            state.loading = false;
            state.recruiter = action.data;
            state.err = null;
            return {...state}
        }
        case Type.GETRECRUITER_FAILED:{
            state.loading = false;
            state.recruiter = null;
            state.err = action.data;
            return {...state}
        }
        default:
            return { ...state }
    }

}
export default RecruiterReducer;