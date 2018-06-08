import React from 'react';
import classes from './Search.css';

const search = (props) => {
    return (
        <div className={classes.Search}>
            <input className={classes.SearchText} type="text" placeholder={props.placeholder}/>
            <select className={classes.SearchSelect}>
                <option>12345678</option>
            </select>
        </div>
    );
}

export default search