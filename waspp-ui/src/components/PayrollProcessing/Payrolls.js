import React, {Component} from 'react';
import DateInput from '../UI/DateInput/DateInput';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Payrolls.css';

// const tableData = props.tableData.map(data => (
//     <tr>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//         <td>000000000</td>
//     </tr>
// ));



class Payrolls extends Component{
  render(){
    return (
      <div className={bsClasses.row} style={{margin:"auto"}}>

          <div classname={[bsClasses["col-md-12"], classes.align].join(' ')}>
            <DateInput/>
          </div>

          <div classname={[bsClasses["col-md-12"], classes.align].join(' ')}>
            <table className={[bsClasses.table, classes.table].join(' ')}>
              <thead>
                <tr>
                  <th>AS400 ID</th>
                  <th>Territory description</th>
                  <th>Employee ID</th>
                  <th>File Number</th>
                  <th>Territory ID</th>
                  <th>BASE</th>
                  <th>Advance</th>
                  <th>Subsidy</th>
                  <th>Adjustments</th>
                  <th>Floor</th>
                  <th>Bonus Matrix Amount</th>
                  <th>Period End</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>
                  <td>000</td>

                </tr>
              </tbody>
            </table>
          </div>
        </div>

    )
  }
}
export default Payrolls;
