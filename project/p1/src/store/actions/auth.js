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
    console.log("action logout")
    localStorage.removeItem('token')
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
        console.log("authLogin... ", username, password)
        dispatch(authStart());
        axios.post('http://3.34.100.138:8000/rest-auth/login/', {
        //axios.post('http://localhost:8000/rest-auth/login/', {
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
            console.log("login error")
        })
    }
}

export const authCheckState = () => {
    return dispatch => {
        console.log("authCheckState...")
        const token = localStorage.getItem("token")
        if (token === undefined) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem("expirationDate"))
            if ( expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date()) / 1000 ));
            }
        }
    }

}
