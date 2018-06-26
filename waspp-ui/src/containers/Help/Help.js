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
                <div className={[bootStrapClasses.card, bootStrapClasses['shadow-lg'], classes.cardStyle].join(' ')} >
                    <div className={bootStrapClasses['card-body']}>
                        <div className={[bootStrapClasses.card, classes.innerCardStyle].join(' ')}>
                            <div className={bootStrapClasses['card-body']}>
                                <h2 style={{color: '#173b61'}}>Jump To: </h2>
                                <div className={bootStrapClasses.row}>
                                    <span style={{marginRight: '10px'}}/>
                                    <a className={classes.anchorStyle} href='#ponies'>Ponies</a>
                                    <p>|</p>
                                    <a className={classes.anchorStyle} href='#unicorns'>Unicorns</a>
                                </div>
                            </div>
                        </div>
                        <div className={classes.FAQ}>
                            <h3 id='ponies'>Ponies</h3>
                            <FrequentIssues issues={Issues}/>
                            <h3 id='unicorns'>Unicorns</h3>
                            <FrequentIssues issues={Issues}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Help;