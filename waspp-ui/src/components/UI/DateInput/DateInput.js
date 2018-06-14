import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import classes from 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

class DateInput extends Component {
    constructor(props){
        super(props)
        this.state={
            startDate: moment()
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(date){
        this.setState({startDate: date});
    }

    render(){
        return <DatePicker selected={this.state.startDate}
        onChange={this.handleChange} className={classes['react-datepicker-popper']}/>
    }
}

export default DateInput;