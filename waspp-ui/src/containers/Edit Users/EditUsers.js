import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import Table from '../../components/Table/Table';

class EditUsers extends Component {

    state = {
        elements: [],
        searchBy: ['AS400 ID', 'Active Directory', 'Payroll Number'],
        AS400List: ['AS4001', 'AS4002', 'AS4003', 'AS4004'],
        ADList: ['AD1', 'AD2', 'AD3', 'AD4'],
        PayrollList: ['Payroll1', 'Payroll2', 'Payroll3', 'Payroll4'],
        datalist: ['AS4001', 'AS4002', 'AS4003', 'AS4004'],
        text: '',
        placeholder: 'AS400 ID'
    }

    onChangeText = (event) => {
        this.setState({text: event.target.value});
    }

    onChangeSelect = (event) => {
        this.setState({text: '', placeholder: event.target.value});
        switch(event.target.value){
            case 'AS400 ID':
                return this.setState({datalist: this.state.AS400List});
            case 'Active Directory':
                return this.setState({datalist: this.state.ADList});
            case 'Payroll Number':
                return this.setState({datalist: this.state.PayrollList});
            default:
                return this.setState({datalist: this.state.AS400List});
        }
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>Users List</h1>
                <Search
                    placeholder={this.state.placeholder}
                    options={this.state.searchBy}
                    dataList={this.state.datalist}
                    change={(event) => this.onChangeSelect(event)}
                    value={this.state.text}
                    changeText={(event) => this.onChangeText(event)}/>
                    <Table />
            </div>
        );
    };
}

export default EditUsers;