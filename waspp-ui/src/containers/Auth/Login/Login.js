import React, {Component} from 'react';
import './Login.css';

class Login extends Component {

    state = {
        username: 'Steve',
        password: 'Stoove'
    }

    loginHandler() {

    }

    render() {
        return (
            <div>
                <form className=".Login" onSubmit={this.loginHandler}>
                    Username: <input/>
                    <br/>
                    Password: <input/>
                    <br/>
                    <button>SUBMIT</button>
                </form>
            </div>
        )
    }

};

export default Login;