import { combineReducers } from 'redux';

import creditcard from './creditcard'
import debitcard from './debitcard'
import netbanking from './netbanking'
import cashondelivery from './cashondelivery'


export default combineReducers({
 creditcard,
 debitcard,
 netbanking,
 cashondelivery


});