import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';


// ************************************************************************//
// ************************************************************************//

export const setCurrentEmployee = (employee) => {
    return {
        type: actionTypes.SET_CURRENT_EMPLOYEE,
        employee: employee
    }
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit employee form

export const editEmployeeAS400ID = (empAS400ID) => {
    return {
        type: actionTypes.EDIT_EMPLOYEE_AS400ID,
        empAS400ID: empAS400ID
    }
};

export const editEmployeeBonusFlight = (empBonusFlight) => {
    return {
        type: actionTypes.EDIT_EMPLOYEE_BONUS_FLIGHT,
        empBonusFlight: empBonusFlight
    }
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will save the new employee thats edited and post them
export const editEmployeeStart = () => {
    return {
        type: actionTypes.EDIT_EMPLOYEE_START
    }
};

export const editEmployeeSuccess = (newEmployee) => {
    return {
        type: actionTypes.EDIT_EMPLOYEE_SUCCESS,
        employee: newEmployee
    }
};

export const editEmployee = (newEmployee) => {
    return dispatch => {
        dispatch(editEmployeeStart());
        axios.put(links.EDIT_USERS_DB+'/'+newEmployee.id+'.json', newEmployee)
            .then(response => {
                dispatch(editEmployeeSuccess(newEmployee));
            })
    }
};