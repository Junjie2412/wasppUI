import * as actionTypes from './actionTypes';
//import axios from 'axios';
//import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit buy outs

export const editBuyOutAmount = (amount) => {
    return {
        type: actionTypes.EDIT_BUYOUT_AMOUNT,
        amount: amount
    }
};

export const editBuyOutStartDate = (date) => {
    return {
        type: actionTypes.EDIT_BUYOUT_START_DATE,
        date: date
    }
};


export const editBuyOutComment = (comment) => {
    return {
        type: actionTypes.EDIT_BUYOUT_COMMENT,
        comment: comment
    }
};