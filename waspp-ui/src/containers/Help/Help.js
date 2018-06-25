import React, {Component} from 'react';
import FrequentIssues from './FrequentIssues/FrequentIssues';
import { Issues } from '../../shared/Issues';

class Help extends Component {

    render() {
      
        return (
            <div style={{height: '100%'}}>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    Help
                </h1>
                <div style={{overflow: 'auto', height: '81%', width: '100%'}}>
                    <FrequentIssues issues={Issues}/>
                </div>
            </div>
        );
    };
}

export default Help;