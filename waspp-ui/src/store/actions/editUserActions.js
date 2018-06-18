import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';


export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    };
};

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUsersStart());
        axios.get(links.EDIT_USERS_DB)
            .then(response => {
                const dataList = [];
                for(let user in response.data ) {
                    dataList.push( {
                        ...response.data[user],
                        id: [user]
                    })
                }
                dispatch(fetchUsersSuccess(dataList))
            });
    }
}