import * as actionTypes from './actionTypes';

export const editGroupName = groupName => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_GROUP_NAME,
        groupName: groupName
    }
}

export const editCommissionModel = commissionModel => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_COMMISSION_MODEL,
        commissionModel: commissionModel
    }
}

export const editFloor = floor => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_FLOOR,
        floor: floor
    }
}

export const editSeasonalFloor = seasonalFloor => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_SEASONAL_FLOOR,
        seasonalFloor: seasonalFloor
    }
}

export const editGuaranteePercentage = guaranteePercentage => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_GUARANTEE_PERCENTAGE,
        guaranteePercentage: guaranteePercentage
    }
}


export const editBonusModels = bonusModels => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_BONUS_MODELS,
        bonusModels: bonusModels
    }
}

export const editOrgLevel = orgLevel => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_ORG_LEVEL,
        orgLevel: orgLevel
    }
}

export const editLocation = location => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_LOCATION,
        location: location
    }
}

export const editEmail = email => {
    return{
        type: actionTypes.EDIT_OPCODEFAULT_EMAIL,
        email: email
    }
}