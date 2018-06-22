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
    selectedAdjustment: {
        id: '',
        weekEndDate: '',
        comment: '',
        amount: ''
    },
    loading: false
}

const addAdjustmentStart = (state, action ) => {
    return updateObject(state, { loading: true })
}

const addAdjustmentSuccess = (state, action) => {
    const newAdjustment = updateObject(action.data, {id: action.id});
    return updateObject(state, {loading: false, currentAdjustment: {
        date: moment(),
            comment: '',
            amount: ''
    }, currentUserAdjustments: state.currentUserAdjustments.concat(newAdjustment)})
}

const editAdjustmentDate = (state, action) => {
    return updateObject(state, {currentAdjustment: updateObject(state.currentAdjustment, {date: action.date})})
}

const editAdjustmentComment = (state, action) => {
    return updateObject(state, {currentAdjustment: updateObject(state.currentAdjustment, {comment: action.comment})})
}

const editAdjustmentAmount = (state, action) => {
    return updateObject(state, {currentAdjustment: updateObject(state.currentAdjustment, {amount: action.amount})})
}

const fetchAdjustmentsStart = (state, action) => {
    return updateObject( state, { loading: true} )
}

const fetchAdjustmentsSuccess = (state, action) => {
    return updateObject( state, {
        adjustments: action.adjustments,
        loading: false
    })
}

const setCurrentUserAdjustments = (state, action) => {
    return updateObject( state, {
        currentUserAdjustments: action.currentUserAdjustments
    })
}

const selectAdjustment = (state, action) => {
    return updateObject(state, {
        selectedAdjustment: action.data
    })
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ADJUSTMENT_START: return addAdjustmentStart(state, action);
        case actionTypes.ADD_ADJUSTMENT_SUCCESS: return addAdjustmentSuccess(state, action);
        case actionTypes.EDIT_ADJUSTMENT_DATE: return editAdjustmentDate(state, action);
        case actionTypes.EDIT_ADJUSTMENT_COMMENT: return editAdjustmentComment(state, action);
        case actionTypes.EDIT_ADJUSTMENT_AMOUNT: return editAdjustmentAmount(state, action);
        case actionTypes.FETCH_ADJUSTMENTS_START: return fetchAdjustmentsStart(state, action);
        case actionTypes.FETCH_ADJUSTMENTS_SUCCESS: return fetchAdjustmentsSuccess(state, action);
        case actionTypes.SET_CURRENT_USER_ADJUSTMENTS: return setCurrentUserAdjustments(state, action);
        case actionTypes.SELECT_ADJUSTMENT: return selectAdjustment(state, action);
        default: return state;
    }
};

export default reducer;