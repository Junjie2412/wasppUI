import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import axios from 'axios';
import * as links from '../../shared/Links';
import User from '../../components/EditUser/User/User';
import EditBonuses from '../../components/EditUser/EditBonuses/EditBonuses';
import EditUserTable from '../../components/EditUser/EditUserTable/EditUserTable';
import Spinner from '../../components/UI/Spinner/Spinner';
import AfterFloorAdjustments from '../../components/EditUser/AfterFloorAdjustments/AfterFloorAdjustments';
import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class EditUsers extends Component {

    state = {
        users: [],
        searchBy: [' ','AS400 ID', 'Active Directory', 'Payroll Number'],
        searchList: [],
        userLookup: '',
        placeholder: 'AS400 ID',
        currentUser: {
            ADID: '',
            AS400: '',
            Base: '',
            CommissionAdv: '',
            FileNumber: '',
            TerrDescription: '',
            TerrID: ''
        },
        loading: false
    }

    test='dsdd';

    componentDidMount() {
        this.setState({loading: true});
        axios.get(links.EDIT_USERS_DB)
            .then(response => {
                const dataList = [];
                for(let user in response.data ) {
                    dataList.push( {
                        ...response.data[user],
                        id: [user]
                    })
                }
                return this.setState({users: dataList, loading: false});
            });
    }

    //This handler changes what the value property is whenever we change the search input text
    onChangeText = (event) => {
        this.setState({userLookup: event.target.value});

        switch (this.state.placeholder) {
            case 'AS400 ID':
                {
                    let currUser = this.state.currentUser;

                    for(let user in this.state.users){
                        if(this.state.users[user].AS400ID === event.target.value){
                            currUser = this.state.users[user];
                        }
                    }
                    this.setState({currentUser: currUser});
                    break;
                }
            case 'Active Directory':
                {
                    let currUser = this.state.currentUser;

                    for(let user in this.state.users){
                        if(this.state.users[user].ADID === event.target.value){
                            currUser = this.state.users[user];
                        }
                    }
                    this.setState({currentUser: currUser});
                    break;
                }
            case 'Payroll Number':
                {
                    let currUser = this.state.currentUser;

                    for(let user in this.state.users){
                        if(this.state.users[user].FileNumber === event.target.value){
                            currUser = this.state.users[user];
                        }
                    }
                    this.setState({currentUser: currUser});
                    break;
                }
            default:
                break;


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
            this.state.loading ? <Spinner/>:
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>Users List</h1>
                <Search
                    placeholder={this.state.placeholder}
                    options={this.state.searchBy}
                    dataList={this.state.searchList}
                    change={(event) => this.onChangeSelect(event)}
                    value={this.state.userLookup}
                    changeText={(event) => this.onChangeText(event)}/>
                <div className={classes.row}>
                    <User user={this.state.currentUser}/>
                    <EditBonuses/>
                    <EditUserTable/>
                    <AfterFloorAdjustments/>
                </div>
            </div>
        );
    };
}

export default EditUsers;