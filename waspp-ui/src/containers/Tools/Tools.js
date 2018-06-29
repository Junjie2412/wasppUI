import React, {Component} from 'react';
import OPCODefaults from './OPCODefaults/OPCODefaults';
import ToolsToolbar from '../../components/UI/Navigation/ToolsToolbar/ToolsToolbar';
import { Route } from 'react-router-dom';
import classes from './Tools.css';

class Tools extends Component {
    render() {
        return (
                <div>
                    <h1 className={classes.header}>Tools</h1>
                    <ToolsToolbar></ToolsToolbar>
                    <Route path='/tools/OPCODefaults' exact component={OPCODefaults} />
                </div>
        );
    };
}

export default Tools;