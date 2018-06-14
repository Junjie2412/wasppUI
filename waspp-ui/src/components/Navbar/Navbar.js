import React from 'react';
import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

const navbar = () =>{
    return (

    <nav className={[classes.navbar, classes['navbar-expand-sm'], classes['navbar-light'], classes['fixed-top']].join(' ')} style={{backgroundColor: '#0099cc'}}>
        <NavLink classes={[classes['navbar-brand']]} to="/" style={{color: 'white'}}>Sysco</NavLink>
        <ul className={[classes['navbar-nav'], classes['ml-auto']].join(' ')} >
            <li><i className={[classes['nav-item'], classes['nav-link'], 'fas', 'fa-user'].join(' ')} style={{color: 'white'}}> User</i></li>
            <li><i className={[classes['nav-item'], classes['nav-link'], 'fas', 'fa-power-off'].join(' ')}  style={{color: 'white'}}></i></li>
        </ul>
    </nav>  
    );
};

export default navbar;