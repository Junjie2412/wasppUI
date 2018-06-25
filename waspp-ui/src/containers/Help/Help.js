import React, {Component} from 'react';
import FrequentIssues from './FrequentIssues/FrequentIssues';
import { Issues } from '../../shared/Issues';

class Help extends Component {

    render() {
      
        return (
            <div>                
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    Help
                </h1>
                <div style={{overflow: 'auto'}}>
                    <FrequentIssues issues={Issues}/>
                </div>
            </div>
        );
    };
}

export default Help;