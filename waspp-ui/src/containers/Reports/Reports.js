import React, {Component} from 'react';
import Report from '../../components/Report/Report';
import Payroll from '../../components/PayrollProcessing/Payrolls';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import classes from './Reports.css';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Reports extends Component {

    state = {
        currentReport: {

        }
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
                        <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')}>
                            Weekly Commissions Proof
                        </button>
                        <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')}>
                            Monthly Bonus Proof
                        </button>
                        <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')}>
                            Compensation Recap Report
                        </button>
                    </div>
                  </div>
                </div>
                <div className={bsClasses.row}>
                  <div className={bsClasses['col-md-12']}>

                      <ReactHTMLTableToExcel
                            id="test-table-xls-button"
                            className="download-table-xls-button"
                            table="table-to-xls"
                            filename="tablexls"
                            sheet="tablexls"
                            buttonText="Download Report"/>
                      <Payroll/>
                    </div>
                </div>
            </div>
        );
    };
}

export default Reports;
