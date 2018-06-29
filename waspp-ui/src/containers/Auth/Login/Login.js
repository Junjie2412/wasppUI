import React, {Component} from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Login.css';
import Aux from '../../../hoc/Auxiliary/Auxiliary';



class Login extends Component {

    state = {
        username: 'Steve',
        password: 'Stoove'
    }

    loginHandler() {

    }

    onLogin = (event) =>{ 
        console.log(this.props.history.location.pathname);       
        this.props.history.push('/editUsers');
        console.log(this.props.history.location.pathname);       
        if(this.props.history.location.pathname === '/editUsers'){
            console.log('Yeah Buddyy');
        }

    }

    render() {
        return (
                
                <Aux>
                    <div className={classes.background} />
                    <div className={bootStrapClasses.container}>
                        <div className={bootStrapClasses.row}>
                            <div className={[bootStrapClasses['offset-md-7'], bootStrapClasses['col-md-4']].join(' ')}>
                                <div className={[bootStrapClasses.card, classes['card-default']].join(' ')}>
                                    <div className={bootStrapClasses['card-body']}>
                                        <div className={[bootStrapClasses['card-title'], bootStrapClasses['text-center'], classes['pad-full']].join(' ')}>
                                            <strong>Sysco</strong>
                                        </div>
                                        <form>
                                            <div className='md-form'>
                                                <i className='fa fa-user prefix grey-text'></i>
                                                <input type='text' className={[bootStrapClasses['form-control']]}></input>
                                                <label>Username</label>
                                            </div>
                                            <div className='md-form'>
                                                <i className='fa fa-lock prefix grey-text'></i>
                                                <input type='password' className={[bootStrapClasses['form-control']]} placeholder='Password'></input>
                                            
                                            </div>
                                            <div className={[bootStrapClasses['text-center']]}>
                                                <button className={[bootStrapClasses.btn, bootStrapClasses['btn-default'], bootStrapClasses['btn-block']].join(' ')}
                                                onClick={(event) => this.onLogin(event)}>Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Aux>
        )
    }

};

export default Login;