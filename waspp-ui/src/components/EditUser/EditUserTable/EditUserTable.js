import React, {Component} from 'react';
import Table from '../../UI/Table/Table';
import classes from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Modal from '../../UI/Modal/Modal';
import AdjustmentForm from './AdjustmentForm/AdjustmentForm';

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
            <div style={{width: '43%', margin: '4.8% 3%'}}>
                <div className={classes.card}>
                    <div className={[classes['card-body'], classes['shadow-lg']].join(' ')} style={{overflow: 'auto'}}>
                        <Table title={'Edit Adjustments'} tableData={['','','']}/>
                        <div className={classes.row}>
                            <div className={classes['col-sm-12']}>
                                <button onClick={this.editAdjustmentFormModel} className={[classes.btn, classes['btn-success'], classes['col-sm-2']].join(' ')}>Add</button>
                                <button className={[classes.btn, classes['btn-primary'], classes['col-sm-2']].join(' ')} style={{margin: '4px'}}>Update</button>
                                <button className={[classes.btn, classes['btn-danger'], classes['col-sm-2']].join(' ')}>Delete</button>
                                <Modal show={this.state.modalShow} modalClosed={this.closeModal}>
                                    <AdjustmentForm />
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditUserTable;