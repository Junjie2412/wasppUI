import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    editBuyOuts: {

    },
    currentEditBuyOut: {
        id: '',
        amount: '',
        startDate: null,
        comment: ''
    },
    loading: false
};

const editBuyOutAmount = (state, action) => {
    return updateObject(state, {currentEditBuyOut: updateObject(state.currentEditBuyOut, {amount: action.amount})})
};

const editBuyOutStartDate = (state, action) => {
    return updateObject(state, {currentEditBuyOut: updateObject(state.currentEditBuyOut, {startDate: action.date})})
};

const editBuyOutComment = (state, action) => {
    return updateObject(state, {currentEditBuyOut: updateObject(state.currentEditBuyOut, {comment: action.comment})})
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_BUYOUT_AMOUNT: return editBuyOutAmount(state, action);
        case actionTypes.EDIT_BUYOUT_START_DATE: return editBuyOutStartDate(state, action);
        case actionTypes.EDIT_BUYOUT_COMMENT: return editBuyOutComment(state, action);
        default: return state;
    }
};

export default reducer;