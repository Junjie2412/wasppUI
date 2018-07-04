import * as actionTypes from './actionTypes';
import * as links from '../../shared/Links';
import axios from 'axios';

// ************************************************************************//
// ************************************************************************//
// The below are functions that will fetch the list of compensation recap reports
export const fetchCompensationRecapReports = () =>{
    return dispatch => {
        axios.get(links.COMPENSATION_RECAP_REPORTS + '.json')
        .then(response => {
            const responseData = [];
            for(let crReports in response.data){
                responseData.push({
                    ...response.data[crReports],
                    id: crReports
                })
            }
            dispatch(fetchCompensationRecapReportsSuccessful(responseData));
        });
    }
};

export const fetchCompensationRecapReportsSuccessful = (crReportsList) =>{
    return {
        type: actionTypes.FETCH_COMPENSATION_RECAP_REPORTS_SUCCESS,
        data: crReportsList
    };
};