import * as actionTypes from '../actions/actionTypes';
import { updateObject} from "../../shared/utility";

const initialState = {
    opcodeNumbers: [],
    currentOPCODefault: {
        OPCONumber: 'OPCONumber',
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

const updateCurrentOPCD = (state, action) =>{
    // return updateObject(state, action.);
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        default: return state;
    }
}

export default reducer;