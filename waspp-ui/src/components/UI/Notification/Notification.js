import React from 'react';
import classes from './Notification.css';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const notification = (props) => {
    return (
        <div className={[classes.alert, bootStrapClasses['fixed-top']].join(' ')}>
            <button className={classes.closebtn} onClick={props.close}>X</button>
            <button className={classes.closebtn} onClick={props.closeAll}>close all</button>
            <div className={classes.text}>
                <strong> {props.strong} </strong> {props.text}
            </div>
        </div>
    )
}

export default notification