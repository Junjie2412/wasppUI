import React, {Component} from 'react';
import classes from './EditBonuses.css';
import Modal from '../../UI/Modal/Modal';
import EditBonus from './EditBonusForm/EditBonusForm';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import {connect} from 'react-redux';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Spinner from '../../UI/Spinner/Spinner';

class EditBonuses extends Component {

    state = {
        titleStates: ['Edit Subsidy', 'Edit Buy Out', 'Edit Floors'],
        currentTitle: '',
        editStates: ['Subsidy Amount', 'Buy Out Amount', 'Floor Amount'],
        currentEdit: '',
        version: '',
        modalShow: false
    };

    editSubsidyModal = () => {
        return this.setState({
            currentTitle: 'Edit Subsidy',
            modalShow: true,
            currentEdit: 'Subsidy Amount',
            version: 'version 1'
        });
    };

    editBuyOutModal = () => {
        return this.setState({
            currentTitle: 'Edit Buy Out',
            modalShow: true,
            currentEdit: 'Buy Out Amount',
            version: 'version 1'
        });
    };

    editFloorsModal = () => {
        return this.setState({
            currentTitle: 'Edit Floors',
            modalShow: true,
            currentEdit: 'Floor Amount',
            version: 'version 2'
        });
    };

    closeModal = () => {
        return this.setState({modalShow: false});
    };

    render() {

        let editFloorButton = null;
        this.props.hasFloor ? editFloorButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editFloorsModal}>
            View Floor Adjustment
            <div className={classes.Screen}>$ {this.props.currentUserEditFloor.amount}</div>
        </button> : editFloorButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editFloorsModal}>
            Add Floor Adjustment
        </button>;

        let editSubsidyButton = null;
        this.props.hasSubsidy ? editSubsidyButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editSubsidyModal}>
            View Subsidy
            <div className={classes.Screen}>$ {this.props.currentUserEditSubsidy.amount}</div>
        </button> : editSubsidyButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editSubsidyModal}>
            Add Subsidy
        </button>;

        let editBuyOutButton = null;
        this.props.hasBuyOut ? editBuyOutButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editBuyOutModal}>
            View Buy Out
            <div className={classes.Screen}>$ {this.props.currentUserEditBuyOut.amount}</div>
        </button> : editBuyOutButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editBuyOutModal}>
            Add Buy Out
        </button>;


        return (
            (this.props.loadingFloors && this.props.loadingSubsidy && this.props.loadingBuyOut) ? <Spinner/> :
            <Aux>
                <div className={classes.btnGroup}>
                    <h3 className={classes.Title}>Edit Bonuses</h3>
                    {editSubsidyButton}
                    {editBuyOutButton}
                    {editFloorButton}
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
        selected: state.editUsers.userSelected,
        loadingFloors: state.editFloors.loading,
        hasFloor: state.editFloors.currentUserHasFloor,
        currentUserEditFloor: state.editFloors.currentEditFloor,
        loadingSubsidy: state.editSubsidies.loading,
        hasSubsidy: state.editSubsidies.currentUserHasSubsidy,
        currentUserEditSubsidy: state.editSubsidies.currentEditSubsidy,
        loadingBuyOut: state.editBuyOuts.loading,
        hasBuyOut: state.editBuyOuts.currentUserHasBuyOut,
        currentUserEditBuyOut: state.editBuyOuts.currentEditBuyOut

    }
};

export default connect(mapStateToProps)(EditBonuses);