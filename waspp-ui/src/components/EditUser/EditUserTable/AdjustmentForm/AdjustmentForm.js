import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DateInput from '../../../UI/DateInput/DateInput';

const adjustmentForm = () =>{
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
                    <label className={[bootStrapClasses['col-sm-3'], bootStrapClasses['col-form-label']].join(' ')}>Start Date</label>
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
            </form>
        </div>
    );
};

export default adjustmentForm;