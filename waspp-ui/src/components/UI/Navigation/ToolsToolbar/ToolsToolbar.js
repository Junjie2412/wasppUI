import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './ToolsToolbar.css';

const toolsToolbar = () => {
    return(
        <div>
            <NavLink to='/tools/OPCODefaults' className={classes.NavLink}><button className={classes.button} >OPCODefaults</button></NavLink>
            <NavLink to='/tools/CASI'><button className={classes.button}>Unlock CASI Process Date</button></NavLink>
        </div>
    );
};

export default toolsToolbar;