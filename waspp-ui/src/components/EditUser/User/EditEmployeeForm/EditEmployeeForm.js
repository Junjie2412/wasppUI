import React from 'react';
import classes from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const editEmployeeForm = () =>{
    return(
        <div>
            <form>
                <h1 style={{textAlign: 'center'}}>Edit Employee</h1>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>HR Eployee ID</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} readOnly />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>File Number</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} readOnly />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>AS-400 ID</label>
                    <div>
                        <input type='text' className={classes['form-control']} />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>Weekly Base</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} readOnly/>
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>Bonus Flight</label>
                    <div>
                        <input type='text' className={classes['form-control']} />
                    </div>
                </div>
            </form>
            <button className={[classes.btn, classes['btn-primary']].join(' ')}>Edit Employee</button>
        </div>
    )
}

export default editEmployeeForm;