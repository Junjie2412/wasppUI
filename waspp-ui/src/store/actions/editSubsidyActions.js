import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon changing the edit subsidies

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


// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon adding a new subsidy change
export const editSubsidiesStart = () => {
    return {
        type: actionTypes.EDIT_SUBSIDIES_START
    };
};

export const editSubsidiesSuccess = (id, data) => {
    return {
        type: actionTypes.EDIT_SUBSIDIES_SUCCESS,
        id: id,
        data: data
    }
};

export const postEditSubsidies = (data) => {
    return dispatch => {
        dispatch( editSubsidiesStart());
        dispatch( setCurrentEditSubsidy(data));
        dispatch( currentUserHasSubsidies());
        axios.post(links.EDIT_SUBSIDIES+'.json', data)
            .then(response => {
                dispatch(editSubsidiesSuccess(response.data.name, data));
            });
    };
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon deleting a subsidy
export const deleteEditSubsidyStart = () => {
    return {
        type: actionTypes.DELETE_EDIT_SUBSIDY_START
    }
};

export const deleteEditSubsidySuccess = (id) => {
    return {
        type: actionTypes.DELETE_EDIT_SUBSIDY_SUCCESS,
        id: id,
    }
};
export const deleteEditSubsidy = (id) => {
    return dispatch => {
        dispatch( deleteEditSubsidyStart() );
        dispatch( clearEditSubsidy());
        dispatch( currentUserDoesNotHaveSubsidies());
        axios.delete(links.EDIT_SUBSIDIES+'/'+id+'.json')
            .then(response => {
                dispatch(deleteEditSubsidySuccess(id))
            })
    };
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch all the subsidies data

export const fetchEditSubsidiesStart = () => {
    return {
        type: actionTypes.FETCH_EDIT_SUBSIDIES_START
    }
};

export const fetchEditSubsidiesSuccess = (data) => {
    return {
        type: actionTypes.FETCH_EDIT_SUBSIDIES_SUCCESS,
        data: data
    }
};

export const fetchSubsidies = () => {
    return dispatch => {
        dispatch(fetchEditSubsidiesStart());
        axios.get(links.EDIT_SUBSIDIES+'.json')
            .then(response => {
                const dataList = [];
                for(let subsidy in response.data ) {
                    dataList.push( {
                        ...response.data[subsidy],
                        id: subsidy
                    })
                }
                dispatch(fetchEditSubsidiesSuccess(dataList))
            });
    }
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will change the state of whether the current user has a subsidy or not.

export const currentUserHasSubsidies = () => {
    return {
        type: actionTypes.CURRENT_USER_HAS_SUBSIDIES
    }
};

export const currentUserDoesNotHaveSubsidies = () => {
    return {
        type: actionTypes.CURRENT_USER_DOES_NOT_HAVE_SUBSIDIES
    }
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will change the current user's edit Subsidy if he/she has one
export const setCurrentEditSubsidy = (data) => {
    return {
        type: actionTypes.SET_CURRENT_EDIT_SUBSIDY,
        data: data
    }
};


// ************************************************************************//
// ************************************************************************//
// The below are functions that will clear the edit subsidies form
export const clearEditSubsidy = () => {
    return {
        type: actionTypes.CLEAR_EDIT_SUBSIDY
    }
};