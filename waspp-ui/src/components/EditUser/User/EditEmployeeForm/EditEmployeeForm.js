import React from 'react';
import classes from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const editEmployeeForm = (props) =>{
    return(
        <div>
            <form>
                <h1 style={{textAlign: 'center'}}>Edit Employee</h1>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>HR Employee ID</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} value={props.user.ADID} readOnly />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>File Number</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} value={props.user.FileNumber} readOnly />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>AS-400 ID</label>
                    <div>
                        <input type='text' className={classes['form-control']} placeholder={props.user.AS400ID} />
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>Weekly Base</label>
                    <div>
                        <input type='text' className={classes['form-control-plaintext']} value={props.user.Base} readOnly/>
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-4'], classes['col-form-label']].join(' ')}>Bonus Flight</label>
                    <div>
                        <input type='text' className={classes['form-control']} />
                    </div>
                </div>
            </form>
            <div className={classes['col-sm-12']}>
                <button className={[classes.btn, classes['btn-success'], classes['col-sm-2']].join(' ')}>Save</button>
                <button className={[classes.btn, classes['btn-warning'],classes['col-sm-2']].join(' ')} style={{margin: '4px', backgroundColor: '#FF9900'}}>Cancel</button>
                <button className={[classes.btn, classes['btn-danger'], classes['col-sm-2']].join(' ')}>Delete</button>
            </div>
        </div>
    )
}

export default editEmployeeForm;