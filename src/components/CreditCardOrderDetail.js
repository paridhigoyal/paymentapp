import React from 'react';


function CreditCardOrderDetail ({ creditcard}) {

    return(
  
    <ul>
        <h2>Your order is Placed.
            Order can be dispatched within 7 days.
        </h2>
      {/* {creditcard.map(item=><p>
        <h2> {item.buyername} your order is confirmed.CreditCardOrderDetail</h2> 
        Your order will be dispatched within 7 Days.
        </p> )}
   */}
    </ul>
       
  
   );
  };
export default CreditCardOrderDetail
