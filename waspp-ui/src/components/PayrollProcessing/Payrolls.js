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
      <div>
        <div className={bsClasses.row}>

          <div className={[bsClasses["col-md-12"]].join(' ')} >

            <h1> Weekly Commissions Proof</h1>
            <span>Week Ending: </span>
            <span style={{display:"inline-block"}}><DateInput/></span>
          </div>
        </div>
        <div className={bsClasses.row}>
          <div className={[bsClasses["col-md-12"]].join(' ')}>
            <table className={[bsClasses.table,bsClasses["table-responsive"], classes.align, classes.table].join(' ')} id="table-to-xls">
              <thead>
                <tr>
                  <th rowSpan="2">AS400 ID</th>
                  <th rowSpan="2">Territory description</th>
                  <th rowSpan="2">Employee ID</th>
                  <th rowSpan="2">File Number</th>
                  <th rowSpan="2">Territory ID</th>
                  <th rowSpan="2">BASE</th>
                  <th rowSpan="2">Commissions Advance</th>
                  <th rowSpan="2">Subsidy</th>
                  <th colSpan="3">Adjustments</th>
                  <th rowSpan="2">Calculated Pay</th>
                  <th rowSpan="2">Floor</th>
                  <th rowSpan="2">Bonus Matrix Amount</th>
                  <th colSpan="2">Period End</th>
                  <th rowSpan="2">After Floor Adjustment</th>
                  <th rowSpan="2">Check Total</th>
                  <th rowSpan="2">Commission Date</th>

                </tr>
                <tr>
                  <th>Comm</th>
                  <th>Bonus Floor</th>
                  <th>Buy outs</th>
                  <th>Floor Payments</th>
                  <th>Net Bonus</th>
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
      </div>

    )
  }
}
export default Payrolls;
