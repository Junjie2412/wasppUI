import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit floors form

export const editSubsidyAmount = (amount) => {
    return {
        type: actionTypes.EDIT_SUBSIDY_AMOUNT,
        amount: amount
    }
};

export const editSubsidyStartDate = (date) => {
    return {
        type: actionTypes.EDIT_SUBSIDY_START_DATE,
        date: date
    }
};


export const editSubsidyComment = (comment) => {
    return {
        type: actionTypes.EDIT_SUBSIDY_COMMENT,
        comment: comment
    }
};