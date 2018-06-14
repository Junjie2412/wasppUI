import React from 'react';
import classes from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import css from './OPCODefaults.css';

const opocDefaults = () =>{
    return(
        <div>
            <form className={classes['container-fluid']} style={{fontSize: '18px'}}>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>OPCO #</label>
                    <select className={[classes['col-sm-2'], classes['form-control']].join(' ')} />
                    <input type = 'text' className={[classes['offset-sm-1'], classes['col-sm-6'],classes['form-control']].join(' ')}/>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>Group Name</label>
                    <input type='text' className={[classes['col-sm-2'], classes['form-control']].join(' ')} />
                    <input type = 'text' className={[classes['offset-sm-1'], classes['col-sm-6'],classes['form-control']].join(' ')}/>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>Commission Models</label>
                    <input type='text' className={[classes['col-sm-9'], classes['form-control']].join(' ')} />
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>Click Down option</label>
                    <div className={[classes['col-sm-2'], css.alignRadio].join(' ')}>
                        <input type='radio' className={classes['form-check-input']} />
                        <label className={classes['form-check-label']}>$4.00 a week click</label>
                    </div>
                    <div className={[classes['offset-sm-1'], classes['col-sm-2'], css.alignRadio].join(' ')}>
                        <input type='radio' className={classes['form-check-input']} />
                        <label className={classes['form-check-label']}>PercentGroup(100,75,50,25)</label>
                    </div>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>Floor</label>
                    <input type='text' className={[classes['col-sm-2'], classes['form-control']].join(' ')} />
                    <label className={[classes['col-sm-1'], classes['col-form-label']].join(' ')}>Org Level</label>
                    <input type = 'text' className={[classes['col-sm-6'], classes['form-control']].join(' ')}/>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <div className={[classes['offset-sm-2'], classes['col-sm-2']].join(' ')}>
                        <input type='radio' className={classes['form-check-input']} />
                        <label className={classes['form-check-label']}>Guarantee Bonus</label>
                    </div>
                    <label className={[classes['col-sm-1'], classes['col-form-label']].join(' ')}>Guarantee Percentage</label>
                    <input type='text' className={[classes['col-sm-6'], classes['form-control']].join(' ')} />
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>Bonus Models</label>
                    <input type='text' className={[classes['col-sm-9'], classes['form-control']].join(' ')} />
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>MA serve</label>
                    <select className={[classes['col-sm-2'], classes['form-control']].join(' ')} />
                    <label className={[classes['col-sm-1'], classes['col-form-label']].join(' ')}>Org level</label>
                    <input type = 'text' className={[classes['col-sm-6'], classes['form-control']].join(' ')}/>
                </div>
                <div className={[classes['form-group'], classes.row].join(' ')}>
                    <label className={[classes['col-sm-2'], classes['col-form-label']].join(' ')}>Click Down option</label>
                    <div className={[classes['col-sm-2'], css.alignRadio].join(' ')}>
                        <input type='radio' className={classes['form-check-input']} />
                        <label className={classes['form-check-label']}>Low</label>
                    </div>
                    <div className={[classes['offset-sm-1'], classes['col-sm-2'], css.alignRadio].join(' ')}>
                        <input type='radio' className={classes['form-check-input']} />
                        <label className={classes['form-check-label']}>Medium</label>
                    </div>
                    <div className={[classes['offset-sm-1'], classes['col-sm-2'], css.alignRadio].join(' ')}>
                        <input type='radio' className={classes['form-check-input']} />
                        <label className={classes['form-check-label']}>High</label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default opocDefaults;