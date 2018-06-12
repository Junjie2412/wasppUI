import React, {Component} from 'react';
import ReportNav from '../../components/Report/ReportNav/ReportNav';

class Reports extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    Reports
                </h1>
                <ReportNav/>
            </div>
        );
    };
}

export default Reports;