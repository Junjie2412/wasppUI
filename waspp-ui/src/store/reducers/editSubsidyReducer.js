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
    currentUserHasSubsidy: false,
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

const editSubsidiesStart = (state, action ) => {
    return updateObject(state, { loading: true })
};

const editSubsidiesSuccess = (state, action) => {
    const newSubsidy = updateObject(action.data, {id: action.id});
    return updateObject(state, {loading: false, editSubsidies: state.editSubsidies.concat(newSubsidy)});
};

const fetchEditSubsidiesStart = (state, action) => {
    return updateObject( state, { loading: true} )
};

const fetchEditSubsidiesSuccess = (state, action) => {
    return updateObject( state, {
        editSubsidies: action.data,
        loading: false
    })
};

const deleteEditSubsidiesStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
};

const deleteEditSubsidiesSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
};


const currentUserHasSubsidy = (state, action) => {
    return updateObject(state, {
        currentUserHasSubsidy: true
    })
};

const currentUserDoesNotHaveSubsidy = (state, action) => {
    return updateObject(state, {
        currentUserHasSubsidy: false
    })
};

const setCurrentEditSubsidy = (state, action) => {
    return updateObject(state, {
        currentEditSubsidy: action.data
    })
};

const clearEditSubsidy = (state, action) => {
    return updateObject(state, {
        currentEditSubsidy: {
            id: '',
            amount: '',
            startDate: null,
            comment: ''
        }
    })
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_SUBSIDY_AMOUNT: return editSubsidyAmount(state, action);
        case actionTypes.EDIT_SUBSIDY_START_DATE: return editSubsidyStartDate(state, action);
        case actionTypes.EDIT_SUBSIDY_COMMENT: return editSubsidyComment(state, action);
        case actionTypes.EDIT_SUBSIDIES_START: return editSubsidiesStart(state, action);
        case actionTypes.EDIT_SUBSIDIES_SUCCESS: return editSubsidiesSuccess(state, action);
        case actionTypes.FETCH_EDIT_SUBSIDIES_START: return fetchEditSubsidiesStart(state, action);
        case actionTypes.FETCH_EDIT_SUBSIDIES_SUCCESS: return fetchEditSubsidiesSuccess(state, action);
        case actionTypes.DELETE_EDIT_SUBSIDY_START: return deleteEditSubsidiesStart(state, action);
        case actionTypes.DELETE_EDIT_SUBSIDY_SUCCESS: return deleteEditSubsidiesSuccess(state, action);
        case actionTypes.CURRENT_USER_HAS_SUBSIDIES: return currentUserHasSubsidy(state, action);
        case actionTypes.CURRENT_USER_DOES_NOT_HAVE_SUBSIDIES: return currentUserDoesNotHaveSubsidy(state, action);
        case actionTypes.SET_CURRENT_EDIT_SUBSIDY: return setCurrentEditSubsidy(state, action);
        case actionTypes.CLEAR_EDIT_SUBSIDY: return clearEditSubsidy(state, action);
        default: return state;
    }
};

export default reducer;