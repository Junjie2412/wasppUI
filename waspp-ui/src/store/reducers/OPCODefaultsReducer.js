import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    opcodeNumbers: [],
    currentOPCODefault: {
        OPCONumber: 'OPCONumber',
        Location: 'Location',
        Email: 'Email',
        GroupName: 'GroupName',
        Floor: 'Floor',
        SeasonalFloor: 'SeasonalFloor',
        CommissionModels: 'CommissionModels',
        GuaranteeBonus: false,
        GuaranteePercentage: 0,
        BonusModels: 'BonusModels',
        MAServe: 'MAServe',
        OrgLevel: 'OrgLevel',
        BonusLevel: 'BonusLevel',
        DefaultFlights: 'DefaultFlights',
        ColumnAxis: 'ColumnAxis',
        BonusField: 'BonusField',
        AccountTypes: 'AccountTypes',
        DefaultFlights2: 'DefaultFlights2'
    }
}


const editOPCODefault = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {GroupName: action.groupName})});
}

const editCommissionModel = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {CommissionModels: action.commissionModel})});
}

const editFloor = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {Floor: action.floor})});
}

const editSeasonalFloor = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {SeasonalFloor: action.seasonalFloor})});
}

const editGuaranteePercentage = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {GuaranteePercentage: action.guaranteePercentage})});
}

const editBonusModels = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {BonusModels: action.bonusModels})});
}

const editOrgLevel = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {OrgLevel: action.orgLevel})});
}

const editLocation = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {Location: action.location})});
}

const editEmail = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {Email: action.email})});
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.EDIT_OPCODEFAULT_GROUP_NAME: return editOPCODefault(state, action);
        case actionTypes.EDIT_OPCODEFAULT_COMMISSION_MODEL: return editCommissionModel(state, action);
        case actionTypes.EDIT_OPCODEFAULT_FLOOR: return editFloor(state, action);
        case actionTypes.EDIT_OPCODEFAULT_SEASONAL_FLOOR: return editSeasonalFloor(state, action);
        case actionTypes.EDIT_OPCODEFAULT_GUARANTEE_PERCENTAGE: return editGuaranteePercentage(state, action);
        case actionTypes.EDIT_OPCODEFAULT_BONUS_MODELS: return editBonusModels(state, action);
        case actionTypes.EDIT_OPCODEFAULT_ORG_LEVEL: return editOrgLevel(state, action);
        case actionTypes.EDIT_OPCODEFAULT_LOCATION: return editLocation(state, action);
        case actionTypes.EDIT_OPCODEFAULT_EMAIL: return editEmail(state, action);
        default: return state;
    }
}

export default reducer;