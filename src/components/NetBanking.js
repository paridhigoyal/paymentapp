import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {netBanking} from '../actions/index'
import {connect } from 'react-redux'

export class NetBanking extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            fromAccountNo: '',
            beneficiaryAccountNoCpin: '',
            beneficiaryAccountName: '',
            beneficiaryBankName: '',
            beneficiaryBankIfscCode: '',
            remark: '',
            amount: '',
            paymentType: '',
        });
    }

    onAccountNohandle = (e) => this.setState({ fromAccountNo: e.target.value })
    onCpinhandle = (e) => this.setState({ beneficiaryAccountNoCpin: e.target.value })
    onAccountNamehandle = (e) => this.setState({
        beneficiaryAccountName: e.target.value
    })
    onBankNamehandle = (e) => this.setState({
        beneficiaryBankName: e.target.value
    }
    )
    onRemarkhandle = (e) => this.setState({ remark: e.target.value })
    onAmounthandle = (e) => this.setState({ amount: e.target.value })
    onPaymentTypehandle = (e) => this.setState({ paymentType: e.target.value })

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.netBanking(
            this.state.beneficiaryAccountName,
            this.state.amount,
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label>From Account number</label>
                    <input type='tel' placeholder='account number'
                        value={this.state.fromAccountNumber}
                        onChange={this.onAccountNohandle}
                        required
                    /><br />

                    <label>Beneficiary Account No.(CPIN)</label>
                    <input type='tel' placeholder='CPIN'
                        value={this.state.beneficiaryAccountNoCpin}
                        onChange={this.onCpinhandle}
                        required
                    /><br />

                    <label>Beneficiary Account Name</label>
                    <input type='text' placeholder='beneficiary Account Name)'
                        value={this.state.beneficiaryAccountName}
                        onChange={this.onAccountNamehandle}
                        required
                    /><br />

                    <label>Beneficiary Bank Name</label>
                    <input type='text' placeholder='beneficiary bank Name)'
                        value={this.state.beneficiaryBankName}
                        onChange={this.onBankNamehandle}
                        required
                    /><br />

                    <label>Remark</label>
                    <input type='text' placeholder='remark'
                        value={this.state.remark}
                        onChange={this.onRemarkhandle}
                    /><br />

                    <label>Amount</label>
                    <input type='tel' placeholder='amount'
                        value={this.state.ammount}
                        onChange={this.onAmounthandle}
                        required
                    /><br />

                    <label>Payment Type</label>
                    <input type='tel' placeholder='amount' value={this.state.paymentType}
                        onChange={this.onPaymentTypehandle}
                        required
                    /><br />
                    <br /><br />
                    <Link to={`/orderthroughnetbanking`}>
                        <button type='submit' >submit </button>
                    </Link>

                </form>
            </div>
        )
    }
}

// export default NetBanking
export default connect(null, { netBanking })(NetBanking)