/* eslint-disable react-refresh/only-export-components */
// src/context/GlobalState.tsx
import React, { createContext, useReducer, useContext } from "react";
import { GlobalState, Transaction, Action } from "../Types/Types";

// Initial State
const initialState: GlobalState = {
    transactions: [],
    addTransaction: () => { },
    deleteTransaction: () => { },
};

// Reducer Function - Handles the action to update the global state based on its dispatched actions
const AppReducer = (state: GlobalState, action: Action): GlobalState => {
    switch (action.type) {
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter(
                    (transaction) => transaction.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

// Create Context
const GlobalContext = createContext<GlobalState>(initialState);

// Context Provider
export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const addTransaction = (transaction: Transaction) => {
        dispatch({ 
            type: "ADD_TRANSACTION", 
            payload: transaction 
        });
    };

    const deleteTransaction = (id: number) => {
        dispatch({ 
            type: "DELETE_TRANSACTION", 
            payload: id 
        });
    };

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

// Custom hook for using Global Context
export const useGlobalState = () => useContext(GlobalContext);
