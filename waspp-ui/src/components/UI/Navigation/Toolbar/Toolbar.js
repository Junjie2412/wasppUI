import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';

import classes from './Toolbar.css';

const toolBar = (props) => {

    return (
        <header className={classes.Toolbar}>
            <nav>
                <ul className={classes.Navigation}>
                    <NavigationItem
                        link="/payrollProcessing"
                        exact>
                        Payroll Processing
                    </NavigationItem>
                    <NavigationItem
                        link="/editUsers"
                        exact>
                        Edit Users
                    </NavigationItem>
                    <NavigationItem
                        link="/reports"
                        exact>
                        Reports
                    </NavigationItem>
                    <NavigationItem
                        link="/tools"
                        exact>
                        Tools
                    </NavigationItem>
                    <NavigationItem
                        link="/help"
                        exact>
                        Help
                    </NavigationItem>
                </ul>
            </nav>
        </header>
    );
}

export default toolBar;