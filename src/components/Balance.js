import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc+=item)).toFixed(2);
  

  console.log('total', total)


// const income = amounts.length > 0 && amounts.filter(amount => amount > 0).length > 0 ? amounts.filter(amount => amount > 0).reduce((acc, amount) => acc + amount).toFixed(2) : 0.00;
// const expense = amounts.length > 0 && amounts.filter(amount => amount < 0).length > 0 ? (amounts.filter(amount => amount < 0).reduce((acc, amount) => acc + amount) * -1).toFixed(2) : 0.00;


  return (
    <>
      <h4>Your Balance</h4>
    <h1>${total}</h1>>
    </>
  )
}