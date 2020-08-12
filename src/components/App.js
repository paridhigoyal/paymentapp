import React from 'react';
import PaymentOption from './PaymentOption';
import CreditCard from './CreditCard';
import DebitCard from './DebitCard';
import NetBankingDetails from '../containers/NetBankingDetails'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import CreditDetails from '../containers/CreditDetails';
import DebitDetails from '../containers/DebitDetails'
import NetBanking from './NetBanking';
import CashOnDelivery  from './CashOnDelivery';
import CashOnDeliverydetails from '../containers/CashOnDeliverydetails';


function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route exact path="/">
                    <PaymentOption />
                </Route>
                <Route exact path="/creditcard" >
                    <CreditCard />

                </Route>
                <Route exact path="/debitcard" >
                    <DebitCard />

                </Route>
                <Route exact path="/netbanking" >
                    <NetBanking />

                </Route>
                <Route exact path="/cashondelivery" >
                    <CashOnDelivery />

                </Route>
                <Route exact path="/orderthroughcreditcard" component={CreditDetails} />
                <Route exact path="/orderthroughnetbanking" component={NetBankingDetails} />
                <Route exact path="/orderthroughdebitcard" >
                    <DebitDetails />
                </Route>
                <Route exact path="/orderthroughcod" component={CashOnDeliverydetails} />
                

            </Switch>

            {/* <div><Details history={this.props.history}/></div> */}
        </Router>


    );
}

export default App
