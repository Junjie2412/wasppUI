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
                <div className={[[bootStrapClasses.card], bootStrapClasses['shadow-lg']].join(' ')} style={{backgroundColor:'#0099cc'}}>
                    <div className={[bootStrapClasses['card-body']]}>
                        <h5 className={[bootStrapClasses['text-center'], bootStrapClasses['card-title']].join(' ')} style={{color:'#fff'}}>First Last</h5>
                        <p style={{color:'#fff'}}>AS400 ID: {this.props.user.AS400ID}</p>
                        <p style={{color:'#fff'}}>HR Employee ID: {this.props.user.PayrollNumber}</p>
                        <p style={{color:'#fff'}}>File Number: {this.props.user.FileNumber}</p>
                        <p style={{color:'#fff'}}>Weekly Base: {this.props.user.Base}</p>
                        <p style={{color:'#fff'}}>Bonus Flight: </p>
                        <div className={bootStrapClasses.row}>
                            <div className = {bootStrapClasses['col-sm-4']}>
                                <input type='checkbox' className={bootStrapClasses['form-check-label']}/>
                                <label style={{color:'#fff'}}>Seasonal</label>
                            </div>
                            <div className = {bootStrapClasses['col-sm-4']}>
                                <input type='checkbox' className={bootStrapClasses['form-check-label']}/>
                                <label style={{color:'#fff'}}>Bonus</label>
                            </div>
                        </div>
                        <div className={[bootStrapClasses['col-sm-12']]}>
                            <button onClick={this.editUserModal} className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['offset-sm-3']].join(' ')} style={{backgroundColor:'#006699'}}>Edit Employee</button>
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