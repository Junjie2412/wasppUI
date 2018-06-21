import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    notifications: []
}

const addNotification = (state, action) => {
    return updateObject(state, {notifications: state.notifications.concat({
        strong: action.strong,
        text: action.text
    })})
}

const removeNotification = (state, action) => {
    return updateObject(state, {notifications: state.notifications.slice(0,state.notifications.length-1)});
}

const removeAllNotifications = (state, action) => {
    return updateObject(state, {notifications: []});
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_NOTIFICATION: return addNotification(state, action);
        case actionTypes.REMOVE_NOTIFICATION: return removeNotification(state, action);
        case actionTypes.REMOVE_ALL_NOTIFICATIONS: return removeAllNotifications(state, action);
        default: return state;
    }
}

export default reducer;