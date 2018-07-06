
# FOR THE OFFSHORE TEAM, READ THIS BEFORE YOU START DEVELOPPING
# ALL CODE IS BEING PUSHED TO THE DEVELOPMENT BRANCH

# INSTALLS:

Do not forget to run:

    npm install
    
Before you begin, just so the project runs on npm.
There are other outside frame works that we used as well.
If your project does not work, run the following installs.

    npm install --save react-router-dom
    npm install --save redux
    npm install --save react-redux
    npm install --save bootstrap
    npm install --save axios
    npm install --save moment
    npm install --save react-datepicker
    
If we are forgetting something, or there are other things you would liek to install, please let me know.

# CSS MODULES
    
We will be using css modules in this project (instead of alternatives like Radium).
CSS modules allows us to add CSS files to a project without it being done globally.
If you are going to use CSS in the project, here is how it works.
You first must import your CSS into your project like this:

    import classes from './Toolbar.css';

Whenever you add a className to a html element, you will now have to do this:

    <div className={classes.Toolbar} />
    
*Note classes is not a reserved word.  You can actually use any word you want, we just use classes because it is good practice*

You can also use bootstrap this way.  However, you must import bootstrap from the nodemodules folder, like so:

    import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    
The number of '../' may change depending on how far your folder is from your node modules.
Some bootstrap classes have a - in their name.  To use those types of classes, you would have to do something like this:

    <div className={classes[btn-grp]} /div>

If you want to add more than one class to an html element, you must put them in a list and join them with a ' '.

    <nav className={[classes.navbar, classes['navbar-expand-sm'], classes['navbar-light'], classes['bg-primary']].join(' ')}>

You can also mix and match bootstrap classes with regular classes, if you need.
You would have to import them with different names though.  For example:

    import classes from './Toolbar.css';
    import bootStrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    
    
    <div className={[classes.Toolbar, bootStrapClasses['bg-primary']].join(' ')}/>

If you have anymore questions about CSS Modules, please let me know.

# Fake Database

We have a fake database that stores fake data from firebase just for testing.  The below is the link to it.

https://console.firebase.google.com/project/waspp-fake-data/database/waspp-fake-data/data

We are using axios to retrieve that data.

# Folder Structure

Here is our current Folder Structure:

In containers, we have each piece of the pages in our Toolbar. These include Reports, Payroll Processing, Edit Users, Tools, Help, and Auth (For Login/Logout purposes).

In shared, we just have shared information.  We only have Links for now.  (this is a link to the database

In hoc, we plan to have Higher Order Components.

In assets, we will have things such as logos, UI designs, pictures, etc.

In components, we are working on a lot of things.
- The Edit Users folder contains all submodules of the Edit Users container.  We are working on that at the moment.
- Reports/Tables will contain table components that are used to generate reports.
- The Navbar is the topmost element of the screen
- UI contains a lot of UI elements.  Under Navigation, we have a Toolbar and subcomponents of that.  Under Search, we have created a component with a search and a dropdown menu (you can see an example of this in the Edit Users Page).  Modal and Backdrop work off of each other to create a small sub-window for editting (you can test this by clicking Edit Subsidies on Edit Users).

# Thank you for Reading

If you have any questions, send me a message.
