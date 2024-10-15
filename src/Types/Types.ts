// src/types/types.ts
export interface Transaction {
    id: number;
    description: string;
    amount: number;
}

export interface GlobalState {
    transactions: Transaction[];
    addTransaction: (transaction: Transaction) => void;
    deleteTransaction: (id: number) => void;
}

export type Action = 
    | { type: 'ADD_TRANSACTION', payload: Transaction }
    | { type: 'DELETE_TRANSACTION', payload: number };