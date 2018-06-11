import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import axios from 'axios';
import * as links from '../../shared/Links';
import EditBonus from '../../components/EditUser/EditBonus/EditBonus';

class EditUsers extends Component {

    state = {
        users: [],
        searchBy: [' ','AS400 ID', 'Active Directory', 'Payroll Number'],
        searchList: [],
        userLookup: '',
        placeholder: 'AS400 ID'
    }

    test='dsdd';

    componentDidMount() {
        axios.get(links.EDIT_USERS_DB)
            .then(response => {
                const dataList = [];
                for(let user in response.data ) {
                    dataList.push( {
                        ...response.data[user],
                        id: [user]
                    })
                }
                return this.setState({users: dataList});
            });
    }

    //This handler changes what the value property is whenever we change the search input text
    onChangeText = (event) => {
        this.setState({userLookup: event.target.value});
        for(let user in this.state.users) {
            console.log(this.state.users[user].AS400ID);
        }
    }

    //This handler changes the state properties based on which value was selected
    onChangeSelect = (event) => {
        this.setState({placeholder: event.target.value, userLookup: ''});

        let searchData = [];

        switch(event.target.value){
            case 'AS400 ID':
                for(let user in this.state.users ) {
                    searchData.push(
                        this.state.users[user].AS400ID
                    )
                }
                return this.setState({searchList: searchData});
            case 'Active Directory':
                for(let user in this.state.users ) {
                    searchData.push(
                        this.state.users[user].ADID
                    )
                }
                return this.setState({searchList: searchData});
            case 'Payroll Number':
                for(let user in this.state.users ) {
                    searchData.push(
                        this.state.users[user].FileNumber
                    )
                }
                return this.setState({searchList: searchData});
            default:
                for(let user in this.state.users ) {
                    searchData.push(
                        this.state.users[user].AS400ID
                    )
                }
                return;
        }
    }

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>Users List</h1>
                <Search
                    placeholder={this.state.placeholder}
                    options={this.state.searchBy}
                    dataList={this.state.searchList}
                    change={(event) => this.onChangeSelect(event)}
                    value={this.state.userLookup}
                    changeText={(event) => this.onChangeText(event)}/>
                <EditBonus/>
            </div>
        );
    };
}

export default EditUsers;