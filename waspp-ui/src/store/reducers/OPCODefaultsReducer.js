import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";
import { currentUserDoesNotHaveFloor } from '../actions';
// import { selectOPCO } from '../actions';

const initialState = {
    opcodeNumbers: [],
    opcoInformation: [],
    currentOPCODefault: {
        OPCONumber: 'OPCONumber',
        Location: 'Location',
        Email: 'Email',
        GroupName: 'GroupName',
        Floor: 'Floor',
        SeasonalFloor: 'SeasonalFloor',
        CommissionModels: 'CommissionModels',
        GuaranteePercentage: 0,
        BonusModels: 'BonusModels',
        MAServe: '1 TERR',
        OrgLevel: 'OrgLevel',
        BonusLevel: 'BonusLevel',
        ColumnAxis: 'ColumnAxis',
        BonusField: 'BonusField',
        AccountTypes: 'AccountTypes',
        DefaultFlights2: 'DefaultFlights2',
        GuaranteeBonus: false,
        Low: false,
        Medium: false,
        High: false,
        DefaultFlights:{
            FlightA: false,
            FlightB: false,
            FlightC: false,
            FlightD: false,
            FlightE: false
        },
        TRS: false,
        TRP: false,
        LLC: false,
        CMU: false,
        OTH: false
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

const toggleGuaranteeBonus = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {GuaranteeBonus: action.guaranteeBonus})});
}

const toggleLow = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {Low: action.Low, Medium: false, High: false})});
}

const toggleMedium = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {Low: false, Medium: action.medium, High: false})});
}

const toggleHigh = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {Low: false, Medium: false, High: action.high})});
}

const toggleFlightA = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {DefaultFlights: updateObject(state.currentOPCODefault.DefaultFlights, {FlightA: action.flightA, FlightB: false, FlightC: false, FlightD: false, FlightE: false})})});
}

const toggleFlightB = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {DefaultFlights: updateObject(state.currentOPCODefault.DefaultFlights, {FlightA: false, FlightB: action.flightB, FlightC: false, FlightD: false, FlightE: false})})});
}

const toggleFlightC = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {DefaultFlights: updateObject(state.currentOPCODefault.DefaultFlights, {FlightA: false, FlightB: false, FlightC: action.flightC, FlightD: false, FlightE: false})})});
}

const toggleFlightD = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {DefaultFlights: updateObject(state.currentOPCODefault.DefaultFlights, {FlightA: false, FlightB: false, FlightC: false, FlightD: action.flightD, FlightE: false})})});
}

const toggleFlightE = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {DefaultFlights: updateObject(state.currentOPCODefault.DefaultFlights, {FlightA: false, FlightB: false, FlightC: false, FlightD: false, FlightE: action.flightE})})});
}

const toggleTRS = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {TRS: action.trs})});
}

const toggleTRP = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {TRP: action.trp})});
}

const toggleLLC = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {LLC: action.llc})});
}

const toggleCMU = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {CMU: action.cmu})});
}

const toggleOTH = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {OTH: action.oth})});
}

const selectMAServe = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {MAServe: action.maServe})});
}

const selectBonusField = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {BonusField: action.bonusField})});
}


const selectColumnAxis = (state, action) => {
    return updateObject(state, {currentOPCODefault: updateObject(state.currentOPCODefault, {ColumnAxis: action.columnAxis})});
}

const selectOPCO = (state, action) => {
    return updateObject(state, {currentOPCODefault: action.opcoInfo});
}

const fetchOPCODefaultsSuccess =(state, action) => {
    return updateObject( state, {
        opcodeNumbers: action.opcoNumbers,
        opcoInformation: action.opcoData
    })
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
        case actionTypes.TOGGLE_OPCODEFAULT_GUARANTEE_BONUS: return toggleGuaranteeBonus(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_LOW: return toggleLow(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_MEDIUM: return toggleMedium(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_HIGH: return toggleHigh(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_A: return toggleFlightA(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_B: return toggleFlightB(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_C: return toggleFlightC(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_D: return toggleFlightD(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_FLIGHT_E: return toggleFlightE(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_TRS: return toggleTRS(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_TRP: return toggleTRP(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_LLC: return toggleLLC(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_CMU: return toggleCMU(state, action);
        case actionTypes.TOGGLE_OPCODEFAULT_OTH: return toggleOTH(state, action);
        case actionTypes.SELECT_MA_SERVE: return selectMAServe(state, action);
        case actionTypes.SELECT_BONUS_FIELDS: return selectBonusField(state, action);
        case actionTypes.SELECT_COLUMN_AXIS: return selectColumnAxis(state, action);
        case actionTypes.SELECT_OPCO: return selectOPCO(state, action);
        case actionTypes.FETCH_OPCODEFAULTS_SUCCESS: return fetchOPCODefaultsSuccess(state, action);
        default: return state;
    }
}

export default reducer;