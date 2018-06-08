import React from 'react';
import classes from './Search.css';

const search = (props) => {

    const options = props.elements.map(option => (
        <option
            key={option}>
            {option}
        </option>
    ));

    return (
        <div className={classes.Search}>
            <input className={classes.SearchText} type="text" placeholder={props.placeholder}/>
            <select className={classes.SearchSelect}>
                {options}
            </select>
        </div>
    );
}

export default search