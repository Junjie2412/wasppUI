import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    editSubsidies: [],
    currentEditSubsidy: {
        id: '',
        amount: '',
        startDate: null,
        comment: ''
    },
    loading: false
};

const editSubsidyAmount = (state, action) => {
    return updateObject(state, {currentEditSubsidy: updateObject(state.currentEditSubsidy, {amount: action.amount})})
};

const editSubsidyStartDate = (state, action) => {
    return updateObject(state, {currentEditSubsidy: updateObject(state.currentEditSubsidy, {startDate: action.date})})
};

const editSubsidyComment = (state, action) => {
    return updateObject(state, {currentEditSubsidy: updateObject(state.currentEditSubsidy, {comment: action.comment})})
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_SUBSIDY_AMOUNT: return editSubsidyAmount(state, action);
        case actionTypes.EDIT_SUBSIDY_START_DATE: return editSubsidyStartDate(state, action);
        case actionTypes.EDIT_SUBSIDY_COMMENT: return editSubsidyComment(state, action);
        default: return state;
    }
};

export default reducer;