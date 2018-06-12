import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './ReportNav.css';

const reportNav = (props) => {

    return (
        <Aux>
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
        </Aux>
    );

}

export default reportNav;