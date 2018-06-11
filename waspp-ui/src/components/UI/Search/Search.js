import React from 'react';
import classes from './Search.css';

const search = (props) => {

    const options = props.options.map(option => (
        <option
            key={option}>
            {option}
        </option>
    ));

    const dataList = props.dataList.map(data => (
        <option key={data}>
            {data}
        </option>
    ));

    return (
        <div className={classes.Search}>
            <input
                className={classes.SearchText}
                type="text"
                placeholder={props.placeholder}
                list="data"
                value={props.value}
                onChange={props.changeText}/>
                <datalist id="data">
                    {dataList}
                </datalist>
            <select className={classes.SearchSelect} onChange={props.change}>
                {options}
            </select>
        </div>
    );
}

export default search