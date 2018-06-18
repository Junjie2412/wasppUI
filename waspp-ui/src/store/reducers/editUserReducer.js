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
    searchList: [],
    placeholder: 'Payroll Number',
    searchBy: ['Payroll Number','AS400 ID', 'Active Directory'],
    loading: false
}

const fetchUsersStart = (state, action) => {
    return updateObject( state, { loading: true} )
}

const fetchUsersSuccess = (state, action) => {
    return updateObject( state, {
        users: action.users,
        loading: false,
        searchList: action.searchList
    })
}

const setPayrollSearch = (state, action) => {
    return updateObject( state, {
        searchList: action.searchList,
        placeholder: action.placeholder
    })
}

const setAS400Search = (state, action) => {
    return updateObject( state, {
        searchList: action.searchList,
        placeholder: action.placeholder
    })
}
const setADSearch = (state, action) => {
    return updateObject( state, {
        searchList: action.searchList,
        placeholder: action.placeholder
    })
}

const setCurrentUser = (state, action) => {
    return state;
}

const setSearchBy = (state, action) => {
    return state;
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USERS_START: return fetchUsersStart(state, action);
        case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action);
        case actionTypes.SET_PAYROLL_SEARCH: return setPayrollSearch(state, action);
        case actionTypes.SET_AD_SEARCH: return setADSearch(state, action);
        case actionTypes.SET_AS400_SEARCH: return setAS400Search(state, action);
        case actionTypes.SET_CURRENT_USER: return setCurrentUser(state, action);
        case actionTypes.SET_SEARCH_BY: return setSearchBy(state, action);
        default: return state;
    }
};

export default reducer;