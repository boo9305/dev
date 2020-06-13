import * as actionTypes from './actionTypes'
import axios from 'axios'

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    }
}
export const authSuccess = token => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        token : token
    }
}

export const authFail = error => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    }
}

export const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('expirationDate')
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeOut = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime * 1000
        )
    }
}

export const authLogin = (username, password) => {
    return dispatch => {
        alert("1")
        dispatch(authStart());
        axios.post('http://3.34.100.138:8000/rest-auth/login', {
            username : username,
            password : password
        }).then(res => {
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
            localStorage.setItem('token', token)
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(token))
            dispatch(checkAuthTimeOut(3600))

        }).catch(err => {
            dispatch(authFail(err))
        })
    }
}
