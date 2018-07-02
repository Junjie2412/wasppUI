import * as actionTypes from './actionTypes';
import * as links from '../../shared/Links';
import axios from 'axios';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch the list of monthly bonus proofs
export const fetchMonthlyBonusProofs = () =>{
    console.log('HIT');
    return dispatch => {
        axios.get(links.MONTHLY_BONUS_PAYROLLS + '.json')
        .then(response => {
            const responseData = [];
            for(let mbProof in response.data){
                responseData.push({
                    ...response.data[mbProof],
                    id: mbProof
                })
            }
            console.log(responseData);
            dispatch(fetchMonthlyBonusProofsSuccess(responseData))
        });
    }
};

export const fetchMonthlyBonusProofsSuccess = (mbProofList) =>{
    console.log(mbProofList);
    return {
        type: actionTypes.FETCH_MONTHLY_BONUS_PROOFS_SUCCESS,
        data: mbProofList
    };
};