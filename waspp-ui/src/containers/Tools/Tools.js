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

{/* <div>
                <h1 className={classes.header}>Tools</h1>
                <ul role='tablist' className={[bootStrapClasses.nav, bootStrapClasses['nav-tabs']].join(' ')}>
                    <li className={bootStrapClasses['nav-item']}>
                        <a id='OPCODefaults-tab' data-toggle='tab' href='#OPCODefaults' role='tab' aria-controls="OPCODefaults" aria-selected="true"
                        className={[bootStrapClasses['nav-link'], bootStrapClasses.active].join(' ')}>OPCODefaults</a>
                    </li>
                    <li className={bootStrapClasses['nav-item']}>
                        <a id='CASI-tab' data-toggle='tab' href='#CASI' role='tab' aria-controls="CASI" aria-selected="false"
                        className={bootStrapClasses['nav-link']}>Unlock CASI Process Date</a>
                    </li>
                </ul>
                <div className={bootStrapClasses['tab-content']}>
                    <div className={[bootStrapClasses['tab-pane'], bootStrapClasses.fade, bootStrapClasses.show, bootStrapClasses.active].join(' ')}
                    id='OPCODefaults' role='tabpanel' aria-labelledby='OPCODefaults-tab'>
                        <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                            <OPCODefaults />
                        </h1>
                    </div>
                    <div className={[bootStrapClasses['tab-pane'], bootStrapClasses.fade].join(' ')}
                    id='CASI' role='tabpanel' aria-labelledby='CASI-tab'>
                        <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                            TEST
                        </h1>
                    </div>
                </div>
            </div> */}