import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './ToolsToolbar.css';

const toolsToolbar = () => {
    return(
        <div>
            <div className={classes.placement}>
            <NavLink to='/tools/OPCODefaults' className={classes.NavLink}>
                <button className={classes.button} >OPCODefaults</button>
            </NavLink>
     
            <NavLink to='/tools/CASI' className={classes.NavLink}>
                <button className={classes.button}>Unlock CASI Process Date</button>
            </NavLink>
            </div>
        </div>
    );
};

export default toolsToolbar;