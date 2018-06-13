import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Table from "../../UI/Table/Table";
import classes from './AfterFloorAdjustments.css';
import EditUserTable from '../../EditUser/EditUserTable/EditUserTable';

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
                <div className={this.state.modalOpened ?  classes.AFAOpened : classes.AFA}>
                    <button onClick={this.state.modalOpened ? this.closeModal : this.openModal} className={classes.Button}>
                        <p className={classes.Text} onClick={this.state.modalOpened ? this.closeModal : this.openModal}>Edit After Floor Adjustments</p>
                    </button>
                    <div className={classes.Table} onClick={this.openModal}>
                        <EditUserTable title={'Edit After Floor Adjustments'}/>
                    </div>
                </div>
                {/*<Modal show={this.state.modalOpened} modalClosed={this.modalClosed}>
                    <div>
                        <Aux>
                            <EditUserTable/>
                            <button onClick={this.editAdjustments}>Add</button>
                            <button onClick={this.modalClosed}>Exit</button>
                        </Aux>
                        {editingAdjustments}
                    </div>
                </Modal>*/}
            </Aux>
        )
    }
}

export default AfterFloorAdjustments;