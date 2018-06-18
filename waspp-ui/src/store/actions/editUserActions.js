import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

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
        placeholder: 'Active Directory ID'
    }
}