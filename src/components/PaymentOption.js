import React, { Component } from 'react'
import {  withRouter} from "react-router-dom";
// import {connect} from 'react-redux';
// import{compose} from 'redux';
// import {paymentmode} from '../actions/index'

export class PaymentOption extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption:''
        }
    } 
    onValueChange=(event)=>{
if(event.target.checked && event.target.value==="credit card"){
    this.props.history.push("/creditcard");
}
if(event.target.checked && event.target.value==="debit card"){
    this.props.history.push("/debitcard");
}
if(event.target.checked && event.target.value==="netbanking"){
    this.props.history.push("/netbanking");
}
if(event.target.checked && event.target.value==="cash on delivery"){
    this.props.history.push("/cashondelivery");
}
this.setState({
    selectedOption:event.target.value
})


    }
    formSubmit=(event)=>{
        event.preventDefault();
       
    }
    render() {
        return (
            <div>
                Payment Options
            <form onSubmit={this.formSubmit}>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="credit card"
                                checked={this.state.selectedOption === "credit card"}
                                onChange={this.onValueChange}
                            />
                            Credit Card
                        </label>
                        <select>
                            <option>
                                Choose card Type
                            </option>
                            <option>
                                Master Card
                            </option>
                            <option>
                                Visa
                             </option>
                            <option>
                                rupay card
                            </option>
                        </select>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="debit card"
                                checked={this.state.selectedOption === "debit card"}
                                onChange={this.onValueChange}
                            />
                            Debit Card
                         </label>
                        <select>
                            <option>
                                Choose Bank
                            </option>
                            <option>
                                ICICI Bnak
                            </option>
                            <option>
                                UCO Bank
                            </option>
                            <option>
                                SBI 
                            </option>
                        </select>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="netbanking"
                                checked={this.state.selectedOption === "netbanking"}
                                onChange={this.onValueChange}
                            />
                            Net Banking
                        </label>
                        <select>
                            <option>
                                Choose Bank
                            </option>
                            <option>
                                ICICI Bank
                            </option>
                            <option>
                                UCO Bank
                            </option>
                            <option>

                            </option>
                        </select>
                    </div>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value="cash on delivery"
                                checked={this.state.selectedOption === "cash on delivery"}
                                onChange={this.onValueChange}
                            />
                            Cash On Delivery
              </label>
                    </div>
                    <div>
        </div>


                </form>

            </div>
        )
    }
}

export default withRouter(PaymentOption)
// export default compose(
//     withRouter,
//     connect(null, {paymentmode})
//   )(PaymentOption);
