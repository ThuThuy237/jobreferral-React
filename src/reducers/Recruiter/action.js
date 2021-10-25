import { http_auth } from "../../api/http_auth";
import * as Type from './type';

export const getRecruiter = (id) => {
    return (dispatch) => {
        dispatch(actionGetRecruiterRequest());
        http_auth.get(`employer/${id}/`).then((rs) => {
            dispatch(actionGetRecruiterSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetRecruiterFailed(err));
        });
    }
}

const actionGetRecruiterRequest = () => {
    return {
        type: Type.GETRECRUITER_REQUEST
    }
}
const actionGetRecruiterSuccess = (data) => {
    return {
        type: Type.GETRECRUITER_SUCCESS,
        data: data
    }
}
const actionGetRecruiterFailed = (err) => {
    return {
        type: Type.GETRECRUITER_FAILED,
        data: err
    }
}
