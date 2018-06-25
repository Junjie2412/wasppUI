import React, {Component} from 'react';
import FrequentIssues from './FrequentIssues/FrequentIssues';
import { Issues } from '../../shared/Issues';
import classes from './Help.css';

class Help extends Component {

    render() {
      
        return (
            <div className={classes.Help}>
                <h1 className={classes.Header}>
                    Help
                </h1>
                <div className={classes.FAQ}>
                    <FrequentIssues issues={Issues}/>
                </div>
            </div>
        );
    };
}

export default Help;