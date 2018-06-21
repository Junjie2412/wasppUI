import React, {Component} from 'react';
import Table from '../../UI/Table/Table';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';
import AdjustmentForm from './AdjustmentForm/AdjustmentForm';
import classes from './EditUserTable.css';
import {connect} from 'react-redux';

class EditUserTable extends Component{

    state = {
        modalShow: false
    }
    editAdjustmentFormModel = () => {
        return this.setState({modalShow: true});
    }

    closeModal = () => {
        return this.setState({modalShow: false});
    }
    
    render(){

        return (
            <div className={classes.Outer}>
                <div className={this.props.afterFloor ? [bootStrapClasses.card, classes.Card, classes.AfterFloorCard].join(' ') : [bootStrapClasses.card, classes.Card].join(' ')}>
                    <h3 className={classes.Title}>{this.props.afterFloor ? 'Edit After Floor Adjustments' : 'Edit Adjustments'}</h3>
                    <div className={classes.Table}>
                        <Table tableData={this.props.afterFloor ? this.props.currentUserAfterFloorAdjustments : this.props.currentUserAdjustments}/>
                    </div>
                    <div className={[bootStrapClasses.row, classes.ButtonGroup].join(' ')}>
                        <div className={bootStrapClasses['col-sm-12']}>
                            <button disabled={!this.props.selected} onClick={this.props.add ? this.props.add : this.editAdjustmentFormModel} className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Add</button>
                            <button disabled={!this.props.selected} className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['col-sm-2']].join(' ')} style={{margin: '4px'}}>Update</button>
                            <button disabled={!this.props.selected} className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}>Delete</button>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                    <AdjustmentForm close={this.closeModal}/>
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
        currentUserAfterFloorAdjustments: state.editAfterFloorAdjustments.currentUserAdjustments
    }
}

export default connect(mapStateToProps)(EditUserTable);