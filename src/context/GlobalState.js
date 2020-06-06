
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//Initial State which has single object
const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: '20' },
        { id: 2, text: 'A', amount: '-10' },
        { id: 3, text: 'B', amount: '50' },
        { id: 4, text: 'B', amount: '50' }
    ]
}

//Crete Context
export const GlobalContext = createContext(initialState);


// in order for other components to get access to our state
//Provider component

export const GlobalProvider = ({ chlidren }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // const [state, dispatch] = useReducer(reducer, initialState, init)
    return (<GlobalContext.Provider value={{ 
        transactions: state.transactions 
        }}>
        {chlidren}
    </GlobalContext.Provider>);
}


