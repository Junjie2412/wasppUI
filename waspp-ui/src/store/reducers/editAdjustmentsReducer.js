import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";
import moment from 'moment';

const initialState = {
    adjustments: [],
    afterFloorAdjustments: [],
    currentAdjustment: {
        date: moment(),
        comment: '',
        amount: ''
    },
    user: {
            ADID: '',
            FirstName: '',
            LastName: '',
            AS400: '',
            Base: '',
            CommissionAdv: '',
            PayrollNumber: '',
            FileNumber: '',
            TerrDescription: '',
            TerrID: ''
    },
    loading: false
}


const addAdjustmentStart = (state, action ) => {
    return updateObject(state, { loading: true })
}

const addAdjustmentSuccess = (state, action) => {
    return updateObject(state, {loading: false})
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

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ADJUSTMENT_START: return addAdjustmentStart(state, action);
        case actionTypes.ADD_ADJUSTMENT_SUCCESS: return addAdjustmentSuccess(state, action);
        case actionTypes.EDIT_ADJUSTMENT_DATE: return editAdjustmentDate(state, action);
        case actionTypes.EDIT_ADJUSTMENT_COMMENT: return editAdjustmentComment(state, action);
        case actionTypes.EDIT_ADJUSTMENT_AMOUNT: return editAdjustmentAmount(state, action)
        default: return state;
    }
};

export default reducer;