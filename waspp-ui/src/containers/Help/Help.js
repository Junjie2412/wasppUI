import React, {Component} from 'react';
import FrequentIssues from '../../components/Help/FrequentIssues/FrequentIssues';
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
                <div className={[bootStrapClasses.card, bootStrapClasses['shadow-lg'], classes.cardStyle].join(' ')} >
                    <div className={bootStrapClasses['card-body']}>
                        <div className={[bootStrapClasses.card, classes.innerCardStyle].join(' ')}>
                            <div className={bootStrapClasses['card-body']}>
                                <h2 style={{color: 'white'}}>Jump To: </h2>
                                <div className={bootStrapClasses.row}>
                                    <span style={{marginRight: '10px'}}/>
                                    <a className={classes.anchorStyle} href='#ponies'>Payroll Processing</a>
                                    <p>|</p>
                                    <a className={classes.anchorStyle} href='#unicorns'>Editing Users</a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.FAQ}>
                            <h3 id='ponies'>Payroll Processing</h3>
                            <FrequentIssues issues={Issues}/>
                            <h3 id='unicorns'>Editing Users</h3>
                            <FrequentIssues issues={Issues}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Help;