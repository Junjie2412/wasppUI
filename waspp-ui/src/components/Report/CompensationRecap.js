import React, { Component } from 'react';
import DateInput from '../UI/DateInput/DateInput';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Report.css';
import { connect } from 'react-redux';


class CompensationRecap extends Component {
  render() {

    const populateRows = this.props.compensationRows.map(data => (
      //TEMP
      <tr key={data.DSM}>
        <td>{data.DSM}</td>
        <td>{data.MAName}</td>
        <td>{data.Sales}</td>
        <td>{data.SalesGrowth}</td>
        <td>{data.GPTaxDollars}</td>
        <td>{data.GPTaxGrowth}</td>
        <td>{data.Pieces}</td>
        <td>{data.PieceGrowth}</td>
        <td>{data.Base}</td>
        <td>{data.Commission}</td>
        <td>{data.Subsidy}</td>
        <td>{data.Floor}</td>
        <td>{data.Buyout}</td>
        <td>{data.TotalWeeklyCompensation}</td>
        <td>{data.Weeks}</td>
        <td>{data.Pieces}</td>
        <td>{data.WithoutBonus}</td>
        <td>{data.Bonus}</td>
        <td>{data.TotalCompPerPiece}</td>
      </tr>
    ))

    return (
      <div>
        <div className={bsClasses.row}>

          <div className={[bsClasses["col-md-12"]].join(' ')} >

            <h3>Compensation Recap Report</h3>
            <span>Week Ending: </span>
            <span style={{ display: "inline-block" }}><DateInput /></span>
          </div>
        </div>
        <div className={bsClasses.row}>
          <div className={[bsClasses["col-md-12"]].join(' ')}>
            <table className={[bsClasses.table, bsClasses["table-responsive"], bsClasses["table-bordered"], classes.align, classes.table].join(' ')} id="compensationRecap">
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
    compensationRows: state.compensationRecap.rows
  };
}

export default connect(mapStateToProps)(CompensationRecap);
