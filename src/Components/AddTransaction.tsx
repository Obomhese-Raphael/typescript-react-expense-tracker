// src/components/AddTransaction.tsx
import React, { useState } from "react";
import { useGlobalState } from "../Context/GlobalContext";

const AddTransaction: React.FC = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useGlobalState();

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000),
            description,
            amount: +amount, 
        };

        addTransaction(newTransaction);
        setDescription("");
        setAmount(0);
    };

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter description..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(+e.target.value)}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
};


export default AddTransaction;