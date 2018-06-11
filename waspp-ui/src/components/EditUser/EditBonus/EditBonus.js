import React, {Component} from 'react';
import classes from './EditBonus.css';
import Modal from '../../UI/Modal/Modal';

class editBonus extends Component {

    state = {
        editStates: ['Edit Subsidy', 'Edit Buy Out', 'Edit Floors'],
        currentEdit: '',
        modalShow: false
    }

    editSubsidyModal = () => {
        return this.setState({currentEdit: this.state.editStates[0], modalShow: true});
    }

    editBuyOutModal = () => {
        return this.setState({currentEdit: this.state.editStates[1], modalShow: true});
    }

    editFloorsModal = () => {
        return this.setState({currentEdit: this.state.editStates[2], modalShow: true});
    }

    closeModal = () => {
        return this.setState({modalShow: false});
    }

    render() {
        return (
            <div className={classes.btnGroup}>
                <button onClick={this.editSubsidyModal}>{this.state.editStates[0]}</button>
                <button onClick={this.editBuyOutModal}>{this.state.editStates[1]}</button>
                <button onClick={this.editFloorsModal}>{this.state.editStates[2]}</button>
                <Modal show={this.state.modalShow} modalClosed={this.closeModal}>{this.state.currentEdit}</Modal>
            </div>
        );
    }
}

export default editBonus;