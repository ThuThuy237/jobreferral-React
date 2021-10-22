import { http } from "../../api/setting";
import * as Type from './type';
// import axios from "axios";

export const getListCategory = () => {
    return (dispatch) => {
        dispatch(actionGetCategoryRequest());
        http.get('category/').then((rs) => {
            dispatch(actionGetCategorySuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetCategoryFailed(err));  
        });
    }
}


export const getListLocation = () => {
    return (dispatch) => {
        dispatch(actionGetLocationRequest());
        http.get('location/').then((rs) => {
            dispatch(actionGetLocationSuccess(rs.data));
        }).catch((err) => {
            dispatch(actionGetLocationFailed(err));  
        });
    }
}


const actionGetCategoryRequest = () => {
    return {
        type: Type.GETCATEGORY_REQUEST
    }
}
const actionGetCategorySuccess = (data) => {
    return {
        type: Type.GETCATEGORY_SUCCESS,
        data: data
    }
}
const actionGetCategoryFailed = (err) => {
    return {
        type: Type.GETCATEGORY_FAILED,
        data: err
    }
}

const actionGetLocationRequest = () => {
    return {
        type: Type.GETLOCATION_REQUEST
    }
}
const actionGetLocationSuccess = (data) => {
    return {
        type: Type.GETLOCATION_SUCCESS,
        data: data
    }
}
const actionGetLocationFailed = (err) => {
    return {
        type: Type.GETLOCATION_FAILED,
        data: err
    }
}
