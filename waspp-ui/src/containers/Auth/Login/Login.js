import React, {Component} from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



class Login extends Component {

    state = {
        username: 'Steve',
        password: 'Stoove'
    }

    loginHandler() {

    }

    render() {
        return (
                <div className={[bootStrapClasses['w-25'], bootStrapClasses['mx-auto']].join(' ')}>
                    <div className={[bootStrapClasses.card]}>
                        <div className={[bootStrapClasses['card-body']]}>
                            <form onSubmit={this.loginHandler}>
                            <div className={[bootStrapClasses['form-group']]}>
                                    <label>Username:</label>
                                    <input type='text' className={[bootStrapClasses['form-control']]} placeholder='Username'></input>
                            </div>
                            <div className={[bootStrapClasses['form-group']]}>
                                    <label>Password:</label>
                                    <input type='text' className={[bootStrapClasses['form-control']]} placeholder='Password'></input>
                            </div>
                            <button className={[bootStrapClasses.btn, bootStrapClasses['btn-primary']].join(' ')}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }

};

export default Login;