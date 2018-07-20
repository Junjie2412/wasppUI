import React, {Component} from 'react';
import bootStrapClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class UnlockCASI extends Component{
  render(){

    return(
      <div className={bootStrapClasses["container-fluid"]}>
        <div className={bootStrapClasses.row}>
      <form className={[bootStrapClasses["form-inline"],bootStrapClasses["col-md-12"],bootStrapClasses["col-sm-offset-3"], bootStrapClasses["col-sm-8"]].join(' ')} style={{fontSize: '18px',textAlign:"left"}}>

          <div className={[bootStrapClasses['form-group']].join(' ')}>
              <label  className={[bootStrapClasses["col-md-4"],bootStrapClasses["col-sm-12"]].join(' ')}>Unlock Code </label>
              <input type = 'text' className={[bootStrapClasses['form-control'],bootStrapClasses["col-md-4"], bootStrapClasses["col-sm-offset-4"], bootStrapClasses["col-sm-12"]].join(' ')} onChange={(event) => this.props.onunlockCASI(event.target.value)} value={this.props.code}  required/>

              <button type='submit' style={{backgroundColor:"#376ec6"}} className={[bootStrapClasses.btn, bootStrapClasses["btn-primary"],bootStrapClasses["col-md-4"], bootStrapClasses["col-sm-offset-4"], bootStrapClasses["col-sm-12"]].join(' ')}>Unlock CASI</button>
          </div>
        </form>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return{
        code: state.unlockCASI.code
    };
}

const mapDispatchToProps = dispatch => {
  return{
    onunlockCASI: (code) => dispatch(actions.unlockCASI(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnlockCASI);
