import React, {Component} from 'react';
import classes from './Login.css';

class Login extends Component {

    state = {
        username: 'Steve',
        password: 'Stoove'
    }

    loginHandler() {

    }

    render() {
        return (
            <div className={classes.Login}>
                <form onSubmit={this.loginHandler}>
                    Username: <input/>
                    <br/>
                    Password: <input/>
                    <br/>
                    <button>Login</button>
                </form>
            </div>
        )
    }

};

export default Login;