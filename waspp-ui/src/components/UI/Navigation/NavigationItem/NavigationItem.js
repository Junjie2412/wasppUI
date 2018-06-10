import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const navigationItem = (props) => {
    return (
        <li className={bootStrapClasses['btn-group']} role='group'>
            <NavLink
                to={props.link}
                exact={props.exact}>
                <button type="button"
                        className={[bootStrapClasses["btn"], classes.NavigationLinks].join(' ')}>{props.children}
                </button>
            </NavLink>
        </li>
    );
}

export default navigationItem;