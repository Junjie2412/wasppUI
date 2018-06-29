import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

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

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon adding a new floor change
export const editFloorsStart = () => {
    return {
        type: actionTypes.EDIT_FLOORS_START
    };
};

export const editFloorsSuccess = (id, adjustmentData) => {
    return {
        type: actionTypes.EDIT_FLOORS_SUCCESS,
        id: id,
        data: adjustmentData
    }
};

export const postEditFloors = (floorData) => {
    return dispatch => {
        dispatch( editFloorsStart() );
        axios.post(links.EDIT_FLOORS+'.json', floorData)
            .then(response => {
                dispatch(editFloorsSuccess(response.data.name, floorData))
            })
    };
};


export const putEditFloors = (floorData, id) => {
    return dispatch => {
        dispatch( editFloorsStart() );
        axios.put(links.EDIT_FLOORS+'/'+id+'.json', floorData)
            .then(response => {
                dispatch(editFloorsSuccess(response.data.name, floorData))
            })
    };
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will follow upon deleting an edit floor
export const deleteEditFloorStart = () => {
    return {
        type: actionTypes.DELETE_EDIT_FLOOR_START
    }
};

export const deleteEditFloorSuccess = (id) => {
    return {
        type: actionTypes.DELETE_EDIT_FLOOR_SUCCESS,
        id: id,
    }
};
export const deleteEditFloor = (floorData, id) => {
    return dispatch => {
        dispatch( deleteEditFloorStart() );
        axios.delete(links.EDIT_FLOORS+'/'+id+'.json', floorData)
            .then(response => {
                dispatch(deleteEditFloorSuccess(id))
            })
    };
};

// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch all the floors data

export const fetchEditFloorsStart = () => {
    return {
        type: actionTypes.FETCH_EDIT_FLOORS_START
    }
};

export const fetchEditFloorsSuccess = (floorsData) => {
    return {
        type: actionTypes.FETCH_EDIT_FLOORS_SUCCESS,
        floorsData: floorsData
    }
};

export const fetchFloors = () => {
    return dispatch => {
        dispatch(fetchEditFloorsStart());
        axios.get(links.EDIT_FLOORS+'.json')
            .then(response => {
                const dataList = [];
                for(let floor in response.data ) {
                    dataList.push( {
                        ...response.data[floor],
                        id: floor
                    })
                    console.log(floor)
                }
                dispatch(fetchEditFloorsSuccess(dataList))
            });
    }
};