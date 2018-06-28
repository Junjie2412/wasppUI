import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DatePicker from '../../../UI/DateInput/DateInput';
import {connect} from 'react-redux';
import * as actions from '../../../../store/actions/index';
import moment from 'moment';

const editBonus = (props) => {

    let content = null;

    let defaultDate = {
        date:  moment()
    };

    const EditAmount = (event) => {
        switch (props.editState) {
            case 'Floor Amount': return props.onEditFloorAmount(event.target.value);
            default: return;
        }
    };

    const EditStartDate = (event) => {
        switch (props.editState) {
            case 'Floor Amount': return props.onEditFloorStartDate(event);
            default: return;
        }
    };

    const EditEndDate = (event) => {
        switch (props.editState) {
            case 'Floor Amount': return props.onEditFloorEndDate(event);
            default: return;
        }
    };

    const EditComment = (event) => {
        switch (props.editState) {
            case 'Floor Amount': return props.onEditFloorComment(event.target.value);
            default: return;
        }
    };

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
                            date={props.editState === 'Floor Amount' ? props.editFloors.endDate : defaultDate.date}
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
                <form >
                    <h1 style={{textAlign: 'center'}}>{props.title}</h1>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>{props.editState}</label>
                        <div>
                            <input
                                type='text'
                                className={bootStrapClasses['form-control']}
                                onChange={(event) => EditAmount(event)}
                                pattern='\d+(\.\d{2})?'
                                value={props.editState === 'Floor Amount' ? props.editFloors.amount : ('')}
                            />
                        </div>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Start Date</label>
                        <div>
                            <DatePicker
                                date={props.editState === 'Floor Amount' ? props.editFloors.startDate : defaultDate.date}
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
                                value={props.editState === 'Floor Amount' ? props.editFloors.comment : ('')}
                            />
                        </div>
                    </div>
                </form>
                <div className={bootStrapClasses['col-sm-12']}>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                    <button onClick={props.close}
                    className={[bootStrapClasses.btn, bootStrapClasses['btn-warning'],bootStrapClasses['col-sm-2']].join(' ')}
                    style={{margin: '4px', backgroundColor: '#FF9900'}}>Cancel</button>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}>Delete</button>
                </div>
            </div>
        );

};

const mapStateToProps = state => {
    return {
        editFloors: state.editFloors.currentEditFloor
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onEditFloorAmount: (amount) =>dispatch(actions.editFloorAmount(amount)),
        onEditFloorStartDate: (date) =>dispatch(actions.editFloorStartDate(date)),
        onEditFloorEndDate: (date) =>dispatch(actions.editFloorEndDate(date)),
        onEditFloorComment: (comment) =>dispatch(actions.editFloorComment(comment)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(editBonus);