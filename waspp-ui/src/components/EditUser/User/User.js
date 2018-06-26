import React, {Component} from 'react';
import classes from './User.css';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';
import EditEmployeeForm from './EditEmployeeForm/EditEmployeeForm';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class user extends Component{
    state = {
        modalShow: false
    };

    editUserModal = () => {
        this.setState({modalShow: true});
        this.props.onSetEmployee(this.props.user);
    };

    closeModal = () => {
        return this.setState({modalShow: false});
    };

    render(){
        return(
            <div className={classes.Outer}>
                <div className={[[bootStrapClasses.card], bootStrapClasses['shadow-lg'], classes.Card].join(' ')}>
                    <div className={[bootStrapClasses['card-body'], classes.Form].join(' ')}>
                        <h5 className={[bootStrapClasses['text-center'], bootStrapClasses['card-title']].join(' ')} style={{color:'#fff'}}>Name: {this.props.user.FirstName} {this.props.user.LastName}</h5>
                        <p>AS400 ID: {this.props.user.AS400ID}</p>
                        <p>HR Employee ID: {this.props.user.PayrollNumber}</p>
                        <p>File Number: {this.props.user.FileNumber}</p>
                        <p>Weekly Base: {this.props.user.Base}</p>
                        <p>Bonus Flight: {this.props.user.BonusFlight}</p>
                        <div className={[bootStrapClasses.row, classes.Check].join(' ')}>
                            <div className = {bootStrapClasses['col-sm-4']}>
                                <input type='checkbox' className={bootStrapClasses['form-check-label']}/>
                                <label>Seasonal</label>
                            </div>
                            <div className = {bootStrapClasses['col-sm-4']}>
                                <input type='checkbox' className={bootStrapClasses['form-check-label']}/>
                                <label>Bonus</label>
                            </div>
                        </div>
                        <div className={[bootStrapClasses['col-sm-12']]}>
                            <button disabled={!this.props.selected} onClick={this.editUserModal} className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], classes.Button].join(' ')}>Edit Employee</button>
                            <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                                <EditEmployeeForm user={this.props.employee}
                                close={this.closeModal}/>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return  {
        selected: state.editUsers.userSelected,
        employee: state.editEmployee.currentEmployee
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSetEmployee: (user) => dispatch(actions.setCurrentEmployee(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(user);