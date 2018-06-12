import React, {Component} from 'react';
import ReportNav from '../../components/Report/ReportNav/ReportNav';
import Report from '../../components/Report/Report';

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
                <ReportNav/>
                <Report/>
            </div>
        );
    };
}

export default Reports;