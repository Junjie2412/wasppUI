import {updateObject} from "../../shared/utility";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    rows:[{
        DSM: '000',
        MaName: '000',
        Sales: '000',
        SalesGrowth: '000',
        GPTaxDollars: '000',
        GPTaxGrowth: '000',
        Pieces: '000',
        PieceGrowth: '000',
        Base: '000',
        Commission: '000',
        Subsidy: '000',
        Floor: '000',
        Buyout: '000',
        TotalWeeklyCompensation: '000',
        Weeks: '000',
        Pieces2: '000',
        WithoutBonus: '000',
        Bonus: '000',
        TotalCompPerPiece: '000'
    }]
};

const fetchCompensationRecapReportSuccess = (state, action) =>{
    return updateObject(state, {
        rows: action.data
    });
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case actionTypes.FETCH_COMPENSATION_RECAP_REPORTS_SUCCESS: return fetchCompensationRecapReportSuccess(state, action);
        default: return state;
    }
};

export default reducer;