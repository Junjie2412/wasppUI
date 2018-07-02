import * as actionTypes from './actionTypes';
import * as links from '../../shared/Links';
import axios from 'axios';

    // ************************************************************************//
    // ************************************************************************//
    // The below are functions that will fetch the list of weekly bonus proofs
    export const fetchWeeklyBonusProofs = () =>{
        return dispatch =>{
            axios.get(links.WEEKLY_BONUS_PAYROLLS + '.json')
            .then(response =>{
                const responseData = [];
                for(let wbPayrolls in response.data){
                    responseData.push({
                        ...response.data[wbPayrolls],
                    })
                };
                dispatch(fetchWeeklyBonusProofsSuccess(responseData));
            });
        }
    }; 

    const fetchWeeklyBonusProofsSuccess = (wbPayrolls) =>{
        return{
            type: actionTypes.FETCH_WEEKLY_BONUS_PROOFS_SUCCESS,
            data: wbPayrolls
        }
    };