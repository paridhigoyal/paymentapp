import React, { Component } from 'react';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { connect } from 'react-redux';
import { debitCard } from '../actions/index'
import {Link} from 'react-router-dom'
// import DebitDetails from '../containers/DebitDetails'

export class DebitCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
            streetAddress: '',
            city: '',
            states: '',
            zip: '',
            buyerName: '',


        };
    }

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }
    handleNumberChange = (event) => {
        this.setState({
            number: event.target.value
        })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleExpiryChange = (event) => {
        this.setState({
            expiry: event.target.value
        })
    }
    handleCvcChange = (event) => {
        this.setState({
            cvc: event.target.value
        })
    }
    handleAddressChange = (event) => {
        this.setState({
            streetAddress: event.target.address
        })
    }
    handleCityChange = (event) => {
        this.setState({
            city: event.target.value
        })
    }
    handleStateChange = (event) => {
        this.setState({
            states: event.target.value
        })
    }
    handleZipChange = (event) => {
        this.setState({
            zip: event.target.value
        })
    }
    handleBuyerNameChange = (event) => {
        this.setState({
            buyerName: event.target.value
        })
    }
    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.debitCard(this.state.address, this.state.city, this.state.buyerName, this.state.states)
    }

    render() {
        return (
            <div>
                <div id="PaymentForm">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <form onSubmit={this.handleSubmit}>
                        <label>Card number:</label>
                        <input
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleNumberChange}
                            onFocus={this.handleInputFocus}
                        /><br />
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Card Name"
                            onChange={this.handleNameChange}
                            onFocus={this.handleInputFocus}
                        /><br />
                        <label>Expiry date</label>
                        <input
                            type="tel"
                            name="expiry"
                            placeholder="expiry"
                            onChange={this.handleExpiryChange}
                            onFocus={this.handleInputFocus}
                        /><br />
                        <label>CVC:</label>
                        <input
                            type="tel"
                            name="cvc"
                            placeholder="cvc"
                            onChange={this.handleCvcChange}
                            onFocus={this.handleInputFocus}
                        />
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
                        </select>
                        <h3>Shipping Address:</h3>
                        <label>Street Address:</label>
                        <input
                            type="text"
                            value={this.state.streetAddress}
                            placeholder="address"
                            onChange={this.handleAddressChange}
                        />
                        <label>City:</label>
                        <input
                            type="text"
                            value={this.state.city}
                            placeholder="city"
                            onChange={this.handleCityChange}
                        />
                        <label>State:</label>
                        <input
                            type="text"
                            value={this.state.states}
                            placeholder="state"
                            onChange={this.handleStateChange}
                        />
                        <label>Postal/Zip Code:</label>
                        <input
                            type="tel"
                            value={this.state.zip}
                            placeholder="zipcode"
                            onChange={this.handleZipChange}
                        />
                        <label>Country:</label>
                        <select>
                            <option>Please Select</option>
                            <option>Australia</option>
                            <option>Antartica</option>
                            <option>Afganistan</option>
                            <option>China</option>
                            <option>India</option>
                            <option>Russia</option>
                            <option>United States</option>
                        </select>
                        <label>Buyer Name:</label>
                        <input
                            type="text"
                            Value={this.state.buyerName}
                            placeholder="BuyerName"
                            onChange={this.handleBuyerNameChange}
                        />
                        <label>Buyer E-mail:</label>
                        <input
                            type="text"
                            value={this.state.email}
                            placeholder="E-mail"
                            onChange={this.handleEmailChange}
                        />

                        <h3>Order Deatils:</h3>
                        <label>Product:</label>
                        <label>
                            <input
                                type="radio"
                                value="JBL Headphone"
                                checked={this.state.selectedOption === "JBL Headphone"}
                                onChange={this.onValueChange}
                            />
                            JBL Headphones Rs.1000
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="JBL Earphone"
                                checked={this.state.selectedOption === "JBL Earphone"}
                                onChange={this.onValueChange}
                            />
                            JBL earphone Rs. 300
                        </label>


                      <Link to ={`/orderthroughdebitcard`}>
                          <button type="submit">
                            Order
                       </button>
                       </Link>
                        {/* <DebitDetails/> */}
                    </form>
                </div>
            </div>
        )
    }
}


export default connect(null, { debitCard })(DebitCard)
    ;