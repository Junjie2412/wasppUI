import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker from '../../../UI/DateInput/DateInput';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import moment from 'moment';

const editBonusForm = (props) => {

    let content = null;

    const EditAmount = (event) => {
        switch (props.editState) {
            case 'Subsidy Amount': return props.onEditSubsidyAmount(event.target.value);
            case 'Buy Out Amount': return props.onEditBuyOutAmount(event.target.value);
            case 'Floor Amount': return props.onEditFloorAmount(event.target.value);
            default: return;
        }
    };

    // Editing everything
    const EditStartDate = (event) => {
        switch (props.editState) {
            case 'Subsidy Amount': return props.onEditSubsidyStartDate(event);
            case 'Buy Out Amount': return props.editBuyOutStartDate(event);
            case 'Floor Amount': return props.onEditFloorStartDate(event);
            default: return;
        }
    };

    const EditEndDate = (event) => {
        switch (props.editState) {
            case 'Subsidy Amount': return;
            case 'Buy Out Amount': return;
            case 'Floor Amount': return props.onEditFloorEndDate(event);
            default: return;
        }
    };

    const EditComment = (event) => {
        switch (props.editState) {
            case 'Subsidy Amount': return props.onEditSubsidyComment(event.target.value);
            case 'Buy Out Amount': return props.onEditBuyOutComment(event.target.value);
            case 'Floor Amount': return props.onEditFloorComment(event.target.value);
            default: return;
        }
    };

    const onCancel = (event) => {
        event.preventDefault();
        props.close();
    };

    const onSubmit = (event) => {
        event.preventDefault();
        props.close();
        switch (props.editState) {
            case 'Subsidy Amount': return;
            case 'Buy Out Amount': return;
            case 'Floor Amount': return props.onAddEditFloor({
                user: props.user,
                floorAdjustments: props.editFloor
            });
            default: return;
        }
    };


    // The below changed default values depending on which bonuses you are editing
    let defaultAmount = '';
    let defaultStartDate = {
        date:  moment()
    };
    let defaultEndDate = {
        date:  moment()
    };
    let defaultComment = '';
    switch (props.editState) {
        case 'Subsidy Amount':
            defaultAmount=props.editSubsidy.amount;
            defaultStartDate.date=props.editSubsidy.startDate;
            defaultComment=props.editSubsidy.comment;
            break;
        case 'Buy Out Amount':
            defaultAmount=props.editBuyOut.amount;
            defaultStartDate.date=props.editBuyOut.startDate;
            defaultComment=props.editBuyOut.comment;
            break;
        case 'Floor Amount':
            defaultAmount=props.editFloor.amount;
            defaultStartDate.date=props.editFloor.startDate;
            defaultEndDate.date=props.editFloor.endDate;
            defaultComment=props.editFloor.comment;
            break;
        default:
            break;
    }

    //This changes the form between editing subsidies/buy outs and editing floors
    switch (props.version) {
        case 'version 1':
            content = null;
            break;
        case 'version 2':
            content = (
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>End Date</label>
                    <div>
                        <DatePicker
                            date={defaultEndDate.date}
                            required
                            changeDate={(event) => EditEndDate(event)}
                        />
                    </div>
                </div>
            );
            break;
        default:
            content = null;
            break;
    }

        return (
            <div>
                <form onSubmit={(event) => onSubmit(event)}>
                    <h1 style={{textAlign: 'center'}}>{props.title}</h1>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>{props.editState}</label>
                        <div>
                            <input
                                type='text'
                                required
                                className={bootStrapClasses['form-control']}
                                onChange={(event) => EditAmount(event)}
                                pattern='\d+(\.\d{2})?'
                                value={defaultAmount}
                            />
                        </div>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Start Date</label>
                        <div>
                            <DatePicker
                                date={defaultStartDate.date}
                                required
                                changeDate={(event) => EditStartDate(event)}
                            />
                        </div>
                    </div>
                    {content}
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Comments</label>
                        <div>
                            <input
                                type='text'
                                className={bootStrapClasses['form-control']}
                                onChange={(event) => EditComment(event)}
                                value={defaultComment}
                            />
                        </div>
                    </div>
                    <div className={bootStrapClasses['col-sm-12']}>
                        <button
                            className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                        <button
                            onClick={(event) => onCancel(event)}
                            className={[bootStrapClasses.btn, bootStrapClasses['btn-warning'],bootStrapClasses['col-sm-2']].join(' ')}
                            style={{margin: '4px', backgroundColor: '#FF9900'}}>Cancel</button>
                        <button className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}>Delete</button>
                    </div>
                </form>
            </div>
        );

};

const mapStateToProps = state => {
    return {
        editSubsidy: state.editSubsidies.currentEditSubsidy,
        editFloor: state.editFloors.currentEditFloor,
        editBuyOut: state.editBuyOuts.currentEditBuyOut,
        user: state.editUsers.currentUser
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onEditFloorAmount: (amount) => dispatch(actions.editFloorAmount(amount)),
        onEditFloorStartDate: (date) => dispatch(actions.editFloorStartDate(date)),
        onEditFloorEndDate: (date) => dispatch(actions.editFloorEndDate(date)),
        onEditFloorComment: (comment) => dispatch(actions.editFloorComment(comment)),
        onAddEditFloor: (floorData) => dispatch(actions.postEditFloors(floorData)),
        onEditSubsidyAmount: (amount) => dispatch(actions.editSubsidyAmount(amount)),
        onEditSubsidyStartDate: (date) => dispatch(actions.editSubsidyStartDate(date)),
        onEditSubsidyComment: (comment) => dispatch(actions.editSubsidyComment(comment)),
        onEditBuyOutAmount: (amount) => dispatch(actions.editBuyOutAmount(amount)),
        onEditBuyOutStartDate: (date) => dispatch(actions.editBuyOutStartDate(date)),
        onEditBuyOutComment: (comment) => dispatch(actions.editBuyOutComment(comment)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(editBonusForm);