import { http } from "../../api/setting";
import * as Type from './type';
// import axios from "axios";

export const getListPost = (data ) => {
    return (dispatch) => {
        dispatch(actionGetPostRequest());
        http.get(`post/?category=${data.category? data.category:''}&location=${data.location? data.location:''}&kw=${data.kw? data.kw:''}&salary=${data.salary? data.salary:0}`).then((rs) => {
            dispatch(actionGetPostSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetPostFailed(err));  
        });
    }
}

export const getTopPost = () => {
    return (dispatch) => {
        dispatch(actionGetTopPostRequest());
        http.get('post/get-top5-lastest/').then((rs) => {
            dispatch(actionGetTopPostSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetTopPostFailed(err));  
        });
    }
}

export const gePostDetail = (id) => {
    return (dispatch) => {
        dispatch(actionGetDetailRequest());
        http.get(`post/${id}`).then((rs) => {
            dispatch(actionGetDetailSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetDetailFailed(err));  
        });
    }
}
const actionGetPostRequest = () => {
    return {
        type: Type.GETPOST_REQUEST
    }
}
const actionGetPostSuccess = (data) => {
    return {
        type: Type.GETPOST_SUCCESS,
        data: data
    }
}
const actionGetPostFailed = (err) => {
    return {
        type: Type.GETPOST_FAILED,
        data: err
    }
}
const actionGetTopPostRequest = () => {
    return {
        type: Type.GETTOPPOST_REQUEST
    }
}
const actionGetTopPostSuccess = (data) => {
    return {
        type: Type.GETTOPPOST_SUCCESS,
        data: data
    }
}
const actionGetTopPostFailed = (err) => {
    return {
        type: Type.GETTOPPOST_FAILED,
        data: err
    }
}
const actionGetDetailRequest = () => {
    return {
        type: Type.GETDETAIL_REQUEST
    }
}
const actionGetDetailSuccess = (data) => {
    return {
        type: Type.GETDETAIL_SUCCESS,
        data: data
    }
}
const actionGetDetailFailed = (err) => {
    return {
        type: Type.GETDETAIL_FAILED,
        data: err
    }
}
