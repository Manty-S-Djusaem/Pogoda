import React from 'react';
import module from './Navbar.module.scss'

function navbar(props) {
    return (
        <div className={module.container}>
            <input className={module.input12}></input>
        </div>
    );
}

export default navbar;