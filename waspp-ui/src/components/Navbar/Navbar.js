import React from 'react';
import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const navbar = () =>{
    return (

    <nav className={[classes.navbar, classes['navbar-expand-sm'], classes['navbar-light'], classes['bg-primary'], classes['fixed-top']].join(' ')}>
        <a classes={[classes['navbar-brand']]} href="/" style={{color: 'white'}}>Sysco</a>
        <ul className={[classes['navbar-nav'], classes['ml-auto']].join(' ')}>
            <li><i className={[classes['nav-item'], classes['nav-link'], 'fas', 'fa-user'].join(' ')} style={{color: 'white'}}> User</i></li>
            <li><i className={[classes['nav-item'], classes['nav-link'], 'fas', 'fa-power-off'].join(' ')}  style={{color: 'white'}}></i></li>
        </ul>
    </nav>  
    );
};

export default navbar;