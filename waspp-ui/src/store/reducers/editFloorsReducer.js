import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    editFloors: [],
    currentEditFloor: {
        id: '',
        amount: '',
        startDate: null,
        endDate: null,
        comment: ''
    },
    currentUserHasFloor: false,
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

const editFloorsStart = (state, action ) => {
    return updateObject(state, { loading: true })
};

const editFloorsSuccess = (state, action) => {
    const newFloor = updateObject(action.data, {id: action.id});
    return updateObject(state, {loading: false, editFloors: state.editFloors.concat(newFloor)});
};

const fetchEditFloorsStart = (state, action) => {
    return updateObject( state, { loading: true} )
};

const fetchEditFloorsSuccess = (state, action) => {
    return updateObject( state, {
        editFloors: action.floorsData,
        loading: false
    })
};

const deleteEditFloorsStart = (state, action) => {
    return updateObject( state, {
        loading: true
    })
};

const deleteEditFloorsSuccess = (state, action) => {
    return updateObject(state, {
        loading: false
    })
};

const currentUserHasFloor = (state, action) => {
    return updateObject(state, {
        currentUserHasFloor: true
    })
};

const currentUserDoesNotHaveFloor = (state, action) => {
    return updateObject(state, {
        currentUserHasFloor: false
    })
};

const setCurrentEditFloor = (state, action) => {
    return updateObject(state, {
        currentEditFloor: action.data
    })
};

const clearEditFloor = (state, action) => {
    return updateObject(state, {
        currentEditFloor: {
            id: '',
            amount: '',
            startDate: null,
            endDate: null,
            comment: ''
        }
    })
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.EDIT_FLOOR_AMOUNT: return editFloorAmount(state, action);
        case actionTypes.EDIT_FLOOR_START_DATE: return editFloorStartDate(state, action);
        case actionTypes.EDIT_FLOOR_END_DATE: return editFloorEndDate(state, action);
        case actionTypes.EDIT_FLOOR_COMMENT: return editFloorComment(state, action);
        case actionTypes.EDIT_FLOORS_START:return editFloorsStart(state, action);
        case actionTypes.EDIT_FLOORS_SUCCESS: return editFloorsSuccess(state, action);
        case actionTypes.FETCH_EDIT_FLOORS_START: return fetchEditFloorsStart(state, action);
        case actionTypes.FETCH_EDIT_FLOORS_SUCCESS: return fetchEditFloorsSuccess(state, action);
        case actionTypes.DELETE_EDIT_FLOOR_START: return deleteEditFloorsStart(state, action);
        case actionTypes.DELETE_ADJUSTMENT_SUCCESS: return deleteEditFloorsSuccess(state, action);
        case actionTypes.CURRENT_USER_HAS_FLOOR: return currentUserHasFloor(state, action);
        case actionTypes.CURRENT_USER_DOES_NOT_HAVE_FLOOR: return currentUserDoesNotHaveFloor(state, action);
        case actionTypes.SET_CURRENT_EDIT_FLOOR: return setCurrentEditFloor(state, action);
        case actionTypes.CLEAR_EDIT_FLOOR: return clearEditFloor(state, action);
        default: return state;
    }
};

export default reducer;