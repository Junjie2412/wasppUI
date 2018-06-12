import React from 'react';
import classes from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import css from './User.css';

const user = (props) => {
    return(
        <div className={[classes['w-25']]}>
            <div className={[[classes.card], classes['shadow-lg']].join(' ')}>
                <div className={[classes['card-body']]}>
                    <h5 className={[classes['text-center'], classes['card-title']].join(' ')}>First Last</h5>
                    <p>AS400 ID: {props.user.AS400ID}</p>
                    <p>HR Employee ID: {props.user.ADID}</p>
                    <p>File Number: {props.user.FileNumber}</p>
                    <p>Weekly Base: {props.user.Base}</p>
                    <p>Bonus Flight: </p>
                    <div className={classes.row}>
                        <div className = {classes['col-sm-4']}>
                            <input type='checkbox' className={classes['form-check-label']}/>
                            <label className='form-check-label'>Seasonal</label>
                        </div>
                        <div className = {classes['col-sm-4']}>
                            <input type='checkbox' className={classes['form-check-label']}/>
                            <label className='form-check-label'>Bonus</label>
                        </div>
                    </div>
                    <div className={css.center}>
                        <button className={[classes.btn, classes['btn-primary']].join(' ')}>Edit Employee</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default user;