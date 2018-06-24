import React, {Component} from 'react';
import classes from './FrequentIssues.css';

class FrequentIssues extends Component{

    toggleDisplay = (event) =>{
        let element = event.target.nextElementSibling;
        if(element.classList.contains(classes.contentHidden)){
            element.classList.remove(classes.contentHidden);
            element.classList.add(classes.contentDisplayed);
        }
        else{
            element.classList.remove(classes.contentDisplayed);
            element.classList.add(classes.contentHidden);
        }
    }

    render(){
        const populateFAQ = this.props.issues.map(data => (
            <div key={data.Issue}>
                <button class={classes.collapsible} onClick={this.toggleDisplay}>{data.Issue}</button>
                <div class={classes.contentHidden}>
                    <p>{data.Solution}}</p>
                </div>
            </div> 
        ));

        return(
            <div>
                {populateFAQ}
            </div> 
        )
    }
}

export default FrequentIssues;