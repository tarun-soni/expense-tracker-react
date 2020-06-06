import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
export const TransactionList = () => {
    const context = useContext(GlobalContext)
    console.log('context',context);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <li>

                    Cash <span><button className="delete-btn">x</button></span>
                </li>
                {/* {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} */}
            </ul>
        </>
    )
}