import { createStore , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const updatedLoginStart = (action,state) => {
    return {...state, token : action.token}
}

const updatedLogin = (action,state) => {
    return {...state, token : action.token}
}

const updatedLogout = (action,state) => {
    return {...state, token : action.token}
}

const reducer = (state, action) => {
    if (state === undefined) {
        return { tokne : "none"}
    };
    switch (action.type) {
        case "auth_start" : return updatedLoginStart(action, state);
        case "auth_login" : return updatedLogin(action, state);
        case "auth_logout" : return updatedLogout(action, state);
    }

    return state;
}

export default createStore(reducer, applyMiddleware(thunk));

/* 
export default createStore(function(state,action) {
    if (state === undefined) {
        return {number : 0}
    };
    if (action.type === "INCREMENT") {
        return {...state, number : state.number + 1}
    }

    return state;
}) */
