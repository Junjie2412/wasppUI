import React from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Table.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const table = (props) =>{

    const tableData = props.tableData.map(data => (
        <tr key={data.id}>
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
                <tbody style={{backgroundColor: 'white'}}>
                {tableData}
                </tbody>
            </table>
        </Aux>
    );
};

export default table;
