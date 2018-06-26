import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';


const editEmployeeForm = (props) =>{

    const editAS400ID = (event) => {
        props.onEditAS400ID(event.target.value);
    };

    const editBonusFlight = (event) => {
        props.onEditFlight(event.target.value);
    };

    const editEmployee = (event) => {
        event.preventDefault();
        props.close();
        props.onEditEmployee(props.user, props.adjustments, props.afterFloorAdjustments);
        props.onQuickSetCurrentUser(props.user);
    };

    return(
        <div>
            <form onSubmit={(event) => editEmployee(event)}>
                <h1 style={{textAlign: 'center'}}>Edit Employee</h1>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>HR Employee ID</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} value={props.user.ADID} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>File Number</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} value={props.user.FileNumber} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>AS-400 ID</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control']} value={props.user.AS400ID} onChange={(event) => editAS400ID(event)}/>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Weekly Base</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} value={props.user.Base} readOnly/>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Flight</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control']} value={props.user.BonusFlight} onChange={(event) => editBonusFlight(event)}/>
                    </div>
                </div>
                <div className={bootStrapClasses['col-sm-12']}>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                    <button onClick={props.close} className={[bootStrapClasses.btn, bootStrapClasses['btn-warning'],bootStrapClasses['col-sm-2']].join(' ')}
                            style={{margin: '4px', backgroundColor: '#FF9900'}}>Cancel</button>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')} disabled>Delete</button>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        adjustments: state.editAdjustments.currentUserAdjustments,
        afterFloorAdjustments: state.editAfterFloorAdjustments.currentUserAdjustments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditAS400ID: (value) => dispatch(actions.editEmployeeAS400ID(value)),
        onEditFlight: (value) => dispatch(actions.editEmployeeBonusFlight(value)),
        onEditEmployee: (employee, adjustments, afterFloorAdjustments) => dispatch(actions.editEmployee(employee, adjustments, afterFloorAdjustments)),
        onQuickSetCurrentUser: (user) => dispatch(actions.quickSetCurrentUser(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(editEmployeeForm);