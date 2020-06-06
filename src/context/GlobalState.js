
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'flower', amount: 80 },
        { id: 2, text: 'A', amount: -10 },
        { id: 3, text: 'B', amount: 50 },
        { id: 4, text: 'B', amount: 50 }
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);


    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>);
}
