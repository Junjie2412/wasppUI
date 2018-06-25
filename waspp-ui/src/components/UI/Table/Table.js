import React from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Table.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import DateInput from '../../UI/DateInput/DateInput';

const table = (props) => {

    const tableData = props.tableData.map(data => (
        <tr key={data.id}
            className={props.isAfter ? (data.id===props.selectedAfterFloorAdjustment.id ? classes.Selected : classes.TableTr)
                : (data.id===props.selectedAdjustment.id ? classes.Selected : classes.TableTr)}
            onClick={props.isAfter ? ((adj) => props.onSelectAfterFloorAdjustment(data)):((adj) => props.onSelectAdjustment(data))}>
            <td><input
                className={props.isAfter ? (data.id===props.selectedAfterFloorAdjustment.id ? classes.InputSelected : classes.Input)
                    : (data.id===props.selectedAdjustment.id ? classes.InputSelected : classes.Input)}
                readOnly
                value={data.amount}/></td>
            <td><div className={props.isAfter ? (data.id===props.selectedAfterFloorAdjustment.id ? classes.DateSelected : classes.Date)
                : (data.id===props.selectedAdjustment.id ? classes.DateSelected : classes.Date)}>
                <DateInput/></div>
                {data.weekEndDate}
            </td>
            <td><textarea
                className={props.isAfter ? (data.id===props.selectedAfterFloorAdjustment.id ? classes.TextAreaSelected : classes.TextArea)
                    : (data.id===props.selectedAdjustment.id ? classes.TextAreaSelected : classes.TextArea)}
                value={data.comment}/></td>
        </tr>
    ));
    return(

        <Aux>
            <table className={[bootStrapClasses.table, classes.Table].join(' ')}>
                <thead>
                    <tr className={classes.TableHeader}>
                        <th>Adjustments</th>
                        <th>Week Ending</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody className={classes.TableBody}>
                {tableData}
                </tbody>
            </table>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        selectedAdjustment: state.editAdjustments.selectedAdjustment,
        selectedAfterFloorAdjustment: state.editAfterFloorAdjustments.selectedAdjustment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectAdjustment: (adjustment) => dispatch(actions.selectAdjustment(adjustment)),
        onSelectAfterFloorAdjustment: (adjustment) => dispatch(actions.selectAfterFloorAdjustment(adjustment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(table);
