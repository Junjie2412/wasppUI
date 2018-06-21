import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import classes from 'react-datepicker/dist/react-datepicker-cssmodules.min.css';

class DateInput extends Component {
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(date){
        //console.log(date._d.toLocaleDateString());
        //this.setState({startDate: date});
        this.props.changeDate(date);
    }

    render(){
        return <DatePicker selected={this.props.date}
        onChange={this.handleChange} className={classes['react-datepicker-popper']}/>
    }
}

export default DateInput;