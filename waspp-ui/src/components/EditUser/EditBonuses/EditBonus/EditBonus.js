import React from 'react';
import classes from './EditBonus.css';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const editBonus = (props) => {

    let content = null;

    switch (props.version) {
        case 'version 1':
            content = (
                <div>
                    <div className={bootStrapClasses.row}>
                        <p>Open Amount</p><input type='text'/>
                    </div>
                    <div className={bootStrapClasses.row}>
                        <p>Weeks Left</p><input type='text'/>
                    </div>
                </div>
            );
            break;
        case 'version 2':
            content = (
                <div className={bootStrapClasses.row}>
                    <p>End Date</p><input type='text'/>
                </div>
            );
            break;
        default:
            content = null;
            break;
    }

        return (
            <div className={classes.EditBonus}>
                <h1>{props.title}</h1>
                <div className={bootStrapClasses.row}>
                    <p>{props.editState}</p><input type='text'/>
                </div>
                <div className={bootStrapClasses.row}>
                    <p>Start Date</p><input type='text'/>
                </div>
                {content}
                <div className={bootStrapClasses.row}>
                    <p>Comments</p><input type='text'/>
                </div>
                <button>Save</button>
                <button>Cancel</button>
                <button>Delete</button>
            </div>
        );

}

export default editBonus;