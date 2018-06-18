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
                            <div className={bootStrapClasses.card}>
                                <div className={bootStrapClasses['card-body']}>
                                    <h5 className={[bootStrapClasses['card-title'], bootStrapClasses['text-center']].join(' ')}>Sysco</h5>
                                    <div className='md-form'>
                                      <i className='fa fa-envelope'></i>
                                      <input type='text' className={[bootStrapClasses['form-control']]} placeholder='Username'></input>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

};

export default Login;