import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../utility";

const initialState = {
    users: [],
    currentUser: {
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
    },
    searchBy: ['Payroll Number','AS400 ID', 'Active Directory'],
    loading: false
}

const fetchUsersStart = (state, action) => {
    return updateObject( state, { loading: true} )
}

const fetchUsersSuccess = (state, action) => {
    return updateObject( state, {
        users: action.users,
        loading: false
    })
}

const setCurrentUser = (state, action) => {
    return state;
}

const setSearchBy = (state, action) => {
    return state;
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USERS_START: return fetchUsersStart(state, action);
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.SET_CURRENT_USER: return setCurrentUser(state, action);
        case actionTypes.SET_SEARCH_BY: return setSearchBy(state, action);
        default: return state;
    }
};

export default reducer;