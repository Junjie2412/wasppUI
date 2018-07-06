import React, {Component} from 'react';
import OPCODefaults from './OPCODefaults/OPCODefaults';
import ToolsToolbar from '../../components/UI/Navigation/ToolsToolbar/ToolsToolbar';
import { Route } from 'react-router-dom';
import classes from './Tools.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';


class Tools extends Component {
    componentDidMount(){
        this.props.onFetchOpcodeDefaults();
    }
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

const mapStateToProps = state =>{
    return{
        opcoInformation: state.opcoDefaults.opcoInformation
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchOpcodeDefaults: () => dispatch(actions.fetchOPCODefaults())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);