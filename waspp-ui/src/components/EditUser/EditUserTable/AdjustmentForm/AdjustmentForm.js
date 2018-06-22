import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './AdjustmentForm.css'
import DateInput from '../../../UI/DateInput/DateInput';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';

const adjustmentForm = (props) => {

    const addAdjustmentHandler = (event) => {
        props.onAddAdjustment({
            user: props.user,
            weekEndDate: props.adjustment.date._d.toLocaleDateString(),
            comment: props.adjustment.comment,
            amount: props.adjustment.amount
        });
    }

    const addAfterFloorAdjustmentHandler = (event) => {
        props.onAddAfterFloorAdjustment({
            user: props.user,
            weekEndDate: props.afterFloorAdjustment.date._d.toLocaleDateString(),
            comment: props.afterFloorAdjustment.comment,
            amount: props.afterFloorAdjustment.amount
        });
    }

    const goToConfirming = (event) => {
        event.preventDefault();
        props.onAddConfirming();
    }

    const cancelConfirmation = (event) => {
        event.preventDefault();
        props.close();
        props.onCancelConfirming();
    }

    const confirmAddAdjustment = (event) => {
        props.close();
        props.isAfter ? (addAfterFloorAdjustmentHandler(event)) : (addAdjustmentHandler(event));
        props.onAddNotification(props.isAfter ? 'AFTER FLOOR ADJUSTMENT ADDED' : 'ADJUSTMENT ADDED', 'You have added an adjustment to ' + props.user.FirstName+ ' '+ props.user.LastName+'.')
        props.onCancelConfirming();
    }

    let formConfirmation = (
        <form onSubmit={(event) => goToConfirming(event)}>
            <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>HR Employee ID</label>
                <div>
                    <input type='text' className={[bootStrapClasses['form-control-plaintext'], classes.BoldInput].join(' ')} value={props.user.PayrollNumber} readOnly />
                </div>
            </div>
            <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Active Directory Name</label>
                <div>
                    <input type='text' className={[bootStrapClasses['form-control-plaintext'], classes.BoldInput].join(' ')}  value={props.user.TerrDescription} readOnly />
                </div>
            </div>
            <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Adjustment Amount</label>
                <div>
                    <input pattern='\d+(\.\d{2})?'
                           required
                           onChange={props.isAfter ?((event) => props.onEditAfterFloorAmount(event.target.value)) : ((event) => props.onEditAmount(event.target.value))}
                           value={props.isAfter ? props.afterFloorAdjustment.amount : props.adjustment.amount}
                           title='Currency format: 00.00'/>
                </div>
            </div>
            <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Adjustment Week End</label>
                <div>
                    <DateInput
                        date={props.isAfter ? props.afterFloorAdjustment.date : props.adjustment.date}
                        changeDate={props.isAfter ? ((date) => props.onEditAfterFloorDate(date)) : ((date) => props.onEditDate(date))}/>
                </div>
            </div>
            <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                <label className={[bootStrapClasses['col-sm-3'], bootStrapClasses['col-form-label']].join(' ')}>Comment</label>
                <div>
                        <textarea className={[bootStrapClasses['form-control']]}
                                  style={{width: '300px', height: '100px'}}
                                  value={props.isAfter ? props.afterFloorAdjustment.comment : props.adjustment.comment}
                                  onChange={props.isAfter ? ((event) => props.onEditAfterFloorComment(event.target.value)) : ((event) => props.onEditComment(event.target.value))}
                        />
                </div>
            </div>
            <div className={bootStrapClasses['col-sm-12']}>
                <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                <button onClick={(event) => cancelConfirmation(event)} className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['col-sm-2']].join(' ')} style={{margin: '4px'}}>Cancel</button>
            </div>
        </form>
    );

    if (props.confirming) {
        formConfirmation = (
            <Aux>
                <h4>Are you sure you want to add the following adjustment?</h4>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Amount</label>
                    <div>
                        <p className={[bootStrapClasses['form-control-plaintext'], classes.BoldInput].join(' ')}> {props.isAfter ? props.afterFloorAdjustment.amount : props.adjustment.amount}</p>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Date</label>
                    <div>
                        <p className={[bootStrapClasses['form-control-plaintext'], classes.BoldInput].join(' ')}>{props.isAfter ? props.afterFloorAdjustment.date._d.toLocaleDateString() : props.adjustment.date._d.toLocaleDateString()}</p>
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Comment</label>
                    <div>
                        <p className={[bootStrapClasses['form-control-plaintext']]}>{props.isAfter ? props.afterFloorAdjustment.comment : props.adjustment.comment}</p>
                    </div>
                </div>
                <div className={bootStrapClasses['col-sm-12']}>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')} onClick={(event) => confirmAddAdjustment(event)}>Yes</button>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['col-sm-2']].join(' ')} style={{margin: '4px'}} onClick={props.onCancelConfirming}>No</button>
                </div>
            </Aux>
        )
    }

    return(
        <div>
            {formConfirmation}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.editAdjustments.loading,
        adjustment: state.editAdjustments.currentAdjustment,
        user: state.editUsers.currentUser,
        afterFloorAdjustment: state.editAfterFloorAdjustments.currentAdjustment,
        confirming: state.editAdjustments.confirming
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddAdjustment: (adjustment) => dispatch(actions.addAdjustment(adjustment)),
        onEditComment: (comment) => dispatch(actions.editAdjustmentComment(comment)),
        onEditAmount: (amount) =>dispatch(actions.editAdjustmentAmount(amount)),
        onEditDate: (date) => dispatch(actions.editAdjustmentDate(date)),
        onAddAfterFloorAdjustment: (adjustment) => dispatch(actions.addAfterFloorAdjustment(adjustment)),
        onEditAfterFloorComment: (comment) => dispatch(actions.editAfterFloorAdjustmentComment(comment)),
        onEditAfterFloorAmount: (amount) => dispatch(actions.editAfterFloorAdjustmentAmount(amount)),
        onEditAfterFloorDate: (date) => dispatch(actions.editAfterFloorAdjustmentDate(date)),
        onAddConfirming: () => dispatch(actions.editAdjustmentInit()),
        onCancelConfirming: () => dispatch(actions.editAdjustmentCancel()),
        onAddNotification: (strong, text) => dispatch(actions.addNotification(strong, text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(adjustmentForm);