import {CREDIT_CARD, DEBIT_CARD,NETBANKING, CASH_ON_DELIVERY} from './actionType'
export const creditCard = (address,city,buyername,states) => ({
    type: CREDIT_CARD,
    address:address,
    city:city,
    buyername:buyername,
    states:states,
  });

  export const debitCard = (address,city,buyername,states) => ({
    type: DEBIT_CARD,
    address:address,
    city:city,
    buyername:buyername,
    states:states,
  });
  export const  netBanking = (beneficiaryAccountName,amount) => ({
    type: NETBANKING,
    beneficiaryAccountName:beneficiaryAccountName,
    amount:amount

    
  });
  export const  cashOnDelivery = (address,city,buyername,states) => ({
    type: CASH_ON_DELIVERY,
    address:address,
    city:city,
    buyername:buyername,
    states:states,
    
  });