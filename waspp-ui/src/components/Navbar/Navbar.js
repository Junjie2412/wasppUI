import React from 'react';
import bootStrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import Notification from "../UI/Notification/Notification";
import * as actions from '../../store/actions/index';

const navbar = (props) =>{


    const notifications = props.notifications.map(data => (
        <Notification strong={data.strong} text={data.text} close={props.onCloseNotifications} closeAll={props.onCloseAllNotifications}/>
    ));

    return (

    <nav className={[bootStrapClasses.navbar, bootStrapClasses['navbar-expand-sm'], bootStrapClasses['navbar-light'], bootStrapClasses['fixed-top']].join(' ')} style={{backgroundColor: '#0099cc'}}>
        {notifications}
        <NavLink className={bootStrapClasses['navbar-brand']} to="/" style={{color: 'white'}}>Sysco</NavLink>
        <ul className={[bootStrapClasses['navbar-nav'], bootStrapClasses['ml-auto']].join(' ')} >
            <li><i className={[bootStrapClasses['nav-item'], bootStrapClasses['nav-link'], 'fas', 'fa-user'].join(' ')} style={{color: 'white'}}> User</i></li>
            <li><i className={[bootStrapClasses['nav-item'], bootStrapClasses['nav-link'], 'fas', 'fa-power-off'].join(' ')}  style={{color: 'white'}}></i></li>
        </ul>
    </nav>  
    );
};

const mapStateToProps = state => {
    return {
        notifications: state.notifications.notifications
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCloseNotifications: () => dispatch(actions.removeNotification()),
        onCloseAllNotifications: () => dispatch(actions.removeAllNotifications())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(navbar);