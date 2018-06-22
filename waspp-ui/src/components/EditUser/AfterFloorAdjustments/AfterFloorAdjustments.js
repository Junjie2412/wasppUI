import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './AfterFloorAdjustments.css';
import EditUserTable from '../../EditUser/EditUserTable/EditUserTable';
import AdjustmentForm from '../EditUserTable/AddAdjustmentForm/AddAdjustmentForm';
import Modal from '../../../components/UI/Modal/Modal';
import {connect} from 'react-redux';
//import * as actions from '../../../store/actions/index';

class AfterFloorAdjustments extends Component {

    state = {
        modalOpened: false,
        editing: false
    }

    openModal = () => {
        this.setState({modalOpened: true});
    }

    closeModal = () => {
        this.setState({modalOpened: false});
    }

    editAdjustments = () => {
        this.setState({editing: true});
    }

    cancelEdit = () => {
        this.setState({editing: false});
    }

    render() {

        return (
            <Aux>
                <div className={this.state.editing ?  classes.AFAOpened : classes.AFA}>
                    <div>
                    <button onClick={this.state.editing ? this.cancelEdit : this.editAdjustments} className={classes.Button} disabled={!this.props.selected}>
                        <p className={classes.Text} onClick={this.state.editing ? this.cancelEdit : this.editAdjustments}>Edit After Floor Adjustments</p>
                    </button>
                    </div>
                    <div className={classes.Table} onClick={this.props.selected ? this.editAdjustments : null}>
                        <EditUserTable
                            add={this.openModal}
                            afterFloor
                            test={'hello'}
                        />
                    </div>
                </div>
                <Modal show={this.state.modalOpened} modalClosed={this.closeModal}>
                    <AdjustmentForm isAfter close={this.closeModal}/>
                </Modal>
            </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        selected: state.editUsers.userSelected
    }
}

export default connect(mapStateToProps)(AfterFloorAdjustments);