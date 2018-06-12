import React, {Component} from 'react';
import classes from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';

class user extends Component{
    state = {
        modalShow: false
    }

    editUserModal = () => {
        return this.setState({modalShow: true});
    }

    render(){
        return(
            <div className={[classes['w-25']]}>
                <div className={[[classes.card], classes['shadow-lg']].join(' ')}>
                    <div className={[classes['card-body']]}>
                        <h5 className={[classes['text-center'], classes['card-title']].join(' ')}>First Last</h5>
                        <p>AS400 ID: {this.props.user.AS400ID}</p>
                        <p>HR Employee ID: {this.props.user.ADID}</p>
                        <p>File Number: {this.props.user.FileNumber}</p>
                        <p>Weekly Base: {this.props.user.Base}</p>
                        <p>Bonus Flight: </p>
                        <div className={classes.row}>
                            <div className = {classes['col-sm-4']}>
                                <input type='checkbox' className={classes['form-check-label']}/>
                                <label className='form-check-label'>Seasonal</label>
                            </div>
                            <div className = {classes['col-sm-4']}>
                                <input type='checkbox' className={classes['form-check-label']}/>
                                <label className='form-check-label'>Bonus</label>
                            </div>
                        </div>
                        <div className={[classes['col-sm-12']]}>
                            <button onClick={this.editUserModal} className={[classes.btn, classes['btn-primary'], classes['offset-sm-3']].join(' ')}>Edit Employee</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default user;