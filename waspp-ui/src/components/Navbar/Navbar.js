import React from 'react';
import bootStrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';

const navbar = () =>{
    return (

    <nav className={[bootStrapClasses.navbar, bootStrapClasses['navbar-expand-sm'], bootStrapClasses['navbar-light'], bootStrapClasses['fixed-top']].join(' ')} style={{backgroundColor: '#0099cc'}}>
        <NavLink bootStrapClasses={[bootStrapClasses['navbar-brand']]} to="/" style={{color: 'white'}}>Sysco</NavLink>
        <ul className={[bootStrapClasses['navbar-nav'], bootStrapClasses['ml-auto']].join(' ')} >
            <li><i className={[bootStrapClasses['nav-item'], bootStrapClasses['nav-link'], 'fas', 'fa-user'].join(' ')} style={{color: 'white'}}> User</i></li>
            <li><i className={[bootStrapClasses['nav-item'], bootStrapClasses['nav-link'], 'fas', 'fa-power-off'].join(' ')}  style={{color: 'white'}}></i></li>
        </ul>
    </nav>  
    );
};

export default navbar;