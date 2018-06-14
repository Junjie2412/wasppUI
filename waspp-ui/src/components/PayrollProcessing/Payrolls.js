import React, {Component} from 'react';
import classes from '../Report/Report.css';
import Table from '../UI/Table/Table';

const payroll = (props) => {
    return (
        <div className={classes.Table}>
            <Table tableData={['','','']} title={props.title}/>
        </div>
    );
}

export default payroll;