import * as actionTypes from '../actions';

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
        case
    }
};

export default reducer;