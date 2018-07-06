import React, { Component } from 'react';
import DateInput from '../UI/DateInput/DateInput';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Report.css';
import { connect } from 'react-redux';

class MonthlyBonus extends Component {

  render() {

    const populateRows = this.props.monthlyBonusRows.map(data => (
      //TEMP
      <tr key={data.AS400ID}>
        <td>{data.AS400ID}</td>
        <td>{data.TerritoryDescription}</td>
        <td>{data.EmployeeID}</td>
        <td>{data.FileNumber}</td>
        <td>{data.TerritoryID}</td>
        <td>{data.BASE}</td>
        <td>{data.CommissionsAdvance}</td>
        <td>{data.Subsidy}</td>
        <td>{data.Comm}</td>
        <td>{data.BonusFloor}</td>
        <td>{data.Buyouts}</td>
        <td>{data.CalculatedPay}</td>
        <td>{data.Floor}</td>
        <td>{data.BonusMatrixAmount}</td>
        <td>{data.FloorPayments}</td>
        <td>{data.NetBonus}</td>
        <td>{data.AfterFloorAdjustment}</td>
        <td>{data.CheckTotal}</td>
        <td>{data.CommissionDate}</td>
      </tr>
    ));

    return (
      <div>
        <div className={bsClasses.row}>

          <div className={[bsClasses["col-md-12"]].join(' ')} >

            <h3> Monthly Bonus Proof </h3>
            <span>Week Ending: </span>
            <span style={{ display: "inline-block" }}><DateInput /></span>
          </div>
        </div>
        <div className={bsClasses.row}>
          <div className={[bsClasses["col-md-12"]].join(' ')}>
            <table className={[bsClasses.table, bsClasses["table-responsive"], bsClasses["table-bordered"], classes.align, classes.table].join(' ')} id="monthlyBonus">
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
                {populateRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    monthlyBonusRows: state.monthlyBonusProof.rows
  };
}

export default connect(mapStateToProps)(MonthlyBonus);
