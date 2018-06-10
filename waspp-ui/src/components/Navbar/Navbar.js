import React from 'react';
import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const navbar = () =>{
    return (
    //     <nav className="navbar navbar-expand-sm navbar-light bg-primary" >
    //         {/* <a className="navbar-brand" href="#" style={{color: 'white'}}>Sysco</a>
    //         <ul className="navbar-nav ml-auto">            
    //             <li><i className="nav-item nav-link fas fa-user" style={{color: 'white', display: 'flex', flexFlow: 'row'}}> User</i></li>
    //             <li><i className="nav-item nav-link fas fa-power-off"  style={{color: 'white', display: 'flex', flexFlow: 'row'}}></i></li>
    //         </ul> */}
    //     </nav>

    <nav className={[classes.navbar, classes['navbar-expand-sm'], classes['navbar-light'], classes['bg-primary']].join(' ')}>
        <a classes={[classes['navbar-brand']]} href="/" style={{color: 'white'}}>Sysco</a>
        <ul className={[classes['navbar-nav'], classes['ml-auto']].join(' ')}>
            <li><i className={[classes['nav-item'], classes['nav-link'], 'fas', 'fa-user'].join(' ')} style={{color: 'white'}}> User</i></li>
            <li><i className={[classes['nav-item'], classes['nav-link'], 'fas', 'fa-power-off'].join(' ')}  style={{color: 'white'}}></i></li>
        </ul>
    </nav>  

        

    //   <button className={[classes.btn, classes['btn-primary']].join(' ')}>dsds</button> 
        


    );
};

export default navbar;