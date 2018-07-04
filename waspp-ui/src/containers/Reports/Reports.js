import React, {Component} from 'react';
import Report from '../../components/Report/Report';
import Payroll from '../../components/PayrollProcessing/Payrolls';
import MonthlyBonus from '../../components/Report/MonthlyBonus';
import CompensationRecap from '../../components/Report/CompensationRecap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import classes from './Reports.css';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Reports extends Component {
    constructor(props){
      super(props);
      this.state = {
          monthlyBonus:"none",
          weeklyCommission:"none",
          compensationRecap:"none"
      }
      this.weeklyCommission=this.weeklyCommission.bind(this);
      this.monthlyBonus=this.monthlyBonus.bind(this);
      this.compensationRecap=this.compensationRecap.bind(this);
    }

    weeklyCommission(){
      this.setState({
          monthlyBonus:"none",
          weeklyCommission:"block",
          compensationRecap:"none"
      })
      console.log(this.state)
    }

    monthlyBonus(){
      this.setState({
          monthlyBonus:"block",
          weeklyCommission:"none",
          compensationRecap:"none"
      })
      console.log(this.state)
    }

    compensationRecap(){
      this.setState({
          monthlyBonus:"none",
          weeklyCommission:"none",
          compensationRecap:"block"
      })
      console.log(this.state)
    }

    render() {

        return (
            <div className={bsClasses["container-fluid"]}>
                <div className={bsClasses.row}>
                  <div className={bsClasses['col-md-12']}>
                    <h1 style={{textAlign: 'center', marginTop: '20px',color: '#006699'}}>
                      Reports
                    </h1>
                  </div>
                </div>
                <div className={bsClasses.row}>
                  <div className={bsClasses['col-md-6']}>
                    <div className={bsClasses['btn-group']}>
                        <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')} onClick={this.weeklyCommission}>
                            Weekly Commissions Proof
                        </button>
                        <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')} onClick={this.monthlyBonus}>
                            Monthly Bonus Proof
                        </button>
                        <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')} onClick={this.compensationRecap}>
                            Compensation Recap Report
                        </button>
                    </div>
                  </div>
                </div>
                <div className={bsClasses.row} style={{display:this.state.weeklyCommission}}>
                  <div className={bsClasses['col-md-12']}>

                      <ReactHTMLTableToExcel
                            className={[bsClasses['btn-sm'], classes.ButtonGroup].join(' ')}
                            table="weeklyCommission"
                            filename="Weekly Commission"
                            sheet="Weekly Commission"
                            buttonText="Download Report"/>
                      <Payroll/>
                    </div>
                  </div>

                  <div className={bsClasses.row} style={{display:this.state.monthlyBonus}}>
                    <div className={bsClasses['col-md-12']}>

                        <ReactHTMLTableToExcel
                              className={[bsClasses['btn-sm'], classes.ButtonGroup].join(' ')}
                              table="monthlyBonus"
                              filename="Monthly Bonus"
                              sheet="Monthly Bonus"
                              buttonText="Download Report"/>
                        <MonthlyBonus/>
                      </div>
                  </div>
                  <div className={bsClasses.row} style={{display:this.state.compensationRecap}}>
                    <div className={bsClasses['col-md-12']}>

                        <ReactHTMLTableToExcel
                              className={[bsClasses['btn-sm'], classes.ButtonGroup].join(' ')}
                              table="compensationRecap"
                              filename="Compensation Recap"
                              sheet="Compensation Recap"
                              buttonText="Download Report"/>
                        <CompensationRecap/>
                      </div>
                  </div>
              </div>
        );
    };
}

export default Reports;
