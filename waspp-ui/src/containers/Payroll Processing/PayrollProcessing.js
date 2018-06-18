import React, {Component} from 'react';
import Payroll from '../../components/PayrollProcessing/Payrolls';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './PayrollProcessing.css';
class PayrollProcessing extends Component {
      state={
        showTable:"none"
      }

      showTable(){
        if(this.state.showTable==="none"){
          this.setState({showTable:"block"})
        }else{
          this.setState({showTable:"none"})
        }
      }
      render() {


        return (
            <div>

                <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                    Payroll Processing
                </h1>
                <br/>
                <div className={bsClasses.row}>
                    <div className={[bsClasses['col-md-4'], classes.BtnGroup].join(' ')}>
                        <button className={[bsClasses["btn"], bsClasses["btn-lg"], classes.Button].join(' ')} onClick={this.showTable.bind(this)}> Process Payroll </button>
                    </div>
                    <div className={[bsClasses['col-md-4'], classes.BtnGroup].join(' ')}>
                        <button className={[bsClasses["btn"], bsClasses["btn-lg"], classes.Button].join(' ')}> Proof Payroll </button>
                    </div>
                    <div className={[bsClasses['col-md-4'], classes.BtnGroup].join(' ')}>
                        <button className={[bsClasses["btn"], bsClasses["btn-lg"], classes.Button].join(' ')}> Send CASI data </button>
                    </div>
                </div>
                <div className={bsClasses["container-fluid"]} style={{display:this.state.showTable}}>
                  <br/>
                  <Payroll />
                </div>

            </div>
          );
    };
}

export default PayrollProcessing;
