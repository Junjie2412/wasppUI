import React, {Component} from 'react';
import bootstrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './Help.css';

class Help extends Component {
    
    

    render() {
        return (
            <div>
                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    Help
                </h1>

                <button class={classes.collapsible}>Open Collapsible</button>
                <div class={classes.content}>
                    <p>Lorem ipsum...</p>
                </div>

                
                {/* <div id="accordionExample" className={bootstrapClasses.accordian}>
                    <div className={bootstrapClasses.card}>
                        <div id="headingOne" className={bootstrapClasses['card-header']}>
                            <h5 className={bootstrapClasses['mb-0']}>
                                <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" 
                                className={[bootstrapClasses.btn, bootstrapClasses['btn-link']].join(' ')}>
                                I AM A QUESTION
                                </button>
                            </h5>
                        </div>
                    </div>
                    <div id="collapseOne" className={[bootstrapClasses.collapse, bootstrapClasses.show].join(' ')} aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className={bootstrapClasses['class-body']}>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                        </div>
                    </div>
                </div> */}
            </div>
        );
    };
}

export default Help;