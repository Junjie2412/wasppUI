import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import axios from 'axios';
import * as links from '../../shared/Links';
import User from '../../components/EditUser/User/User';
import EditBonuses from '../../components/EditUser/EditBonuses/EditBonuses';
import EditUserTable from '../../components/EditUser/EditUserTable/EditUserTable';
import Spinner from '../../components/UI/Spinner/Spinner';
import AfterFloorAdjustments from '../../components/EditUser/AfterFloorAdjustments/AfterFloorAdjustments';
//import classes from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './EditUser.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';

class EditUsers extends Component {

    state = {
        searchList: [],
        userLookup: '',
        placeholder: 'Payroll Number',
        currentUser: {
            ADID: '',
            AS400: '',
            Base: '',
            CommissionAdv: '',
            PayrollNumber: '',
            FileNumber: '',
            TerrDescription: '',
            TerrID: '',
            FirstName: '',
            LastName: ''
        }
    }

    test='dsdd';

    componentDidMount() {
        this.props.onFetchUsers();
    }

    //This handler changes what the value property is whenever we change the search input text
    onChangeText = (event) => {
        this.setState({userLookup: event.target.value});

        switch (this.state.placeholder) {
            case 'AS400 ID':
                {
                    let currUser = this.state.currentUser;

                    for(let user in this.props.users){
                        if(this.props.users[user].AS400ID === event.target.value){
                            currUser = this.props.users[user];
                        }
                    }
                    this.setState({currentUser: currUser});
                    break;
                }
            case 'Active Directory':
                {
                    let currUser = this.state.currentUser;

                    for(let user in this.props.users){
                        if(this.props.users[user].ADID === event.target.value){
                            currUser = this.props.users[user];
                        }
                    }
                    this.setState({currentUser: currUser});
                    break;
                }
            case 'Payroll Number':
                {
                    let currUser = this.state.currentUser;

                    for(let user in this.props.users){
                        if(this.props.users[user].PayrollNumber === event.target.value){
                            currUser = this.props.users[user];
                        }
                    }
                    this.setState({currentUser: currUser});
                    break;
                }
            default:
            {
                let currUser = this.state.currentUser;

                for(let user in this.props.users){
                    if(this.props.users[user].PayrollNumber === event.target.value){
                        currUser = this.props.users[user];
                    }
                }
                this.setState({currentUser: currUser});
                break;
            }


        }
    }

    //This handler changes the state properties based on which value was selected
    onChangeSelect = (event) => {
        this.setState({placeholder: event.target.value, userLookup: ''});

        let searchData = [];

        switch(event.target.value){
            case 'AS400 ID':
                for(let user in this.props.users ) {
                    searchData.push(
                        this.props.users[user].AS400ID
                    )
                }
                return this.setState({searchList: searchData});
            case 'Active Directory':
                for(let user in this.props.users ) {
                    searchData.push(
                        this.props.users[user].ADID
                    )
                }
                return this.setState({searchList: searchData});
            case 'Payroll Number':
                for(let user in this.props.users ) {
                    searchData.push(
                        this.props.users[user].PayrollNumber
                    )
                }
                return this.setState({searchList: searchData});
            default:
                for(let user in this.props.users ) {
                    searchData.push(
                        this.props.users[user].PayrollNumber
                    )
                }
                return;
        }
    }

    //This handler will post a new update to Adjustments
    addAdjustment = (adjustments) => {
        axios.post(links.EDIT_ADJUSTMENTS_DB, adjustments)
    }

    render() {
        return (
            this.props.loading ? <Spinner/>:
            <div className={classes.EditUser}>
                <h1 className={classes.Header}>Edit Users</h1>
                <div style={{transform: 'translateX(2.3%)'}}>
                    <Search
                        placeholder={this.state.placeholder}
                        options={this.props.searchBy}
                        dataList={this.state.searchList}
                        change={(event) => this.onChangeSelect(event)}
                        value={this.state.userLookup}
                        changeText={(event) => this.onChangeText(event)}/>
                </div>
                <div className={classes.row}>
                    <User user={this.state.currentUser}/>
                    <EditBonuses/>
                    <EditUserTable
                        title={'Edit Adjustments'}
                        addAdjustments={(adjustments) => this.addAdjustment(
                            this.state.currentUser
                        )}
                    />
                    <AfterFloorAdjustments/>
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        users: state.editUsers.users,
        loading: state.editUsers.loading,
        searchBy: state.editUsers.searchBy
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch( actions.fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers);