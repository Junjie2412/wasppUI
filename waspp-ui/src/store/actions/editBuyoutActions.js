import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

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

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon adding a new buy out change
export const editBuyOutStart = () => {
    return {
        type: actionTypes.EDIT_BUYOUT_START
    };
};

export const editBuyOutSuccess = (id, data) => {
    return {
        type: actionTypes.EDIT_BUYOUT_SUCCESS,
        id: id,
        data: data
    }
};

export const postEditBuyOut = (data) => {
    return dispatch => {
        dispatch( editBuyOutStart());
        dispatch( setCurrentEditBuyOut(data));
        dispatch( currentUserHasBuyOuts());
        axios.post(links.EDIT_BUY_OUTS+'.json', data)
            .then(response => {
                dispatch(editBuyOutSuccess(response.data.name, data));
            });
    };
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon deleting a buy outs
export const deleteEditBuyOutStart = () => {
    return {
        type: actionTypes.DELETE_EDIT_BUYOUT_START
    }
};

export const deleteEditBuyOutSuccess = (id) => {
    return {
        type: actionTypes.DELETE_EDIT_BUYOUT_SUCCESS,
        id: id,
    }
};
export const deleteEditBuyOut = (id) => {
    return dispatch => {
        dispatch( deleteEditBuyOutStart() );
        dispatch( clearEditBuyOut());
        dispatch( currentUserDoesNotHaveBuyOuts());
        axios.delete(links.EDIT_BUY_OUTS+'/'+id+'.json')
            .then(response => {
                dispatch(deleteEditBuyOutSuccess(id))
            })
    };
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch all the buy outs data

export const fetchEditBuyOutsStart = () => {
    return {
        type: actionTypes.FETCH_EDIT_BUYOUT_START
    }
};

export const fetchEditBuyOutsSuccess = (data) => {
    return {
        type: actionTypes.FETCH_EDIT_BUYOUT_SUCCESS,
        data: data
    }
};

export const fetchBuyOuts = () => {
    return dispatch => {
        dispatch(fetchEditBuyOutsStart());
        axios.get(links.EDIT_BUY_OUTS+'.json')
            .then(response => {
                const dataList = [];
                for(let buyout in response.data ) {
                    dataList.push( {
                        ...response.data[buyout],
                        id: buyout
                    })
                }
                dispatch(fetchEditBuyOutsSuccess(dataList))
            });
    }
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will change the state of whether the current user has a buy outs or not.

export const currentUserHasBuyOuts = () => {
    return {
        type: actionTypes.CURRENT_USER_HAS_BUYOUT
    }
};

export const currentUserDoesNotHaveBuyOuts = () => {
    return {
        type: actionTypes.CURRENT_USER_DOES_NOT_HAVE_BUYOUT
    }
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will change the current user's edit buy outs if he/she has one
export const setCurrentEditBuyOut = (data) => {
    return {
        type: actionTypes.SET_CURRENT_EDIT_BUYOUT,
        data: data
    }
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will clear the edit buy outs form
export const clearEditBuyOut = () => {
    return {
        type: actionTypes.CLEAR_EDIT_BUYOUT
    }
};