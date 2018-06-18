import React, {Component} from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
                // <div className={[bootStrapClasses['w-25'], bootStrapClasses['mx-auto'], classes.styleCard].join(' ')}>
                //     <div className={[bootStrapClasses.card]}>
                //         <div className={[bootStrapClasses['card-body']]}>
                //             <form onSubmit={this.loginHandler}>
                //             <div className='md-form'>
                //                 <i className='fa fa-envelope'></i>
                //                 <input type='text' className={[bootStrapClasses['form-control']]} placeholder='Username'></input>
                //             </div>
                //             <div className={[bootStrapClasses['form-group']]}>
                //                     <label>Username:</label>
                //                     <input type='text' className={[bootStrapClasses['form-control']]} placeholder='Username'></input>
                //             </div>
                //             <div className={[bootStrapClasses['form-group']]}>
                //                     <label>Password:</label>
                //                     <input type='text' className={[bootStrapClasses['form-control']]} placeholder='Password'></input>
                //             </div>
                //             <button className={[bootStrapClasses.btn, bootStrapClasses['btn-primary']].join(' ')}>Login</button>
                //             </form>
                //         </div>
                //     </div>
                // </div>

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
                                            <button className={[bootStrapClasses.btn, bootStrapClasses['btn-default'], bootStrapClasses['btn-block']].join(' ')}>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

};

export default Login;