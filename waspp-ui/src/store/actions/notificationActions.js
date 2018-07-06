import * as actionTypes from './actionTypes';

export const addNotification = (strong, text) => {
    return {
        type: actionTypes.ADD_NOTIFICATION,
        strong: strong,
        text: text
    }
}

export const removeNotification = () => {
    return {
        type: actionTypes.REMOVE_NOTIFICATION,
    }
}

export const removeAllNotifications = (id) => {
    return {
        type: actionTypes.REMOVE_ALL_NOTIFICATIONS
    }
}

/*arr.splice(-1,1)*/