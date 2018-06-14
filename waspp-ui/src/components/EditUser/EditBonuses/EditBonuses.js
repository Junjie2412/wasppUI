import React, {Component} from 'react';
import classes from './EditBonuses.css';
import Modal from '../../UI/Modal/Modal';
import EditBonus from './EditBonus/EditBonus';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

class EditBonuses extends Component {

    state = {
        titleStates: ['Edit Subsidy', 'Edit Buy Out', 'Edit Floors'],
        currentTitle: '',
        editStates: ['Subsidy Amount', 'Buy Out Amount', 'Floor Adjustments'],
        currentEdit: '',
        version: '',
        modalShow: false
    }

    editSubsidyModal = () => {
        return this.setState({
            currentTitle: 'Edit Subsidy',
            modalShow: true,
            currentEdit: 'Original Subsidy',
            version: 'version 1'
        });
    }

    editBuyOutModal = () => {
        return this.setState({
            currentTitle: 'Edit Buy Out',
            modalShow: true,
            currentEdit: 'Buy Out Amount',
            version: 'version 1'
        });
    }

    editFloorsModal = () => {
        return this.setState({
            currentTitle: 'Edit Floors',
            modalShow: true,
            currentEdit: 'Floor Adjustments',
            version: 'version 2'
        });
    }

    closeModal = () => {
        return this.setState({modalShow: false});
    }

    render() {
        return (
            <Aux>
                <div className={classes.btnGroup}>
                    <button onClick={this.editSubsidyModal}>{this.state.editStates[0]}</button>
                    <button onClick={this.editBuyOutModal}>{this.state.editStates[1]}</button>
                    <button onClick={this.editFloorsModal}>{this.state.editStates[2]}</button>
                </div>
                <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                    <EditBonus
                        title={this.state.currentTitle}
                        editState={this.state.currentEdit}
                        version={this.state.version}
                    />
                </Modal>
            </Aux>
        );
    }
}

export default EditBonuses;