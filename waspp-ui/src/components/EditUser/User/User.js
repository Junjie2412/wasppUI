import React, {Component} from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';
import EditEmployeeForm from './EditEmployeeForm/EditEmployeeForm';

class user extends Component{
    state = {
        modalShow: false
    }

    editUserModal = () => {
        return this.setState({modalShow: true});
    }

    closeModal = () => {
        return this.setState({modalShow: false});
    }

    render(){
        return(
            <div style={{width: '25%', margin: '3%'}}>
                <div className={[[classes.card], classes['shadow-lg']].join(' ')} style={{backgroundColor:'#0099cc'}}>
                    <div className={[classes['card-body']]}>
                        <h5 className={[classes['text-center'], classes['card-title']].join(' ')} style={{color:'#fff'}}>First Last</h5>
                        <p style={{color:'#fff'}}>AS400 ID: {this.props.user.AS400ID}</p>
                        <p style={{color:'#fff'}}>HR Employee ID: {this.props.user.PayrollNumber}</p>
                        <p style={{color:'#fff'}}>File Number: {this.props.user.FileNumber}</p>
                        <p style={{color:'#fff'}}>Weekly Base: {this.props.user.Base}</p>
                        <p style={{color:'#fff'}}>Bonus Flight: </p>
                        <div className={classes.row}>
                            <div className = {classes['col-sm-4']}>
                                <input type='checkbox' className={classes['form-check-label']}/>
                                <label className='form-check-label' style={{color:'#fff'}}>Seasonal</label>
                            </div>
                            <div className = {classes['col-sm-4']}>
                                <input type='checkbox' className={classes['form-check-label']}/>
                                <label className='form-check-label' style={{color:'#fff'}}>Bonus</label>
                            </div>
                        </div>
                        <div className={[classes['col-sm-12']]}>
                            <button onClick={this.editUserModal} className={[classes.btn, classes['btn-primary'], classes['offset-sm-3']].join(' ')} style={{backgroundColor:'#006699'}}>Edit Employee</button>
                            <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                                <EditEmployeeForm user={this.props.user}/>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default user;