import { http } from "../../api/http";
import { http_auth } from "../../api/http_auth";
import * as Type from './type';
import cookies from 'react-cookies';
import { Modal } from "antd";
const grant_type = 'password';
const client_id = 'rkIEIks89aJKch3vGO4JSwDWDwxgWK6l6MsQodwi';
const client_secret = 'tZnJ8hN76t6CQFI3lB1oRCw3Zgoyf3gFMWw4qqHscI8LWhlZGZHdFn8U2qXDa9l9qlOgjLXDoUrIa8moDzyiBXlEeGMnjKyIrhH9yIpmj7DHvmK8id2KsjZKFDi7hjK8';
export const getUserLogin = (history) => {
    return (dispatch) => {
        dispatch(actionLoginRequest());
        http_auth.get('user/current-user/').then((rs) => {
            dispatch(actionLoginSuccess(rs.data));
        }).catch((err) => {
            // if (history) {
            //     dispatch(actionLoginFailed({'login sesion':"The login session has expired, please login again"}));
            //     // history.push('/login')
            // }
            // else {
                dispatch(actionLoginFailed(null));
            // }
        });
    }
}
export const actLogin = (user, history) => {
    return async (dispatch) => {
        dispatch(actionLoginRequest());
        let data = {
            ...user,
            grant_type: grant_type,
            client_id: client_id,
            client_secret: client_secret
        }
        await http.post('o/token/', data).then((rs) => {
            cookies.save('access_token', rs.data.access_token, { path: '/' });
            // getUserLogin(history);
            history.goBack();
        }).catch((err) => {
            dispatch(actionLoginFailed({'Account info': 'Incorrect username or password'}));
        })
    }
}

export const actRegister = (user, history) => {
    return async (dispatch) => {
        dispatch(actionLoginRequest());
        await http.post('user/', user).then((rs) => {
            let data = {
                username: user.username,
                password: user.password
            }
            dispatch( actLogin(data, history));
        }).catch((err) => {
            dispatch(actionLoginFailed(err.response.data));
        })
    }
}


export const actLoginGG = (accessToken, history, mess) => {
    return async (dispatch) => {
        dispatch(actionLoginRequest());
        await http.post('/auth/convert-token/', {
            token: accessToken,
            backend: 'google-oauth2',
            grant_type: 'convert_token',
            client_id: client_id,
            client_secret: client_secret

        }).then((rs) => {
            // console.log(rs)
            cookies.save('access_token', rs.data.access_token, { path: '/' });
            history.goBack();
        }).catch((err) => {
            console.log(err)
        })
    }
}
const actionLoginRequest = () => {
    return {
        type: Type.LOGIN_REQUEST
    }
}
const actionLoginSuccess = (data) => {
    return {
        type: Type.LOGIN_SUCCESS,
        data: data
    }
}
const actionLoginFailed = (err) => {
    return {
        type: Type.LOGIN_FAILED,
        data: err
    }
}
export const actLogout = () => {
    cookies.remove('access_token');
    return {
        type: Type.LOGOUT,
    }
}
export const resetPw = (data, colseModal) => {
    return (dispatch) => {
        http_auth.post(`user/reset-password/`,data).then((rs) => {
            return Modal.success(
                {
                    title: 'This is a notification message',
                    content: rs.data.mess,
                    width: 500,
                    okText: "confirm",
                    onOk() {
                        return colseModal();
                    }
                }
            )
        }).catch((err) => {
            if (err.response?.data?.mess) {
                return Modal.error(
                    {
                        title: 'This is a notification message',
                        content: err.response?.data?.mess,
                        width: 500,
                        okText: "confirm",
                        onOk() { }
                    }
                )
            }
            console.log(err)
        })
    }
}