import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './ToolsToolbar.css';
import {connect} from 'react-redux';

const toolsToolbar = (props) => {
    return(
        <div>
            <div className={classes.placement}>
            <NavLink to='/tools/OPCODefaults' className={classes.NavLink}>
                <button className={classes.button} >OPCODefaults</button>
            </NavLink>

            <NavLink to='/tools/CASI' className={classes.NavLink}>
                <button className={classes.button}>Unlock CASI Process Date</button>
            </NavLink>

            <NavLink to='/tools/sendFlights' className={classes.NavLink}>
                <button className={classes.button} onClick = {() => {sendFlights(props.bonusFlight)}}> Send Flights to IC </button>
            </NavLink>
            </div>
        </div>
    );
};

const sendFlights = (flight) => {
  console.log("sending ",flight);
}

const mapStateToProps = (state) => {
  return{
    bonusFlight: state.editEmployee.currentEmployee.BonusFlight
  }
}

export default connect(mapStateToProps)(toolsToolbar);
