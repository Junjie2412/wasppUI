import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below functions will fetch the users list from the database

// This will begin the fetch
export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

// This will be what happens if we successfully fetch
export const fetchUsersSuccess = (users, searchList) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users,
        searchList: searchList
    };
};

// This large function combines the above two functions and sets the Redux Global users variables
export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersStart());
        axios.get(links.EDIT_USERS_DB)
            .then(response => {
                const dataList = [];
                const searchData= [];
                for(let user in response.data ) {
                    dataList.push( {
                        ...response.data[user],
                        id: [user]
                    })
                }
                for(let user in dataList ) {
                    searchData.push(
                        dataList[user].PayrollNumber
                    )
                }
                dispatch(fetchUsersSuccess(dataList, searchData))
            });
    }
}

//************************************************************************//
//************************************************************************//
// The below actions will change the search list

// This will change the searchlist to search by Payroll Number
export const setPayrollSearch = (users) => {

    let searchData = [];
    for(let user in users ) {
        searchData.push(
            users[user].PayrollNumber
        )
    }
    return {
        type: actionTypes.SET_PAYROLL_SEARCH,
        searchList: searchData,
        placeholder: 'Payroll Number'
    }
}

// This will change the searchlist to search by AS400 ID
export const setAS400Search = (users) => {
    let searchData = [];
    for(let user in users ) {
        searchData.push(
            users[user].AS400ID
        )
    }
    return {
        type: actionTypes.SET_AS400_SEARCH,
        searchList: searchData,
        placeholder: 'AS400 ID'
    }
}

// This will change the searchlist to search by Active Directory ID
export const setADSearch = (users) => {
    let searchData = [];
    for(let user in users ) {
        searchData.push(
            users[user].ADID
        )
    }
    return {
        type: actionTypes.SET_AD_SEARCH,
        searchList: searchData,
        placeholder: 'Active Directory'
    }
}
//************************************************************************//
//************************************************************************//
// The below functions will set the current user
export const setCurrentUser = (searchBy, ID, users) => {

    let selected = false;

    let currUser = {
        ADID: '',
        FirstName: '',
        LastName: '',
        AS400: '',
        Base: '',
        CommissionAdv: '',
        PayrollNumber: '',
        FileNumber: '',
        TerrDescription: '',
        TerrID: ''
    };


    switch (searchBy) {
        case 'AS400 ID':
        {
            for(let user in users){
                if(users[user].AS400ID === ID){
                    currUser = users[user];
                    selected = true;
                    break;
                }
            }
            break;
        }
        case 'Active Directory':
        {
            for(let user in users){
                if(users[user].ADID === ID){
                    currUser = users[user];
                    selected = true;
                    break;
                }
            }
            break;
        }
        case 'Payroll Number':
        {
            for(let user in users){
                if(users[user].PayrollNumber === ID){
                    currUser = users[user];
                    selected = true;
                    break;
                }
            }
            break;
        }
        default:
        {
            currUser = {
                ADID: '',
                FirstName: '',
                LastName: '',
                AS400: '',
                Base: '',
                CommissionAdv: '',
                PayrollNumber: '',
                FileNumber: '',
                TerrDescription: '',
                TerrID: ''
            };
            break;
        }

    }
    return {
        type: actionTypes.SET_CURRENT_USER,
        user: currUser,
        selected: selected
    };
}
