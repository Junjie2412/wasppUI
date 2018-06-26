import React, {Component} from 'react';
import FrequentIssues from './FrequentIssues/FrequentIssues';
import { Issues } from '../../shared/Issues';
import classes from './Help.css';
import bootStrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Help extends Component {

    render() {
      
        return (
            <div className={classes.Help}>
                <h1 className={classes.Header}>
                    Help
                </h1>
                <div className={[bootStrapClasses.card, classes.cardStyle].join(' ')}>
                    <div className={bootStrapClasses['card-body']}>
                        <div className={classes.FAQ}>
                            <h3>Ponies</h3>
                            <FrequentIssues issues={Issues}/>
                            <h3>Unicorns</h3>
                            <FrequentIssues issues={Issues}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Help;