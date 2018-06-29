import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    BonusFlights: ['', 'A', 'B', 'C', 'D', 'E', 'F'],
    currentEmployee: {
        id: '',
        ADID: '',
        BonusFlight: '',
        FirstName: '',
        LastName: '',
        AS400ID: '',
        Base: '',
        CommissionAdv: '',
        PayrollNumber: '',
        FileNumber: '',
        TerrDescription: '',
        TerrID: ''
    },
    loading: false
};

const setCurrentEmployee = (state, action) => {
    return updateObject(state, {currentEmployee: action.employee})
};

const editEmployeeAS400ID = (state, action) => {
    return updateObject(state, {currentEmployee: updateObject(state.currentEmployee, {AS400ID: action.empAS400ID})})
};

const editEmployeeBonusFlight = (state, action) => {
    return updateObject(state, {currentEmployee: updateObject(state.currentEmployee, {BonusFlight: action.empBonusFlight})})
};

const editEmployeeStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const editEmployeeSuccess = (state, action) => {
    return updateObject(state, {loading: false});
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_EMPLOYEE_START: return editEmployeeStart(state, action);
        case actionTypes.EDIT_EMPLOYEE_SUCCESS: return editEmployeeSuccess(state, action);
        case actionTypes.SET_CURRENT_EMPLOYEE: return setCurrentEmployee(state, action);
        case actionTypes.EDIT_EMPLOYEE_BONUS_FLIGHT: return editEmployeeBonusFlight(state, action);
        case actionTypes.EDIT_EMPLOYEE_AS400ID: return editEmployeeAS400ID(state, action);
        default: return state;
    }
};

export default reducer;