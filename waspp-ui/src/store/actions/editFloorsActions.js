import * as actionTypes from './actionTypes';
//import axios from 'axios';
//import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit floors form

export const editFloorAmount = (amount) => {
    return {
        type: actionTypes.EDIT_FLOOR_AMOUNT,
        amount: amount
    }
};

export const editFloorStartDate = (date) => {
    return {
        type: actionTypes.EDIT_FLOOR_START_DATE,
        date: date
    }
};

export const editFloorEndDate = (date) => {
    return {
        type: actionTypes.EDIT_FLOOR_END_DATE,
        date: date
    }
};

export const editFloorComment = (comment) => {
    return {
        type: actionTypes.EDIT_FLOOR_COMMENT,
        comment: comment
    }
};