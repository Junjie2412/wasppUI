import React, {Component} from 'react';
import classes from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Login extends Component {

    state = {
        username: 'Steve',
        password: 'Stoove'
    }

    loginHandler() {

    }

    render() {
        return (
                <div className={[classes['w-25'], classes['mx-auto']].join(' ')}>
                    <div className={[classes.card]}>
                        <div className={[classes['card-body']]}>
                            <form onSubmit={this.loginHandler}>
                            <div className={[classes['form-group']]}>
                                    <label>Username:</label>
                                    <input type='text' className={[classes['form-control']]} placeholder='Username'></input>
                            </div>
                            <div className={[classes['form-group']]}>
                                    <label>Password:</label>
                                    <input type='text' className={[classes['form-control']]} placeholder='Password'></input>
                            </div>
                            <button className={[classes.btn, classes['btn-primary']].join(' ')}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }

};

export default Login;