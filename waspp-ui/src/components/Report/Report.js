import React from 'react';
import classes from './Report.css';
import Table from '../UI/Table/Table';

const report = (props) => {
    return (
        <div className={classes.Table}>
            <Table tableData={['','','']} title={props.title}/>
        </div>
    );
}

export default report;