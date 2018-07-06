import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './AfterFloorAdjustments.css';
import EditUserTable from '../../EditUser/EditUserTable/EditUserTable';
import AdjustmentForm from '../EditUserTable/AddAdjustmentForm/AddAdjustmentForm';
import Modal from '../../../components/UI/Modal/Modal';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class AfterFloorAdjustments extends Component {

    state = {
        modalOpened: false
    };

    openModal = () => {
        this.setState({modalOpened: true});
    };

    closeModal = () => {
        this.setState({modalOpened: false});
    };

    editAdjustments = () => {
        this.props.open();
    };

    cancelEdit = () => {
        this.props.close();
    };

    render() {

        return (
            <Aux>
                <div className={this.props.isEditing ?  classes.AFAOpened : classes.AFA}>
                    <button onClick={this.props.isEditing ? this.cancelEdit : this.editAdjustments} className={classes.Button} disabled={!this.props.selected}>
                        <p className={classes.Text} onClick={this.props.isEditing ? this.cancelEdit : this.editAdjustments}>Edit After Floor Adjustments</p>
                    </button>
                    <div className={classes.Table} onClick={this.props.selected ? this.editAdjustments : null}>
                        <EditUserTable
                            add={this.openModal}
                            afterFloor
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
        selected: state.editUsers.userSelected,
        isEditing: state.editAfterFloorAdjustments.isOpened
    }
};

const mapDispatchToProps = dispatch => {
    return {
        open: () => dispatch(actions.openAfterFloor()),
        close: () => dispatch(actions.closeAfterFloor())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AfterFloorAdjustments);