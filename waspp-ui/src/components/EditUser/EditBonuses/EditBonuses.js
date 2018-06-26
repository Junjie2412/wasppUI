import React, {Component} from 'react';
import classes from './EditBonuses.css';
import Modal from '../../UI/Modal/Modal';
import EditBonus from './EditBonus/EditBonus';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {connect} from 'react-redux';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EditBonuses extends Component {

    state = {
        titleStates: ['Edit Subsidy', 'Edit Buy Out', 'Edit Floors'],
        currentTitle: '',
        editStates: ['Subsidy Amount', 'Buy Out Amount', 'Floor Amount'],
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
            currentEdit: 'Floor Amount',
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
                    <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editSubsidyModal}>{this.state.titleStates[0]}</button>
                    <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editBuyOutModal}>{this.state.titleStates[1]}</button>
                    <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editFloorsModal}>{this.state.titleStates[2]}</button>
                </div>
                <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                    <EditBonus
                        title={this.state.currentTitle}
                        editState={this.state.currentEdit}
                        version={this.state.version}
                        close={this.closeModal}
                    />
                </Modal>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return  {
        selected: state.editUsers.userSelected
    }
}

export default connect(mapStateToProps)(EditBonuses);