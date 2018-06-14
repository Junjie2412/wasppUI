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
        <option className={classes.Options}
            key={data}>
            {data}
        </option>
    ));

    // const changeDetected = (event) =>{
    //     console.log('Changed: ' + event.target.value);
    // }

    return (
        <div className={classes.Search}>
            <select className={classes.SearchSelect} onChange={props.change}>
                {options}
            </select>
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
        </div>
    );
}

export default search