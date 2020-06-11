import React , {useState} from 'react'

import store from '../store'

const Header = (props) => {
    const handleClick = (e) => {
        props.onClick(props.number)
    }
    
    return (
        <div>
            <form >
                <input type="text" value = {props.number} />
                <input type="button" onClick={handleClick} value="up"/>
            </form>
        </div>
    )
}

export default Header;
