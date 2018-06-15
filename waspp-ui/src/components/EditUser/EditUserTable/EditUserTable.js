import React, {Component} from 'react';
import Table from '../../UI/Table/Table';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';
import AdjustmentForm from './AdjustmentForm/AdjustmentForm';
import classes from './EditUserTable.css';

class EditUserTable extends Component{
    state = {
        modalShow: false
    }

    editAdjustmentFormModel = () => {
        return this.setState({modalShow: true});
    }

    closeModal = () => {
        return this.setState({modalShow: false});
    }
    
    render(){
        return (
            <div className={classes.Outer}>
                <div className={[bootStrapClasses.card, classes.Card].join(' ')}>
                    <div className={[bootStrapClasses['card-body'], bootStrapClasses['shadow-lg']].join(' ')} style={{overflow: 'auto'}}>
                        <Table title={this.props.title ? this.props.title : 'Edit Adjustments'} tableData={['','','']}/>
                        <div className={bootStrapClasses.row}>
                            <div className={bootStrapClasses['col-sm-12']}>
                                <button onClick={this.props.add ? this.props.add : this.editAdjustmentFormModel} className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Add</button>
                                <button className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['col-sm-2']].join(' ')} style={{margin: '4px'}}>Update</button>
                                <button className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                    <AdjustmentForm />
                </Modal>
            </div>
        )
    }
}
export default EditUserTable;