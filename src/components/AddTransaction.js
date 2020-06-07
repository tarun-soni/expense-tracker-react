import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();
        if (amount !== '' && text !== '') {
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }

            addTransaction(newTransaction);
        }
        else {
            window.alert("Transaction value is empty")
        }
        setText("")
        setAmount('')
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Where did you spent?</label>
                    <input type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                       />
                </div>
                <div className="form-control-2">
                    <label htmlFor="amount" >Enter Amount
                     <br />
                      (negative - expense, positive - income)
                    </label>
                    <input type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
