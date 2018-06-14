import React from 'react';
import classes from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DateInput from '../../../UI/DateInput/DateInput';

const adjustmentForm = () =>{
    return(
        <div>
            <form>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>HR Employee ID</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} readOnly />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-7'], classes['col-form-label']].join(' ')}>Active Directory Name Description</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} readOnly />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-5'], classes['col-form-label']].join(' ')}>Adjustment Amount</label>
                    <div>
                        <input type='text' className={classes['form-control']} />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-3'], classes['col-form-label']].join(' ')}>Start Date</label>
                    <div>
                        <DateInput />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-3'], classes['col-form-label']].join(' ')}>Comment</label>
                    <div>
                        <textarea className={[classes['form-control']]} style={{width: '300px', height: '200px'}}/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default adjustmentForm;