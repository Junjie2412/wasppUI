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
            <div className={classes.Screen}>$ {this.props.currentUserEditFloor.floorAdjustments.amount}</div>
        </button> : editFloorButton = <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editFloorsModal}>
            Add Floor Adjustment
        </button>;

        return (
            this.props.loading ? <Spinner/> :
            <Aux>
                <div className={classes.btnGroup}>
                    <h3 className={classes.Title}>Edit Bonuses</h3>
                    <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editSubsidyModal}>
                        {this.state.titleStates[0]}
                        <div className={classes.Screen}>Has Subsidy</div>
                    </button>
                    <button className={[bootStrapClasses.btn, classes.Button].join(' ')} disabled={!this.props.selected} onClick={this.editBuyOutModal}>
                        {this.state.titleStates[1]}
                        <div className={classes.Screen}>Has Buy Out</div>
                        </button>
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
        currentUserEditFloor: state.editFloors.currentEditFloor
    }
};

export default connect(mapStateToProps)(EditBonuses);