import React, {Component} from 'react';
import DateInput from '../UI/DateInput/DateInput';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Report.css';


class CompensationRecap extends Component{
  render(){
    return (
      <div>
        <div className={bsClasses.row}>

          <div className={[bsClasses["col-md-12"]].join(' ')} >

            <h3>Compensation Recap Report</h3>
            <span>Week Ending: </span>
            <span style={{display:"inline-block"}}><DateInput/></span>
          </div>
        </div>
        <div className={bsClasses.row}>
          <div className={[bsClasses["col-md-12"]].join(' ')}>
            <table className={[bsClasses.table,bsClasses["table-responsive"], bsClasses["table-bordered"], classes.align, classes.table].join(' ')} id="compensationRecap">
              <thead>

              <tr>
                <th rowSpan='3'>DSM</th>
                <th rowSpan='3'>MA Name</th>
                <th colSpan='13'>Compensation Weekly Averages</th>
                <th colSpan='3'>Totals</th>
                <th rowSpan='3'>Total Comp Per Piece</th>
              </tr>
              <tr>
                <th rowSpan='2'>Sales</th>
                <th rowSpan='2'>Sales Growth</th>
                <th rowSpan='2'>GP Tax Dollars</th>
                <th rowSpan='2'>GP Tax Growth</th>
                <th rowSpan='2'>Pieces</th>
                <th rowSpan='2'>Piece Growth</th>
                <th rowSpan='2'>Base</th>
                <th rowSpan='2'>Commission</th>
                <th rowSpan='2'>Subsidy</th>
                <th rowSpan='2'>Floor</th>
                <th rowSpan='2'>Buyout</th>
                <th rowSpan='2'>Total Weekly Compensation</th>
                <th rowSpan='2'>Weeks</th>
                <th rowSpan='2'>Pieces</th>
                <th rowSpan='1'>Compensation</th>
                <th rowSpan='2'>Bonus</th>
              </tr>
              <tr>
                <th>w/o Bonus</th>
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
export default CompensationRecap;
