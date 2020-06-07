import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

      const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

        const expense = amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

     

    // const income = amounts.length > 0 &&
    //      amounts.filter(amount => amount > 0)
    //             .length > 0 ? amounts
    //             .filter(amount => amount > 0)
    //             .reduce((acc, amount) => acc + amount).toFixed(2) : 0.00;

    // const expense = amounts.length > 0 && amounts.filter(amount => amount < 0).length > 0 ? (amounts.filter(amount => amount < 0).reduce((acc, amount) => acc + amount) * -1).toFixed(2) : 0.00;

    return (
        <div className="inc-exp-container">
            <div className="inc-container">
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus"> ${Math.abs(expense)}</p>
            </div>
        </div>
    )
}
