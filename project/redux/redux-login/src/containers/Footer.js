import Footer from '../components/Footer'

import {connect} from 'react-redux'

function mapReduxStateToReactProps(state) {
    return {
        token : state.token
    }
}

export default connect(mapReduxStateToReactProps, null)(Footer);


    /*
import React, {useState} from 'react'
import store from "../store"
export default function ()  {

    const [cnt , setCnt] = useState({number : store.getState().number})
    store.subscribe(function(){
        setCnt({number : store.getState().number})
    })

    return (
        <Footer cnt={cnt.number}></Footer>
    ) 
}
 */
