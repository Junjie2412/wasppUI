import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import Graph from '../../components/UI/Graph/Graph';

class EditUsers extends Component {
    render() {
        return (
            <div>
                <h1>Users List</h1>
                <Search placeholder="users"/>
                <Graph/>
            </div>
        );
    };
}

export default EditUsers;