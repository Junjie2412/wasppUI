import React from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Table.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';

const table = (props) =>{

    const tableData = props.tableData.map(data => (
        <tr key={data.id}
            className={data.id===props.selectedAdjustment.id ? classes.Selected : classes.TableTr}
            onClick={(adj) => props.onSelectAdjustment(data)}>
            <td>{data.amount}</td>
            <td>{data.weekEndDate}</td>
            <td>{data.comment}</td>
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
        selectedAdjustment: state.editAdjustments.selectedAdjustment
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectAdjustment: (adjustment) => dispatch(actions.selectAdjustment(adjustment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(table);
