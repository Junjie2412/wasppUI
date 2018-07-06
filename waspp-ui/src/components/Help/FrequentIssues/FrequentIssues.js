import React from 'react';
import classes from './FrequentIssues.css';
import bootStrapClasses from '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const  FrequentIssues = (props) =>{

    const toggleDisplay = (event) =>{
        let element = event.target.nextElementSibling;
        let arrow = element;
        let errorCaught = false;

        if(element.classList.contains('arrow')){
            element = element.parentNode.parentNode.nextElementSibling;
            arrow = arrow.previousSibling;
            errorCaught = true;
        }
        if(element.classList.contains('error')){
            element = element.parentNode.nextElementSibling;
            arrow = arrow.previousSibling.children[0];
            errorCaught = true;
        }

        if(element.classList.contains(classes.contentHidden)){
            element.classList.remove(classes.contentHidden);
            element.classList.add(classes.contentDisplayed);
            if(!errorCaught){
                arrow = arrow.previousSibling.children[0].children[0];
            }
        }
        else{
            element.classList.remove(classes.contentDisplayed);
            element.classList.add(classes.contentHidden);
            if(!errorCaught){
                arrow = arrow.previousSibling.children[0].children[0];
            }
        } 

        if(arrow.classList.contains('fa-chevron-circle-down')){
            arrow.classList.remove('fa-chevron-circle-down');
            arrow.classList.add('fa-chevron-circle-up');
        }
        else{
            arrow.classList.remove('fa-chevron-circle-up');
            arrow.classList.add('fa-chevron-circle-down');
        }
    };

        const populateFAQ = props.issues.map(data => (
            <div key={data.Issue} className={bootStrapClasses.container} >               
                <button class={classes.collapsible} onClick={toggleDisplay}>
                    {data.Issue}
                    <div className={[bootStrapClasses['offset-sm-11'], bootStrapClasses['col-sm-1']].join(' ')}>
                        <i className={"fas fa-chevron-circle-down"}/>
                        <i className={'arrow'}/>
                    </div>
                    <i className='error'/>
                </button>
                <div className={[classes.contentHidden, bootStrapClasses.card].join(' ')}>
                    <div className={bootStrapClasses['card-body']}>   
                        <p>{data.Solution}</p>
                    </div>
                </div>
            </div>));

        return(
            <div>
                {populateFAQ}
            </div> 
        );
    }


export default FrequentIssues;