import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './AfterFloorAdjustments.css';
import EditUserTable from '../../EditUser/EditUserTable/EditUserTable';
import AdjustmentForm from '../../EditUser/EditUserTable/AdjustmentForm/AdjustmentForm';
import Modal from '../../../components/UI/Modal/Modal';

class AfterFloorAdjustments extends Component {

    state = {
        modalOpened: false,
        editing: false
    }

    openModal = () => {
        this.setState({modalOpened: true});
        console.log('hi');
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
/*
        let editingAdjustments = null;

        switch (this.state.editing) {
            case true:
                editingAdjustments = (
                    <Aux>
                        <Table/>
                        <div>
                            <button>Save</button>
                            <button onClick={this.cancelEdit}>Cancel</button>
                            <button>Delete</button>
                        </div>
                    </Aux>
                );
                break;
            case false:
                editingAdjustments = null;
                break
            default:
                break;
        }*/

        return (
            <Aux>
                <div className={this.state.editing ?  classes.AFAOpened : classes.AFA}>
                    <div>
                    <button onClick={this.state.editing ? this.cancelEdit : this.editAdjustments} className={classes.Button}>
                        <p className={classes.Text} onClick={this.state.editing ? this.cancelEdit : this.editAdjustments}>Edit After Floor Adjustments</p>
                    </button>
                    </div>
                    <div className={classes.Table} onClick={this.editAdjustments}>
                        <EditUserTable
                            title={'Edit After Floor Adjustments'}
                            add={this.openModal}
                        />
                    </div>
                </div>
                <Modal show={this.state.modalOpened} modalClosed={this.closeModal}>
                    <AdjustmentForm/>
                </Modal>
            </Aux>
        )
    }
}

export default AfterFloorAdjustments;