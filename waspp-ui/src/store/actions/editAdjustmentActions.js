import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon adding an adjustment

export const addAdjustmentStart = () => {
    return {
        type: actionTypes.ADD_ADJUSTMENT_START
    };
}

export const addAdjustmentSuccess = (id, adjustmentData) => {
    return {
        type: actionTypes.ADD_ADJUSTMENT_SUCCESS,
        id: id,
        data: adjustmentData
    }
}

export const addAdjustment = (adjustmentData ) => {
    return dispatch => {
        dispatch( addAdjustmentStart() );
        axios.post(links.EDIT_ADJUSTMENTS_DB, adjustmentData)
            .then(response => {
                dispatch(addAdjustmentSuccess(response.data.name, adjustmentData))
            })
    };
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit adjustments form

export const editAdjustmentDate = (adjustmentDate) => {
    return {
        type: actionTypes.EDIT_ADJUSTMENT_DATE,
        date: adjustmentDate
    }
}

export const editAdjustmentComment = (adjustmentComment) => {
    return {
        type: actionTypes.EDIT_ADJUSTMENT_COMMENT,
        comment: adjustmentComment
    }
}

export const editAdjustmentAmount = (adjustmentAmount) => {
    return {
        type: actionTypes.EDIT_ADJUSTMENT_AMOUNT,
        amount: adjustmentAmount
    }
}