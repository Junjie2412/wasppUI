import React, {Component} from 'react';
import Payroll from '../../components/PayrollProcessing/Payrolls';
import bsClasses from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import classes from './PayrollProcessing.css';

class PayrollProcessing extends Component {
      state={
        showTable:"none"
      };

      showTable(){
        if(this.state.showTable==="none"){
          this.setState({showTable:"block"})
        }else{
          this.setState({showTable:"none"})
        }
      }
      render() {


        return (
                <div  className={bsClasses["container-fluid"]}>
                  <div className={bsClasses.row}>
                    <div className={bsClasses['col-md-12']}>
                      <h1 style={{textAlign: 'center', marginTop: '20px'}}>
                          Payroll Processing
                      </h1>
                    </div>
                  </div>

                  <br/>
                  <div className={bsClasses.row}>
                    <div className={bsClasses['col-md-6']}>
                      <div className={bsClasses['btn-group']}>
                          <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')} onClick={this.showTable.bind(this)}>
                              Process Payroll
                          </button>
                          <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')}>
                              Proof Payroll
                          </button>
                          <button className={[bsClasses['btn'], classes.ButtonGroup].join(' ')}>
                              Send CASI Data
                          </button>
                      </div>
                    </div>
                  </div>
                  <div className={bsClasses.row} style={{display:this.state.showTable}}>
                    <div className={bsClasses['col-md-12']}>
                      <br/>
                      <Payroll />
                    </div>
                  </div>
              </div>
          );
    };
}

export default PayrollProcessing;
