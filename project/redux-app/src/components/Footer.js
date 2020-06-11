import React , {useState} from 'react'
import store from '../store'

const Footer = (props) => {
    return (
        <div>
            <input type="text" value={props.cnt}/>
        </div>
    )
};

export default Footer;
