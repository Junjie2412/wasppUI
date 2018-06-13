import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Modal from "../../UI/Modal/Modal";
import Table from "../../UI/Table/Table";
import classes from './AfterFloorAdjustments.css';

class AfterFloorAdjustments extends Component {

    state = {
        modalOpened: false,
        editing: false
    }

    openModal = () => {
        this.setState({modalOpened: true});
    }

    modalClosed = () => {
        this.setState({modalOpened: false});
    }

    editAdjustments = () => {
        this.setState({editing: true});
    }

    cancelEdit = () => {
        this.setState({editing: false});
    }

    render() {

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
                break;
        }

        return (
            <Aux>
                <button onClick={this.openModal} className={classes.Button}>
                    Edit After Floor Adjustments
                </button>
                <Modal show={this.state.modalOpened} modalClosed={this.modalClosed}>
                    <div className={classes.ModalDisplay}>
                        <Aux>
                            <Table/>
                            <button onClick={this.editAdjustments}>Add</button>
                            <button onClick={this.modalClosed}>Exit</button>
                        </Aux>
                        {editingAdjustments}
                    </div>
                </Modal>
            </Aux>
        )
    }
}

export default AfterFloorAdjustments;