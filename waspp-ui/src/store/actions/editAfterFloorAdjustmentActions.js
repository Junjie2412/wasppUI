import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon adding an adjustment

export const addAfterFloorAdjustmentStart = () => {
    return {
        type: actionTypes.ADD_AFTER_FLOOR_ADJUSTMENT_START
    };
}

export const addAfterFloorAdjustmentSuccess = (id, adjustmentData) => {
    return {
        type: actionTypes.ADD_AFTER_FLOOR_ADJUSTMENT_SUCCESS,
        id: id,
        data: adjustmentData
    }
}

export const addAfterFloorAdjustment = (adjustmentData ) => {
    return dispatch => {
        dispatch( addAfterFloorAdjustmentStart() );
        axios.post(links.EDIT_AFTER_FLOOR_ADJUSTMENTS_DB+'.json', adjustmentData)
            .then(response => {
                dispatch(addAfterFloorAdjustmentSuccess(response.data.name, adjustmentData))
            })
    };
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit adjustments form

export const editAfterFloorAdjustmentDate = (adjustmentDate) => {
    return {
        type: actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_DATE,
        date: adjustmentDate
    }
}

export const editAfterFloorAdjustmentComment = (adjustmentComment) => {
    return {
        type: actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_COMMENT,
        comment: adjustmentComment
    }
}

export const editAfterFloorAdjustmentAmount = (adjustmentAmount) => {
    return {
        type: actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_AMOUNT,
        amount: adjustmentAmount
    }
}

// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch the list of After Floor Adjustments

export const fetchAfterFloorAdjustmentsStart = () => {
    return {
        type: actionTypes.FETCH_AFTER_FLOOR_ADJUSTMENTS_START
    };
}

export const fetchAfterFloorAdjustmentsSuccess = (adjustmentsList) => {
    return {
        adjustments: adjustmentsList,
        type: actionTypes.FETCH_AFTER_FLOOR_ADJUSTMENTS_SUCCESS
    };
};

export const fetchAfterFloorAdjustments = () => {
    return dispatch => {
        dispatch(fetchAfterFloorAdjustmentsStart());
        axios.get(links.EDIT_AFTER_FLOOR_ADJUSTMENTS_DB+'.json')
            .then(response => {
                const dataList = [];
                for(let adj in response.data ) {
                    dataList.push( {
                        ...response.data[adj],
                        id: [adj]
                    })
                }
                dispatch(fetchAfterFloorAdjustmentsSuccess(dataList))
            });
    }
}

export const setCurrentUserAfterFloorAdjustments = (adjustmentsList, selectedUser, setBy) => {

    const dataList = [];
    switch(setBy) {
        case 'Payroll Number':
            for(let adj in adjustmentsList ) {
                if (adjustmentsList[adj].user.PayrollNumber === selectedUser.PayrollNumber) {
                    dataList.push( {
                        ...adjustmentsList[adj],
                        id: [adjustmentsList[adj].id]
                    })
                }
            }
            return {
                type: actionTypes.SET_CURRENT_USER_AFTER_FLOOR_ADJUSTMENTS,
                currentUserAdjustments: dataList
            }
        case 'AS400 ID':
            for(let adj in adjustmentsList ) {
                if (adjustmentsList[adj].user.AS400ID === selectedUser.AS400ID) {
                    dataList.push( {
                        ...adjustmentsList[adj],
                        id: [adjustmentsList[adj].id]
                    })
                }
            }
            return {
                type: actionTypes.SET_CURRENT_USER_AFTER_FLOOR_ADJUSTMENTS,
                currentUserAdjustments: dataList
            }
        case 'Active Directory':
            for(let adj in adjustmentsList ) {
                if (adjustmentsList[adj].user.ADID === selectedUser.ADID) {
                    dataList.push( {
                        ...adjustmentsList[adj],
                        id: [adjustmentsList[adj].id]
                    })
                }
            }
            return {
                type: actionTypes.SET_CURRENT_USER_AFTER_FLOOR_ADJUSTMENTS,
                currentUserAdjustments: dataList
            }
        default:
            for(let adj in adjustmentsList ) {
                if (adjustmentsList[adj].user.PayrollNumber === selectedUser.PayrollNumber) {
                    dataList.push( {
                        ...adjustmentsList[adj],
                        id: [adjustmentsList[adj].id]
                    })
                }
            }
            return {
                type: actionTypes.SET_CURRENT_USER_AFTER_FLOOR_ADJUSTMENTS,
                currentUserAdjustments: dataList
            }
    }
}

// ************************************************************************//
// ************************************************************************//
// The below functions delete an adjustment
export const deleteAfterFloorAdjustmentStart = () => {
    return {
        type: actionTypes.DELETE_AFTER_FLOOR_ADJUSTMENT_START
    }
}

export const deleteAfterFloorAdjustmentSuccess = (id) => {
    return {
        type: actionTypes.DELETE_AFTER_FLOOR_ADJUSTMENT_SUCCESS,
        id: id,
    }
}

export const deleteAfterFloorAdjustment = (id) => {
    return dispatch => {
        dispatch( deleteAfterFloorAdjustmentStart() );
        axios.delete(links.EDIT_AFTER_FLOOR_ADJUSTMENTS_DB+'/'+id+'.json')
            .then(
                dispatch(deleteAfterFloorAdjustmentSuccess(id))
            )
    };
}