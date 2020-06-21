import React from 'react'

export default (props, history) => {
    
    return (
        <div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    props.handleLogin(e.target.username.value, e.target.password.value)
                    //history.push('/')
                   
                }}>
                    <input type='text' name='username' />
                    <input type='password' name='password' />
                    <input type='submit' value="login"></input>
                </form>

                <input type='button' value='logout' onClick={() => {
                    props.handleLogout()
                }}></input>
            </div>

            <hr />
            {
                props.token ?
                    <div style={{ color: "red" }}>login {props.token}</div>
                    :
                    <div style={{ color: "red" }}>logout</div>
            }
        </div>
    )
}