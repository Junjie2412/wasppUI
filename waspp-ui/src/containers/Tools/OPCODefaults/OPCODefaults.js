import React from 'react';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './OPCODefaults.css';

const opocDefaults = () =>{
    return(
        <div className={[bootStrapClasses.card, classes.cardAlign].join(' ')} style={{overflow: 'auto', height: '500px', width: '97%'}}>
            <div className={bootStrapClasses['card-body']}>
                <form className={bootStrapClasses['container-fluid']} style={{fontSize: '18px'}}>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>OPCO #</label>
                        <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                        <input type = 'text' className={[bootStrapClasses['offset-sm-1'], bootStrapClasses['col-sm-6'],bootStrapClasses['form-control']].join(' ')}/>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Group Name</label>
                        <input type='text' className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                        <input type = 'text' className={[bootStrapClasses['offset-sm-1'], bootStrapClasses['col-sm-6'],bootStrapClasses['form-control']].join(' ')}/>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Commission Models</label>
                        <input type='text' className={[bootStrapClasses['col-sm-9'], bootStrapClasses['form-control']].join(' ')} />
                    </div>
                    {/* <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Click Down option</label>
                        <div className={[bootStrapClasses['col-sm-2'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>$4.00 a week click</label>
                        </div>
                        <div className={[bootStrapClasses['offset-sm-1'], bootStrapClasses['col-sm-2'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>PercentGroup(100,75,50,25)</label>
                        </div>
                    </div> */}
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Floor</label>
                        <input type='text' className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                        <label className={[bootStrapClasses['col-sm-1'], bootStrapClasses['col-form-label']].join(' ')}>Org Level</label>
                        <input type = 'text' className={[bootStrapClasses['col-sm-6'], bootStrapClasses['form-control']].join(' ')}/>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <div className={[bootStrapClasses['offset-sm-2'], bootStrapClasses['col-sm-2']].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Guarantee Bonus</label>
                        </div>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Guarantee Percentage</label>
                        <input type='text' className={[bootStrapClasses['col-sm-5'], bootStrapClasses['form-control']].join(' ')} />
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Models</label>
                        <input type='text' className={[bootStrapClasses['col-sm-9'], bootStrapClasses['form-control']].join(' ')} />
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>MA serve</label>
                        <select className={[bootStrapClasses['col-sm-2'], bootStrapClasses['form-control']].join(' ')} />
                        <label className={[bootStrapClasses['col-sm-1'], bootStrapClasses['col-form-label']].join(' ')}>Org level</label>
                        <input type = 'text' className={[bootStrapClasses['col-sm-6'], bootStrapClasses['form-control']].join(' ')}/>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Bonus Level</label>
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
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-2'], bootStrapClasses['col-form-label']].join(' ')}>Default Flights</label>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight A</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight B</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight C</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight D</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
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
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight E</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight E</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight E</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight E</label>
                        </div>
                        <div className={[bootStrapClasses['col-sm-1'], classes.alignRadio].join(' ')}>
                            <input type='radio' className={bootStrapClasses['form-check-input']} />
                            <label className={bootStrapClasses['form-check-label']}>Flight E</label>
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
                            <label className={bootStrapClasses['form-check-label']}>Meidum</label>
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
};

export default opocDefaults;