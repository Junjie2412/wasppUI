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

                <FrequentIssues issues={Issues}/>
            </div>
        );
    };
}

export default Help;