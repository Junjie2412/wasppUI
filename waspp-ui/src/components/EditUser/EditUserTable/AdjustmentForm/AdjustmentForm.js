import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DateInput from '../../../UI/DateInput/DateInput';

const adjustmentForm = (props) =>{
    return(
        <div>
            <form>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>HR Employee ID</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-7'], bootStrapClasses['col-form-label']].join(' ')}>Active Directory Name Description</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control-plaintext']} readOnly />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Adjustment Amount</label>
                    <div>
                        <input type='text' className={bootStrapClasses['form-control']} />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-5'], bootStrapClasses['col-form-label']].join(' ')}>Adjustment Week End</label>
                    <div>
                        <DateInput />
                    </div>
                </div>
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-3'], bootStrapClasses['col-form-label']].join(' ')}>Comment</label>
                    <div>
                        <textarea className={[bootStrapClasses['form-control']]} style={{width: '300px', height: '200px'}}/>
                    </div>
                </div>
                <div className={bootStrapClasses['col-sm-12']}>
                    <button onClick={props.submit} className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                    <button onClick={props.close} className={[bootStrapClasses.btn, bootStrapClasses['btn-primary'], bootStrapClasses['col-sm-2']].join(' ')} style={{margin: '4px'}}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default adjustmentForm;