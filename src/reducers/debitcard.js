import { DEBIT_CARD } from "../actions/actionType";

const debitcard = (state = [], action) => {

    switch (action.type) {
      case DEBIT_CARD:
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

export default debitcard;