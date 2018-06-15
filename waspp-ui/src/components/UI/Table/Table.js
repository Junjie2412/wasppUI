import React from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Table.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const table = (props) =>{

    const tableData = props.tableData.map(data => (
        <tr>
            <td>000000000</td>
            <td>000000000</td>
            <td>000000000</td>
        </tr>
    ));
    return(

        <Aux>
            <h3 className={classes.TableTitle}>{props.title}</h3>
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
