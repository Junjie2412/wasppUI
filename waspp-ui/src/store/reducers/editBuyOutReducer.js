import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    editBuyOuts: [],
    currentEditBuyOut: {
        id: '',
        amount: '',
        startDate: null,
        comment: ''
    },
    currentUserHasBuyOut: false,
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

const editBuyOutStart = (state, action ) => {
    return updateObject(state, { loading: true })
};

const editBuyOutSuccess = (state, action) => {
    const newBuyOut = updateObject(action.data, {id: action.id});
    return updateObject(state, {loading: false, editBuyOuts: state.editBuyOuts.concat(newBuyOut)});
};

const fetchEditBuyOutStart = (state, action) => {
    return updateObject( state, { loading: true} )
};

const fetchEditBuyOutSuccess = (state, action) => {
    return updateObject( state, {
        editBuyOuts: action.data,
        loading: false
    })
};

const deleteEditBuyOutStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
};

const deleteEditBuyOutSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
};


const currentUserHasBuyOut = (state, action) => {
    return updateObject(state, {
        currentUserHasBuyOut: true
    })
};

const currentUserDoesNotHaveBuyOut = (state, action) => {
    return updateObject(state, {
        currentUserHasBuyOut: false
    })
};

const setCurrentEditBuyOut = (state, action) => {
    return updateObject(state, {
        currentEditBuyOut: action.data
    })
};

const clearEditBuyOut = (state, action) => {
    return updateObject(state, {
        currentEditBuyOut: {
            id: '',
            amount: '',
            startDate: null,
            comment: ''
        }
    })
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_BUYOUT_AMOUNT: return editBuyOutAmount(state, action);
        case actionTypes.EDIT_BUYOUT_START_DATE: return editBuyOutStartDate(state, action);
        case actionTypes.EDIT_BUYOUT_COMMENT: return editBuyOutComment(state, action);
        case actionTypes.EDIT_BUYOUT_START: return editBuyOutStart(state, action);
        case actionTypes.EDIT_BUYOUT_SUCCESS: return editBuyOutSuccess(state, action);
        case actionTypes.FETCH_EDIT_BUYOUT_START: return fetchEditBuyOutStart(state, action);
        case actionTypes.FETCH_EDIT_BUYOUT_SUCCESS: return fetchEditBuyOutSuccess(state, action);
        case actionTypes.DELETE_EDIT_BUYOUT_START: return deleteEditBuyOutStart(state, action);
        case actionTypes.DELETE_EDIT_BUYOUT_SUCCESS: return deleteEditBuyOutSuccess(state, action);
        case actionTypes.CURRENT_USER_HAS_BUYOUT: return currentUserHasBuyOut(state, action);
        case actionTypes.CURRENT_USER_DOES_NOT_HAVE_BUYOUT: return currentUserDoesNotHaveBuyOut(state, action);
        case actionTypes.SET_CURRENT_EDIT_BUYOUT: return setCurrentEditBuyOut(state, action);
        case actionTypes.CLEAR_EDIT_BUYOUT: return clearEditBuyOut(state, action);
        default: return state;
    }
};

export default reducer;