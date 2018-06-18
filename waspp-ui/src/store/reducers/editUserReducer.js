import * as actionTypes from '../actions/actionTypes';

const initialState = {
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
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_USER:
            return {

            };
        case actionTypes.SET_SEARCH_BY:
            return {

            };
        default:
            return state;
    }
};

export default reducer;