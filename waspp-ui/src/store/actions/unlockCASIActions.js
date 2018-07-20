import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/Links';

export const unlockCASI = code => {
    return{
        type: actionTypes.UNLOCK_CASI,
        code: code
    }
}
