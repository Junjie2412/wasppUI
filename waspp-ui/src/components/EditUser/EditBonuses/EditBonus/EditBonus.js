import React from 'react';
import bootStrapClasses from '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const editBonus = (props) => {

    let content = null;

    switch (props.version) {
        case 'version 1':
            content = (
                <div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Open Amount</label>
                        <div>
                        <input type='text' className={bootStrapClasses['form-control']} />
                        </div>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Weeks Left</label>
                        <div>
                        <input type='text' className={bootStrapClasses['form-control']} />
                        </div>
                    </div>
                </div>
            );
            break;
        case 'version 2':
            content = (
                <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                    <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>End Date</label>
                    <div>
                    <input type='text' className={bootStrapClasses['form-control']} />
                    </div>
                </div>
            );
            break;
        default:
            content = null;
            break;
    }

        return (
            <div>
                <form >
                    <h1 style={{textAlign: 'center'}}>{props.title}</h1>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>{props.editState}</label>
                        <div>
                        <input type='text' className={bootStrapClasses['form-control']} />
                        </div>
                    </div>
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Start Date</label>
                        <div>
                        <input type='text' className={bootStrapClasses['form-control']} />
                        </div>
                    </div>
                    {content}
                    <div className={[bootStrapClasses['form-group'], bootStrapClasses.row].join(' ')}>
                        <label className={[bootStrapClasses['col-sm-4'], bootStrapClasses['col-form-label']].join(' ')}>Comments</label>
                        <div>
                        <input type='text' className={bootStrapClasses['form-control']} />
                        </div>
                    </div>
                </form>
                <div className={bootStrapClasses['col-sm-12']}>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-success'], bootStrapClasses['col-sm-2']].join(' ')}>Save</button>
                    <button onClick={props.close} 
                    className={[bootStrapClasses.btn, bootStrapClasses['btn-warning'],bootStrapClasses['col-sm-2']].join(' ')} 
                    style={{margin: '4px', backgroundColor: '#FF9900'}}>Cancel</button>
                    <button className={[bootStrapClasses.btn, bootStrapClasses['btn-danger'], bootStrapClasses['col-sm-2']].join(' ')}>Delete</button>
                </div>
            </div>
        );

}

export default editBonus;