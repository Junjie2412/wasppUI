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

export const addAdjustment = (adjustmentData) => {
    return dispatch => {
        dispatch( addAdjustmentStart() );
        axios.post(links.EDIT_ADJUSTMENTS_DB+'.json', adjustmentData)
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

// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch the list of Adjustments

export const fetchAdjustmentsStart = () => {
    return {
        type: actionTypes.FETCH_ADJUSTMENTS_START
    };
}

export const fetchAdjustmentsSuccess = (adjustmentsList) => {
    return {
        adjustments: adjustmentsList,
        type: actionTypes.FETCH_ADJUSTMENTS_SUCCESS
    };
};

export const fetchAdjustments = () => {
    return dispatch => {
        dispatch(fetchAdjustmentsStart());
        axios.get(links.EDIT_ADJUSTMENTS_DB+'.json')
            .then(response => {
                const dataList = [];
                for(let adj in response.data ) {
                    dataList.push( {
                        ...response.data[adj],
                        id: [adj]
                    })
                }
                dispatch(fetchAdjustmentsSuccess(dataList))
            });
    }
}

export const setCurrentUserAdjustments = (adjustmentsList, selectedUser, setBy) => {

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
                type: actionTypes.SET_CURRENT_USER_ADJUSTMENTS,
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
                type: actionTypes.SET_CURRENT_USER_ADJUSTMENTS,
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
                type: actionTypes.SET_CURRENT_USER_ADJUSTMENTS,
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
                type: actionTypes.SET_CURRENT_USER_ADJUSTMENTS,
                currentUserAdjustments: dataList
            }
        }
}

// ************************************************************************//
// ************************************************************************//
// The function below selects a current adjustment
export const selectAdjustment = (adjustmentData) => {
    return {
        type: actionTypes.SELECT_ADJUSTMENT,
        data: adjustmentData
    }
}

// ************************************************************************//
// ************************************************************************//
// The below functions delete an adjustment
export const deleteAdjustmentStart = () => {
    return {
        type: actionTypes.DELETE_ADJUSTMENT_START
    }
}

export const deleteAdjustmentSuccess = (id) => {
    return {
        type: actionTypes.DELETE_ADJUSTMENT_SUCCESS,
        id: id,
    }
}

export const deleteAdjustment = (id) => {
    return dispatch => {
        dispatch( deleteAdjustmentStart() );
        axios.delete(links.EDIT_ADJUSTMENTS_DB+'/'+id+'.json')
            .then(response => {
                dispatch(deleteAdjustmentSuccess(response.data.name))
            })
    };
}