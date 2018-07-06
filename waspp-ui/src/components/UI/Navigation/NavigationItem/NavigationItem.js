import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.css';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const navigationItem = (props) => {
    return (
        <li className={[bootStrapClasses['btn-group'], classes.NavigationItem].join(' ')} role='group'>
            <NavLink
                to={props.link}
                exact={props.exact}
                className={classes.NavigationLinks}
                activeClassName={classes.ActiveLink}>
                <button type="button"
                        className={[bootStrapClasses["btn"], classes.NavigationButton].join(' ')}>{props.children}
                </button>
            </NavLink>
        </li>
    );
}

export default navigationItem;