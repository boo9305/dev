import Header from "../components/Header"

import {connect} from 'react-redux'

const actionLoginStart = (token) => {
    return {
        type : 'auth_start',
        token : token
    }
}
const actionLogin = (token) => {
    return {
        type : 'auth_login',
        token : token
    }
}
const actionLogout = (token) => {
    return {
        type : 'auth_logout',
        token : token
    }
}

const actionLoginTimer = () => {
    return (dispatch , getState) => {
        dispatch(actionLoginStart("1234"))
        dispatch(actionLoginStart(getState().token + "5"))

        setTimeout(() => {
            dispatch(actionLogout(getState().token + "6"))
        }, 1000)
    }
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onLoginClick: () => dispatch(actionLoginTimer()),
        onLogoutClick: () => dispatch(actionLogout("0"))
    }
}

export default connect(null, mapReduxDispatchToReactProps)(Header);

/* 
function mapReduxStateToReactProps(state) {
    return {
        number : state.number
    }
}

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick:function(cnt) {
            dispatch({ type:'INCREMENT', number : cnt })
        }
    }
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Header); */


/*
import React, {useState}  from "react"

import store from "../store"

export default function () {
    const [cnt , setCnt] = useState({number : store.getState().number})
    store.subscribe(function(){
        setCnt({number : store.getState().number})
    })
    // const [ cnt, setCnt] = useState(store.getState().number)

    const handleClick = (_cnt) => {
        store.dispatch({ type:'INCREMENT', cnt : cnt.number })
    }

    return (
        <Header onClick={handleClick} cnt={cnt.number}></Header>
    )
};

 */
