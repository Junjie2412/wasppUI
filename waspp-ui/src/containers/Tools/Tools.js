import React, {Component} from 'react';
import OPCODefaults from './OPCODefaults/OPCODefaults';

class Tools extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    <OPCODefaults />
                </h1>
            </div>
        );
    };
}

export default Tools;