import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import classes from 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

class DateInput extends Component {
    constructor(props){
        super(props)
        this.state={
            date: moment()
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(newDate){
        this.setState({date: newDate});
    }

    render(){
        return <DatePicker selected={this.state.date}
        onChange={this.handleChange} className={classes['react-datepicker-popper']}/>
    }
}

export default DateInput;