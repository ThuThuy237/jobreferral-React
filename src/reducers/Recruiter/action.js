// import { http_auth } from "../../api/http_auth";
import { http } from "../../api/http";
import * as Type from './type';
import { http_auth } from "../../api/http_auth";
import {Noti} from "../../Components/Noti";
import { getUserLogin } from '../../reducers/Login/action';

export const getRecruiter = (id) => {
    return (dispatch) => {
        dispatch(actionGetRecruiterRequest());
        http.get(`employer/${id}/`).then((rs) => {
            dispatch(actionGetRecruiterSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetRecruiterFailed(err));
        });
    }
}

export const getListRecruiter = () => {
    return (dispatch) => {
        dispatch(actionGetListRecruiterRequest());
        http.get(`employer/`).then((rs) => {
            dispatch(actionGetListRecruiterSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetListRecruiterFailed(err));
        });
    }
}
export const actChangeInfo = (user) => {
    return async (dispatch) => {
        await http_auth.patch(`employer/change-info/`, user).then((rs) => {
           Noti(Object.keys(rs.data)[0], rs.data[Object.keys(rs.data)[0]], "success");
           dispatch(getUserLogin());
        }).catch((err) => {
            Noti(Object.keys(err.response.data)[0], err.response.data[Object.keys(err.response.data)[0]], "error");
        })
    }
}


export const actChangeLogo = (user) => {
    return async (dispatch) => {
        await http_auth.patch(`employer/change-logo/`, user).then((rs) => {
           Noti(Object.keys(rs.data)[0], rs.data[Object.keys(rs.data)[0]], "success");
           dispatch(getUserLogin());
        }).catch((err) => {
            Noti(Object.keys(err.response.data)[0], err.response.data[Object.keys(err.response.data)[0]], "error");
        })
    }
}

export const actUpNewPost = (data, history) => {
    return async (dispatch) => {
        await http_auth.post(`post/`, data).then((rs) => {
           Noti("Create new post", "Create success", "success");
           history.push("posted-jobs")
        }).catch((err) => {
            Noti("Create new post", "Create failed", "error");
        })
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
const actionGetListRecruiterRequest = () => {
    return {
        type: Type.GETLISTRECRUITER_REQUEST
    }
}
const actionGetListRecruiterSuccess = (data) => {
    return {
        type: Type.GETLISTRECRUITER_SUCCESS,
        data: data
    }
}
const actionGetListRecruiterFailed = (err) => {
    return {
        type: Type.GETLISTRECRUITER_FAILED,
        data: err
    }
}