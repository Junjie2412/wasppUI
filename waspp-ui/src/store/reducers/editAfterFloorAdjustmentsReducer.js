import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";
import moment from 'moment';

const initialState = {
    adjustments: [],
    currentAdjustment: {
        date: moment(),
        comment: '',
        amount: ''
    },
    currentUserAdjustments: [],
    loading: false
}

const addAfterFloorAdjustmentStart = (state, action ) => {
    return updateObject(state, { loading: true })
}

const addAfterFloorAdjustmentSuccess = (state, action) => {
    return updateObject(state, {loading: false})
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_AFTER_FLOOR_ADJUSTMENT_START: return addAfterFloorAdjustmentStart(state, action);
        case actionTypes.ADD_AFTER_FLOOR_ADJUSTMENT_SUCCESS: return addAfterFloorAdjustmentSuccess(state, action);
        case actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_DATE: return editAfterFloorAdjustmentDate(state, action);
        case actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_COMMENT: return editAfterFloorAdjustmentComment(state, action);
        case actionTypes.EDIT_AFTER_FLOOR_ADJUSTMENT_AMOUNT: return editAfterFloorAdjustmentAmount(state, action);
        case actionTypes.FETCH_AFTER_FLOOR_ADJUSTMENTS_START: return fetchAfterFloorAdjustmentsStart(state, action);
        case actionTypes.FETCH_AFTER_FLOOR_ADJUSTMENTS_SUCCESS: return fetchAfterFloorAdjustmentsSuccess(state, action);
        case actionTypes.SET_CURRENT_USER_AFTER_FLOOR_ADJUSTMENTS: return setCurrentUserAfterFloorAdjustments(state, action);
        default: return state;
    }
};

export default reducer;