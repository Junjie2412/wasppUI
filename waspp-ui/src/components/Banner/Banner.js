import React from 'react';
import bootStrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import classes from './Banner.css';
import logo from '../../assets/SPPay_simple_white_outlined.png';

const navbar = (props) =>{

    return (

    <nav className={[bootStrapClasses.navbar, bootStrapClasses['navbar-expand-sm'], bootStrapClasses['navbar-light'], bootStrapClasses['fixed-top'], classes.Banner].join(' ')}>
        <NavLink to="/"><img src={logo} alt='okay...' width="40" height="40" className={bootStrapClasses['navbar-brand']} /></NavLink>
        <ul className={[bootStrapClasses['navbar-nav'], bootStrapClasses['ml-auto']].join(' ')} >
            <li><i className={[bootStrapClasses['nav-item'], bootStrapClasses['nav-link'], 'fas', 'fa-user'].join(' ')} style={{color: 'white'}}> User</i></li>
            <li><i className={[bootStrapClasses['nav-item'], bootStrapClasses['nav-link'], 'fas', 'fa-power-off'].join(' ')}  style={{color: 'white'}}></i></li>
        </ul>
    </nav>  
    );
};

export default navbar;