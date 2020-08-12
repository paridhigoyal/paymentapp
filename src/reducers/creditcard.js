import { CREDIT_CARD } from "../actions/actionType";

const creditcard = (state = [], action) => {

    switch (action.type) {
      case CREDIT_CARD:
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

export default creditcard;