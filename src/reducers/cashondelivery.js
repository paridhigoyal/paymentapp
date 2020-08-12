import {  CASH_ON_DELIVERY } from "../actions/actionType";

const cashondelivery = (state = [], action) => {

    switch (action.type) {
      case CASH_ON_DELIVERY:
        return[...state,
            {
                address:action.address,
                city:action.city,
                buyername:action.buyername,
                states:action.states,
              
            } 
        ]
      default: 
        return state;
    }
    
  }

export default cashondelivery;