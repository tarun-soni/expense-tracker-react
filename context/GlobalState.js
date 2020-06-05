import React, { createContext, useReducer } from 'react';

//Initial State which has single object
const initialState = {
    transaction: [
        { id: 1, text: 'flower', amount: '20' },
        { id: 2, text: 'A', amount: '-10' },
        { id: 3, text: 'B', amount: '50' }
    ]
}