import React, {Component} from 'react';
import Search from '../../components/UI/Search/Search';
import User from '../../components/EditUser/User/User';
import EditBonuses from '../../components/EditUser/EditBonuses/EditBonuses';
import EditUserTable from '../../components/EditUser/EditUserTable/EditUserTable';
import Spinner from '../../components/UI/Spinner/Spinner';
import AfterFloorAdjustments from '../../components/EditUser/AfterFloorAdjustments/AfterFloorAdjustments';
import classes from './EditUser.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
//import axios from 'axios';
//import * as links from '../../shared/Links';

class EditUsers extends Component {

    state = {
        userLookup: ''
    };

    componentDidMount() {
        this.props.onFetchUsers();
        this.props.onFetchAdjustments();
        this.props.onFetchAfterFloorAdjustments();
        this.props.onFetchFloors();
        this.props.onFetchSubsidies();
        this.props.onFetchEditBuyOuts();
    }

    //This handler changes what the value property is whenever we change the search input text
    onChangeText = (event) => {
        this.setState({userLookup: event.target.value});
        this.props.onSetCurrentUser(this.props.placeholder, event.target.value, this.props.users, this.props.adjustments, this.props.afterFloorAdjustments, this.props.editFloorList, this.props.editSubsidiesList, this.props.editBuyOutsList);
    };

    //This handler changes the state properties based on which value was selected
    onChangeSelect = (event) => {

        this.setState({userLookup: ''});

        this.props.onFetchAdjustments();
        this.props.onFetchAfterFloorAdjustments();

        switch(event.target.value){
            case 'AS400 ID':
                return this.props.onSetAS400Search(this.props.users);
            case 'Active Directory':
                return this.props.onSetADSearch(this.props.users);
            case 'Payroll Number':
                return this.props.onSetPayrollSearch(this.props.users);
            default:
                return this.props.onSetPayrollSearch(this.props.users);
        }
    };

    clear = () => {
        this.setState({userLookup: ''})
    };

    //This handler will post a new update to Adjustments

    render() {

        let adjustments = this.props.loadingAdjustments ? <Spinner/> : <EditUserTable afterFloor={false}/>;

        let afterFloorAdjustments = this.props.loadingAfterFloorAdjustments ? <Spinner/> : <AfterFloorAdjustments/>;

        return (
            (this.props.loadingUsers && this.props.loadingAdjustments && this.props.loadingAfterFloorAdjustments )? <Spinner/>:
                <div className={classes.EditUser}>
                    <h1 className={classes.Header}>Edit Users</h1>
                    <div style={{transform: 'translateX(2.3%)'}}>
                        <Search
                            placeholder={this.props.placeholder}
                            options={this.props.searchBy}
                            dataList={this.props.searchList}
                            change={(event) => this.onChangeSelect(event)}
                            value={this.state.userLookup}
                            click={this.clear}
                            changeText={(event) => this.onChangeText(event)}/>
                    </div>
                    <div className={classes.row}>
                        <User user={this.props.currentUser}/>
                        <EditBonuses/>
                        {adjustments}
                        {afterFloorAdjustments}
                    </div>
                </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        users: state.editUsers.users,
        loadingUsers: state.editUsers.loading,
        loadingAdjustments: state.editAdjustments.loading,
        loadingAfterFloorAdjustments: state.editAfterFloorAdjustments.loading,
        searchBy: state.editUsers.searchBy,
        searchList: state.editUsers.searchList,
        placeholder: state.editUsers.placeholder,
        currentUser: state.editUsers.currentUser,
        adjustments: state.editAdjustments.adjustments,
        afterFloorAdjustments: state.editAfterFloorAdjustments.adjustments,
        editFloorList: state.editFloors.editFloors,
        editSubsidiesList: state.editSubsidies.editSubsidies,
        editBuyOutsList: state.editBuyOuts.editBuyOuts
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchUsers: () => dispatch( actions.fetchUsers()),
        onSetPayrollSearch: (users) => dispatch(actions.setPayrollSearch(users)),
        onSetAS400Search: (users) => dispatch(actions.setAS400Search(users)),
        onSetADSearch: (users) => dispatch(actions.setADSearch(users)),
        onFetchFloors: () => dispatch(actions.fetchFloors()),
        onFetchSubsidies: () => dispatch(actions.fetchSubsidies()),
        onFetchEditBuyOuts: () => dispatch(actions.fetchBuyOuts()),
        onFetchAdjustments: () => dispatch(actions.fetchAdjustments()),
        onFetchAfterFloorAdjustments: () => dispatch(actions.fetchAfterFloorAdjustments()),
        onSetCurrentUser: (searchBy, ID, users, adjustments, afterFloorAdjustments, editFloors, editSubsidies, editBuyOut) => dispatch(actions.setCurrentUser(searchBy, ID, users, adjustments, afterFloorAdjustments, editFloors, editSubsidies, editBuyOut))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUsers);