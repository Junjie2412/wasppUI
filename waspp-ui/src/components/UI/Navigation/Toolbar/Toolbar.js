import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import classes from './Toolbar.css';

const toolBar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <nav>
                <ul className={classes.Navigation}>
                    <NavigationItem
                        link="/"
                        exact>
                        Login
                    </NavigationItem>
                    <NavigationItem
                        link="/editUsers"
                        exact>
                        Edit Users
                    </NavigationItem>
                </ul>
            </nav>
        </header>
    );
}

export default toolBar;