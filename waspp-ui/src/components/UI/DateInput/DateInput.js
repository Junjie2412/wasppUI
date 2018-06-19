import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import classes from 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class DateInput extends Component {
    constructor(props){
        super(props)
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(date){
        //console.log(date._d.toLocaleDateString());
        //this.setState({startDate: date});
        this.props.onChangeDate(date);
    }

    render(){
        return <DatePicker selected={this.props.date}
        onChange={this.handleChange} className={classes['react-datepicker-popper']}/>
    }
}

const mapStateToProps = state => {
    return {
        date: state.editAdjustments.currentAdjustment.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeDate: (date) => dispatch(actions.editAdjustmentDate(date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateInput);