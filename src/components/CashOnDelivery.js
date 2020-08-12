import React, { Component } from 'react'
import {connect} from 'react-redux';
import {cashOnDelivery} from '../actions/index';
import {Link} from 'react-router-dom'


export class CashOnDelivery extends Component {
    constructor(props){
        super(props);
        this.state=({
        streetAddress: '',
        city: '',
        states: '',
        zip: '',
        buyerName: '',
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
      
        this.props.cashOnDelivery(this.state.address, this.state.city, this.state.buyerName, this.state.states)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                        <Link to={`/orderthroughcod`}>
                           <button type="submit">
                                Order</button>
                       </Link>
                       
                </form>
            </div>
        )
    }
}

export default connect(null,{cashOnDelivery}) (CashOnDelivery)
