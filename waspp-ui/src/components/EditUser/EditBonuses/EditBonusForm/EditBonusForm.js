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
            case 'Buy Out Amount': return props.onEditBuyOutStartDate(event);
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
            case 'Subsidy Amount':
                if (!props.hasSubsidy) {
                    for (let subsidy in props.editSubsidyList) {
                        if (props.editSubsidyList[subsidy].user.id === props.user.id) {
                            props.onSetHasSubsidyTrue();
                        }
                    }
                    props.onAddEditSubsidy({
                        user: props.user,
                        amount: props.editSubsidy.amount,
                        startDate: props.editSubsidy.startDate._d.toLocaleDateString(),
                        comment: props.editSubsidy.comment
                    });
                }
                break;
            case 'Buy Out Amount': return;
            case 'Floor Amount':
                if (!props.hasFloor) {
                    for (let floor in props.editFloorList) {
                        if (props.editFloorList[floor].user.id === props.user.id) {
                            props.onSetHasFloorTrue();
                        }
                    }
                    props.onAddEditFloor({
                        user: props.user,
                        amount: props.editFloor.amount,
                        startDate: props.editFloor.startDate._d.toLocaleDateString(),
                        endDate: props.editFloor.endDate._d.toLocaleDateString(),
                        comment: props.editFloor.comment
                    });
                }
            break;
            default: return;
        }
    };

    const onDelete = (event) => {
        event.preventDefault();
        props.close();
        switch (props.editState) {
            case 'Subsidy Amount':
                if (props.hasSubsidy) {
                    props.onDeleteEditSubsidy(props.editSubsidy.id);
                }
                break;
            case 'Buy Out Amount': return;
            case 'Floor Amount':
                if (props.hasFloor) {
                    props.onDeleteEditFloor(props.editFloor.id);
                }
                break;
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

    let viewAmount = '';
    let viewStartDate = {
        date:  moment()
    };
    let viewEndDate = {
        date:  moment()
    };
    let viewComment = '';

    let viewDelete = false;
    switch (props.editState) {
        case 'Subsidy Amount':
            defaultAmount = props.editSubsidy.amount;
            defaultStartDate.date = props.editSubsidy.startDate;
            defaultComment = props.editSubsidy.comment;
            viewDelete = props.hasSubsidy;
            viewAmount = viewDelete ? props.editSubsidy.amount : null;
            viewStartDate = viewDelete ? props.editSubsidy.startDate : null;
            viewComment = viewDelete ? props.editSubsidy.comment : null;
            break;
        case 'Buy Out Amount':
            defaultAmount = props.editBuyOut.amount;
            defaultStartDate.date = props.editBuyOut.startDate;
            defaultComment = props.editBuyOut.comment;
            break;
        case 'Floor Amount':
            defaultAmount = props.editFloor.amount;
            defaultStartDate.date = props.editFloor.startDate;
            defaultEndDate.date = props.editFloor.endDate;
            defaultComment = props.editFloor.comment;
            viewDelete = props.hasFloor;
            viewAmount = viewDelete ? props.editFloor.amount : null;
            viewStartDate = viewDelete ? props.editFloor.startDate : null;
            viewEndDate = viewDelete ? props.editFloor.endDate : null;
            viewComment = viewDelete ? props.editFloor.comment : null;
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
                        {viewDelete ? viewEndDate :<DatePicker
                            date={defaultEndDate.date}
                            required
                            changeDate={(event) => EditEndDate(event)}
                        />}
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
                                readOnly={viewDelete}
                                value={viewDelete ?  viewAmount : defaultAmount}
                            />
                        </div>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Start Date</label>
                        <div>
                            {viewDelete ? viewStartDate :<DatePicker
                                date={defaultStartDate.date}
                                required
                                changeDate={(event) => EditStartDate(event)}
                            />}
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
                                readOnly={viewDelete}
                                value={viewDelete ?  viewComment : defaultComment}
                            />
                        </div>
                    </div>
                    <div className={bootStrapClasses['col-sm-12']}>
                        <button
                            className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}
                            style={viewDelete ? {display: 'none'} : {margin: '2px'}}>Save</button>
                        <button
                            className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}
                            style={viewDelete ? {margin: '2px'} : {display: 'none'}}
                            onClick={(event)=> onDelete(event)}>Delete</button>
                        <button
                            onClick={(event) => onCancel(event)}
                            className={[bootStrapClasses.btn, bootStrapClasses['btn-warning'],bootStrapClasses['col-sm-2']].join(' ')}
                            style={{margin: '2px', backgroundColor: '#FF9900'}}>Cancel</button>
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
        editSubsidyList: state.editSubsidies.editSubsidies,
        editFloorList: state.editFloors.editFloors,
        editBuyOutList: state.editBuyOuts.editBuyOuts,
        user: state.editUsers.currentUser,
        hasFloor: state.editFloors.currentUserHasFloor,
        hasSubsidy: state.editSubsidies.currentUserHasSubsidy
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onEditSubsidyAmount: (amount) => dispatch(actions.editSubsidyAmount(amount)),
        onEditSubsidyStartDate: (date) => dispatch(actions.editSubsidyStartDate(date)),
        onEditSubsidyComment: (comment) => dispatch(actions.editSubsidyComment(comment)),
        onAddEditSubsidy: (subsidyData) => dispatch(actions.postEditSubsidies(subsidyData)),
        onDeleteEditSubsidy: (id) => dispatch(actions.deleteEditSubsidy(id)),
        onSetHasSubsidyTrue: () => dispatch(actions.currentUserHasSubsidies()),
        onEditBuyOutAmount: (amount) => dispatch(actions.editBuyOutAmount(amount)),
        onEditBuyOutStartDate: (date) => dispatch(actions.editBuyOutStartDate(date)),
        onEditBuyOutComment: (comment) => dispatch(actions.editBuyOutComment(comment)),
        onEditFloorAmount: (amount) => dispatch(actions.editFloorAmount(amount)),
        onEditFloorStartDate: (date) => dispatch(actions.editFloorStartDate(date)),
        onEditFloorEndDate: (date) => dispatch(actions.editFloorEndDate(date)),
        onEditFloorComment: (comment) => dispatch(actions.editFloorComment(comment)),
        onAddEditFloor: (floorData) => dispatch(actions.postEditFloors(floorData)),
        onDeleteEditFloor: (id) => dispatch(actions.deleteEditFloor(id)),
        onSetHasFloorTrue: () => dispatch(actions.currentUserHasFloor())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(editBonusForm);