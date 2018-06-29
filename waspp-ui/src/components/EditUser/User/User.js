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
                        <table className={classes.Table}>
                            <tbody>
                            <tr>
                                <td>
                                    <h5 className={[bootStrapClasses['text-center'], bootStrapClasses['card-title']].join(' ')}>Name </h5>
                                </td>
                                <td>
                                    <h5>{this.props.user.FirstName} {this.props.user.LastName}</h5>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>AS400 ID </p>
                                </td>
                                <td>
                                    <p>{this.props.user.AS400ID}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>HR Employee ID</p>
                                </td>
                                <td>
                                    <p>{this.props.user.PayrollNumber}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>File Number</p>
                                </td>
                                <td>
                                    <p>{this.props.user.FileNumber}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Weekly Base</p>
                                </td>
                                <td>
                                    <p>{this.props.user.Base}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p>Bonus Flight</p>
                                </td>
                                <td>
                                    <p>{this.props.user.BonusFlight}</p>
                                </td>
                            </tr>
                            </tbody>
                        </table>
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