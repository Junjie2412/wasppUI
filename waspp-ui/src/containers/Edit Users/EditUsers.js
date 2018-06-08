import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import Graph from '../../components/UI/Graph/Graph';

class EditUsers extends Component {

    state = {
        elements: [],
        searchBy: ['AS400 ID', 'Active Directory', 'Payroll Number']
    }

    render() {
        return (
            <div>
                <h1>Users List</h1>
                <Search placeholder="users" elements={this.state.searchBy}/>
                <Graph/>
            </div>
        );
    };
}

export default EditUsers;