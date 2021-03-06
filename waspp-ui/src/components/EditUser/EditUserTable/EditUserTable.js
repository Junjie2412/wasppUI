import React, {Component} from 'react';
import Table from '../../UI/Table/Table';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';
import AddAdjustmentForm from './AddAdjustmentForm/AddAdjustmentForm';
import classes from './EditUserTable.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class EditUserTable extends Component{

    state = {
        showAddModal: false,
        showUpdateModal: false
    };
    editAddModal = () => {
        return this.setState({showAddModal: true});
    };

    closeAddModal = () => {
        this.setState({showAddModal: false});
    };

    deleteAdjustment = (id) => {
        return this.props.onDeleteAdjustment(id);
    };

    deleteAfterFloorAdjustment = (id) => {
        return this.props.onDeleteAfterFloorAdjustment(id);
    };
    
    render(){

        return (
            <div className={classes.Outer}>
                <div className={this.props.afterFloor ? [bootStrapClasses.card, classes.Card, classes.AfterFloorCard].join(' ') : [bootStrapClasses.card, classes.Card].join(' ')}>
                    <h3 className={classes.Title}>{this.props.afterFloor ? 'Edit After Floor Adjustments' : 'Edit Adjustments'}</h3>
                    <div className={classes.Table}>
                        <Table tableData={this.props.afterFloor ? this.props.currentUserAfterFloorAdjustments : this.props.currentUserAdjustments}
                        isAfter={this.props.afterFloor}/>
                    </div>
                    <div className={[bootStrapClasses.row, classes.ButtonGroup].join(' ')}>
                        <div className={bootStrapClasses['col-sm-12']}>
                            <button disabled={!this.props.selected}
                                    onClick={this.props.afterFloor ? this.props.add : this.editAddModal}
                                    className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2'],classes.AddButton].join(' ')}>Add</button>
                            <button disabled={!this.props.selected || (this.props.afterFloor ? !this.props.afterFloorAdjustmentSelected : !this.props.adjustmentSelected)}
                                    onClick={this.props.afterFloor ? (id) => this.deleteAfterFloorAdjustment(this.props.selectedAfterFloorAdjustment.id) : (id) => this.deleteAdjustment(this.props.selectedAdjustment.id)}
                                    className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2'], classes.DeleteButton].join(' ')}>Delete</button>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showAddModal} modalClosed={this.closeAddModal}>
                    <AddAdjustmentForm close={this.closeAddModal}/>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return  {
        selected: state.editUsers.userSelected,
        currentUser: state.editUsers.currentUser,
        currentUserAdjustments: state.editAdjustments.currentUserAdjustments,
        currentUserAfterFloorAdjustments: state.editAfterFloorAdjustments.currentUserAdjustments,
        selectedAdjustment: state.editAdjustments.selectedAdjustment,
        selectedAfterFloorAdjustment: state.editAfterFloorAdjustments.selectedAdjustment,
        adjustmentSelected: state.editAdjustments.isSelected,
        afterFloorAdjustmentSelected: state.editAfterFloorAdjustments.isSelected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteAdjustment: (id) => dispatch(actions.deleteAdjustment(id)),
        onDeleteAfterFloorAdjustment: (id) => dispatch(actions.deleteAfterFloorAdjustment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserTable);