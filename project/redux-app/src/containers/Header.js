import Header from "../components/Header"

import {connect} from 'react-redux'

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

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(Header);


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
