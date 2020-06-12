import React , {useState} from 'react'

import store from '../store'

const Header = (props) => {
    const handleLoginClick = (e) => {
        props.onLoginClick()
    }
    const handleLogoutClick = (e) => {
        props.onLogoutClick()
    }
    
    return (
        <div>
            <form >
                <input type="button" onClick={handleLoginClick} value="login"/>
                <input type="button" onClick={handleLogoutClick} value="logout"/>
            </form>
        </div>
    )
}

export default Header;
