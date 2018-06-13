import React, {Component} from 'react';
import Report from '../../components/Report/Report';
import classes from './Reports.css';

class Reports extends Component {

    state = {
        currentReport: {

        }
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    Reports
                </h1>
                <div className={classes.ButtonGroup}>
                    <button className={classes.Button}>
                        Weekly Commissions Proof
                    </button>
                    <button className={classes.Button}>
                        Monthly Bonus Proof
                    </button>
                    <button className={classes.Button}>
                        Compensation Recap Report
                    </button>
                </div>
                <Report title={'Compensation Recap Report'}/>
            </div>
        );
    };
}

export default Reports;