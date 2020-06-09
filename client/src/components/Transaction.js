import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const { deleteTransaction }= useContext(GlobalContext)
    return (
        <div>
            <li className={sign === '-' ? 'minus' : 'plus'}>
                {transaction.text}
                <span>
                    {sign} ${Math.abs(transaction.amount)}
                </span>
                <button onClick={()=>deleteTransaction(transaction._id)}className="delete-btn">x</button>
            </li>
        </div>
    )
}

