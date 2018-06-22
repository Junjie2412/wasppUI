import React, {Component} from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './OPCODefaults.css';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index';

class OPCODefaults extends Component{
    render(){
        return(
            <div className={[bootStrapClasses.card, classes.cardAlign].join(' ')} style={{overflow: 'auto', height: '500px', width: '97%'}}>
                <div className={bootStrapClasses['card-body']}>
                    <form className={bootStrapClasses['container-fluid']} style={{fontSize: '18px'}}>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>OPCO #</label>
                            <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                            <input type = 'text' value={this.props.opcDefault.Location}
                            onChange={((event) => this.props.onEditLocation(event.target.value))} 
                            className={[bootStrapClasses['offset-sm-2'], bootStrapClasses['col-sm-6'],bootStrapClasses['form-control']].join(' ')}/>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Group Name</label>
                            <input type='text' value={this.props.opcDefault.GroupName}
                            onChange={((event) => this.props.onEditGroupName(event.target.value))} 
                            className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                            <input type = 'text' value={this.props.opcDefault.Email}
                            onChange={((event) => this.props.onEditEmail(event.target.value))}
                            className={[bootStrapClasses['offset-sm-2'], bootStrapClasses['col-sm-6'],bootStrapClasses['form-control']].join(' ')}/>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Commission Models</label>
                            <input type='text' value={this.props.opcDefault.CommissionModels}
                            onChange={((event) => this.props.onEditCommissionModel(event.target.value))}
                            className={[bootStrapClasses['col-sm-9'], bootStrapClasses['form-control']].join(' ')} />
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Floor</label>
                            <input type='text' value={this.props.opcDefault.Floor}
                            onChange={(event) => this.props.onEditFloor(event.target.value)}
                            className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                            <label className={[ bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Seasonal Floor</label>
                            <input type = 'text' value={this.props.opcDefault.SeasonalFloor}
                            onChange={((event) => this.props.onEditSeasonalFloor(event.target.value))} 
                            className={[bootStrapClasses['col-sm-5'], bootStrapClasses['form-control']].join(' ')}/>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <div className={[bootStrapClasses['offset-sm-2'], bootStrapClasses['col-sm-2']].join(' ')}>
                                <input type='radio' checked={this.props.opcDefault.GuaranteeBonus}
                                onClick={(event) => this.props.onToggleGuaranteeBonus(!this.props.opcDefault.GuaranteeBonus)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Guarantee Bonus</label>
                            </div>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Guarantee Percentage</label>
                            <input type='text' value={this.props.opcDefault.GuaranteePercentage}
                            onChange={((event) => this.props.onEditGuaranteePercentage(event.target.value))} 
                            className={[bootStrapClasses['col-sm-5'], bootStrapClasses['form-control']].join(' ')} />
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Models</label>
                            <input type='text' value={this.props.opcDefault.BonusModels}
                            onChange={((event) => this.props.onEditBonusModels(event.target.value))} 
                            className={[bootStrapClasses['col-sm-9'], bootStrapClasses['form-control']].join(' ')} />
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>MA serve</label>
                            <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                            <label className={[bootStrapClasses['offset-sm-1'], bootStrapClasses['col-sm-1'], bootStrapClasses['col-form-label']].join(' ')}>Org level</label>
                            <input type = 'text' value={this.props.opcDefault.OrgLevel}
                            onChange={(event) => this.props.onEditOrgLevel(event.target.value)}
                            className={[bootStrapClasses['col-sm-5'], bootStrapClasses['form-control']].join(' ')}/>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Level</label>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' name='BonusLevel' checked={this.props.opcDefault.Low}
                                onClick={(event) => this.props.onToggleLow(!this.props.opcDefault.Low)} 
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Low</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' name='BonusLevel' checked={this.props.opcDefault.Medium}
                                onClick={(event) => this.props.onToggleMedium(!this.props.opcDefault.Medium)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Medium</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' name='BonusLevel' checked={this.props.opcDefault.High}
                                onClick={(event) => this.props.onToggleHigh(!this.props.opcDefault.High)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>High</label>
                            </div>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Default Flights</label>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' checked={this.props.opcDefault.DefaultFlights.A} name="DefaultFlights"
                                onClick={(event) => this.props.onToggleDefaultFlights(!this.props.opcDefault.DefaultFlights.A, 'A')}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Flight A</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' checked={this.props.opcDefault.DefaultFlights.B} name="DefaultFlights"
                                onClick={(event) => this.props.onToggleDefaultFlights(!this.props.opcDefault.DefaultFlights.B, 'B')}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Flight B</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' checked={this.props.opcDefault.DefaultFlights.C} name="DefaultFlights"
                                onClick={(event) => this.props.onToggleDefaultFlights(!this.props.opcDefault.DefaultFlights.C, 'C')}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Flight C</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' checked={this.props.opcDefault.DefaultFlights.D} name="DefaultFlights"
                                onClick={(event) => this.props.onToggleDefaultFlights(!this.props.opcDefault.DefaultFlights.D, 'D')}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Flight D</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' checked={this.props.opcDefault.DefaultFlights.E} name="DefaultFlights"
                                onClick={(event) => this.props.onToggleDefaultFlights(!this.props.opcDefault.DefaultFlights.E, 'E')}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Flight E</label>
                            </div>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Row Axis</label>
                            <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Column Axis</label>
                            <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Field</label>
                            <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Account Types</label>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='checkbox' checked={this.props.opcDefault.TRS}
                                onClick={(event) => this.props.onToggleTRS(!this.props.opcDefault.TRS)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>TRS</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='checkbox' checked={this.props.opcDefault.TRP}
                                onClick={(event) => this.props.onToggleTRP(!this.props.opcDefault.TRP)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>TRP</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='checkbox' checked={this.props.opcDefault.LLC}
                                onClick={(event) => this.props.onToggleDefaultLLC(!this.props.opcDefault.LLC)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>LLC</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='checkbox' checked={this.props.opcDefault.CMU}
                                onClick={(event) => this.props.onToggleDefaultCMU(!this.props.opcDefault.CMU)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>CMU</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='checkbox' checked={this.props.opcDefault.OTH}
                                onClick={(event) => this.props.onToggleOTH(!this.props.opcDefault.OTH)}
                                className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>OTH</label>
                            </div>
                        </div>
                        <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                            <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Default Flights</label>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Low</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>Medium</label>
                            </div>
                            <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                                <input type='radio' className={bootStrapClasses['form-check-input']} />
                                <label className={bootStrapClasses['form-check-label']}>High</label>
                            </div>
                        </div>
                        <button type="submit" className={[bootStrapClasses.btn, bootStrapClasses['btn-primary']].join(' ')}
                        style={{backgroundColor: '#006699'}}>Submit</button>
                    </form>
                </div>
            </div>
            
        );
    }
};

const mapStateToProps = state => {
    return{
        opcDefault: state.opcoDefaults.currentOPCODefault
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onEditGroupName: (groupName) => dispatch(actions.editGroupName(groupName)),
        onEditCommissionModel: (commissionModel) => dispatch(actions.editCommissionModel(commissionModel)),
        onEditFloor: (floor) => dispatch(actions.editFloor(floor)),
        onEditSeasonalFloor: (seasonalFloor) => dispatch(actions.editSeasonalFloor(seasonalFloor)),
        onEditGuaranteePercentage: (guaranteePercentage) => dispatch(actions.editGuaranteePercentage(guaranteePercentage)),
        onEditBonusModels: (bonusModels) => dispatch(actions.editBonusModels(bonusModels)),
        onEditOrgLevel: (orgLevel) => dispatch(actions.editOrgLevel(orgLevel)),
        onEditLocation: (location) => dispatch(actions.editLocation(location)),
        onEditEmail: (email) => dispatch(actions.editEmail(email)),
        onToggleGuaranteeBonus: (guaranteeBonus) => dispatch(actions.toggleGuaranteeBonus(guaranteeBonus)),
        onToggleLow: (low) => dispatch(actions.toggleLow(low)),
        onToggleMedium: (medium) => dispatch(actions.toggleMedium(medium)),
        onToggleHigh: (high) => dispatch(actions.toggleHigh(high)),
        onToggleDefaultFlights: (flight, letter) => dispatch(actions.toggleDefaultFlights(flight, letter)),
        onToggleTRS: (trs) => dispatch(actions.toggleTRS(trs)),
        onToggleTRP: (trp) => dispatch(actions.toggleTRP(trp)),
        onToggleLLC: (llc) => dispatch(actions.toggleLLC(llc)),
        onToggleCMU: (cmu) => dispatch(actions.toggleCMU(cmu)),
        onToggleOTH: (oth) => dispatch(actions.toggleOTH(oth))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OPCODefaults);