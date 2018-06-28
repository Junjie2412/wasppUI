import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    currentEditFloor: {
        amount: '',
        startDate: null,
        endDate: null,
        comment: ''
    },
    loading: false
};

const editFloorAmount = (state, action) => {
    return updateObject(state, {currentEditFloor: updateObject(state.currentEditFloor, {amount: action.amount})})
};

const editFloorStartDate = (state, action) => {
    return updateObject(state, {currentEditFloor: updateObject(state.currentEditFloor, {startDate: action.date})})
};
const editFloorEndDate = (state, action) => {
    return updateObject(state, {currentEditFloor: updateObject(state.currentEditFloor, {endDate: action.date})})
};

const editFloorComment = (state, action) => {
    return updateObject(state, {currentEditFloor: updateObject(state.currentEditFloor, {comment: action.comment})})
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_FLOOR_AMOUNT: return editFloorAmount(state, action);
        case actionTypes.EDIT_FLOOR_START_DATE: return editFloorStartDate(state, action);
        case actionTypes.EDIT_FLOOR_END_DATE: return editFloorEndDate(state, action);
        case actionTypes.EDIT_FLOOR_COMMENT: return editFloorComment(state, action);
        default: return state;
    }
};

export default reducer;