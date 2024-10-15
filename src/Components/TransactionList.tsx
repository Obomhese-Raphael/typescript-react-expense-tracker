import React from "react";
import { useGlobalState } from "../Context/GlobalContext";

const ExpenseList: React.FC = () => {
    const { transactions, deleteTransaction } = useGlobalState();

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => (
                    <li
                        key={transaction.id}
                        className={transaction.amount < 0 ? "minus" : "plus"}
                    >
                        {transaction.description}{" "}
                        <span>
                            {transaction.amount < 0 ? "-" : "+"}${Math.abs(transaction.amount)}
                        </span>
                        <button
                            onClick={() => deleteTransaction(transaction.id)}
                            className="delete-btn"
                        >
                            x
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;