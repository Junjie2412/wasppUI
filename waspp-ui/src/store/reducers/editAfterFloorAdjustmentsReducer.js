import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";
import moment from 'moment';

const initialState = {
    isOpened: false,
    adjustments: [],
    currentAdjustment: {
        date: moment(),
        comment: '',
        amount: ''
    },
    currentUserAdjustments: [],
    selectedAdjustment: {
        id: '',
        weekEndDate: '',
        comment: '',
        amount: ''
    },
    isSelected: false,
    loading: false
};

const openAfterFloor = (state, action) => {
    return updateObject(state, {isOpened: true})
};

const closeAfterFloor = (state, action) => {
    return updateObject(state, {isOpened: false})
};

const addAfterFloorAdjustmentStart = (state, action ) => {
    return updateObject(state, { loading: true })
}

const addAfterFloorAdjustmentSuccess = (state, action) => {
    const newAdjustment = updateObject(action.data, {id: action.id});
    return updateObject(state, {loading: false, currentAdjustment: {
        date: moment(),
        comment: '',
        amount: ''
    }, currentUserAdjustments: state.currentUserAdjustments.concat(newAdjustment)})
}

const editAfterFloorAdjustmentDate = (state, action) => {
    return updateObject(state, {currentAdjustment: updateObject(state.currentAdjustment, {date: action.date})})
}

const editAfterFloorAdjustmentComment = (state, action) => {
    return updateObject(state, {currentAdjustment: updateObject(state.currentAdjustment, {comment: action.comment})})
}

const editAfterFloorAdjustmentAmount = (state, action) => {
    return updateObject(state, {currentAdjustment: updateObject(state.currentAdjustment, {amount: action.amount})})
}

const fetchAfterFloorAdjustmentsStart = (state, action) => {
    return updateObject( state, { loading: true} )
}

const fetchAfterFloorAdjustmentsSuccess = (state, action) => {
    return updateObject( state, {
        adjustments: action.adjustments,
        loading: false
    })
}

const setCurrentUserAfterFloorAdjustments = (state, action) => {
    return updateObject( state, {
        currentUserAdjustments: action.currentUserAdjustments
    })
}

const selectAfterFloorAdjustment = (state, action) => {
    return updateObject(state, {
        selectedAdjustment: action.data,
        isSelected: true
    })
}

const deleteAfterFloorAdjustmentStart = (state, action) => {
    return updateObject(state, {
        loading: true
    })
}

const deleteAfterFloorAdjustmentSuccess = (state, action) => {
    const newArray = state.currentUserAdjustments;
    for (let data in newArray) {
        console.log(action.id + '=====' + newArray[data].id)
        if (newArray[data].id === action.id) {
            console.log(newArray);
            newArray.splice(data, 1);
            console.log(newArray);
        }
    }
    return updateObject(state, {
        loading: false,
        isSelected: false,
        currentUserAdjustments: newArray,
        selectedAdjustment: {
            id: '',
            weekEndDate: '',
            comment: '',
            amount: ''
        }
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.OPEN_AFTER_FLOOR: return openAfterFloor(state, action);
        case actionTypes.CLOSE_AFTER_FLOOR: return closeAfterFloor(state, action);
        case actionTypes.ADD_AFTER_FLOOR_ADJUSTMENT_START: return addAfterFloorAdjustmentStart(state, action);
        case actionTypes.ADD_AFTER_FLOOR_ADJUSTMENT_SUCCESS: return addAfterFloorAdjustmentSuccess(state, action);
        case actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_DATE: return editAfterFloorAdjustmentDate(state, action);
        case actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_COMMENT: return editAfterFloorAdjustmentComment(state, action);
        case actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_AMOUNT: return editAfterFloorAdjustmentAmount(state, action);
        case actionTypes.FETCH_AFTER_FLOOR_ADJUSTMENTS_START: return fetchAfterFloorAdjustmentsStart(state, action);
        case actionTypes.FETCH_AFTER_FLOOR_ADJUSTMENTS_SUCCESS: return fetchAfterFloorAdjustmentsSuccess(state, action);
        case actionTypes.SET_CURRENT_USER_AFTER_FLOOR_ADJUSTMENTS: return setCurrentUserAfterFloorAdjustments(state, action);
        case actionTypes.SELECT_AFTER_FLOOR_ADJUSTMENT: return selectAfterFloorAdjustment(state, action);
        case actionTypes.DELETE_AFTER_FLOOR_ADJUSTMENT_START: return deleteAfterFloorAdjustmentStart(state, action);
        case actionTypes.DELETE_AFTER_FLOOR_ADJUSTMENT_SUCCESS: return deleteAfterFloorAdjustmentSuccess(state, action);
        default: return state;
    }
};

export default reducer;