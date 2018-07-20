import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
  code: "Type the code"
}

const unlockCASI = (state, action) => {

    return updateObject(state, {code: action.code})
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UNLOCK_CASI: return unlockCASI(state, action);
        default: return state;
    }
};

export default reducer;
