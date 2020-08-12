import { NETBANKING } from "../actions/actionType";

const netbanking = (state = [], action) => {

    switch (action.type) {
      case NETBANKING:
        return[...state,
            {
                
              
            } 
        ]
      default: 
        return state;
    }
    
  }

export default netbanking;