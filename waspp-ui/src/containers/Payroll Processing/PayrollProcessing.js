import React, {Component} from 'react';
import Payroll from '../../components/PayrollProcessing/Payrolls';

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

                <div className="row">
                    <div className="col-md-4">
                        <button onClick={this.showTable.bind(this)}> Process Payroll </button>
                    </div>
                    <div className="col-md-4">
                        <button> Proof Payroll </button>
                    </div>
                    <div className="col-md-4">
                        <button> Send CASI data </button>
                    </div>
                </div>
                {/* <div className="row" style={{display:this.state.showTable}}>
                  <Payroll title={'Compensation Recap Report'}/>
                </div> */}

            </div>
          );
    };
}

export default PayrollProcessing;