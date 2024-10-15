import "../App.css"
import { useGlobalState } from "../Context/GlobalContext"

const Balance: React.FC = () => {
    const { transactions } = useGlobalState();
    const totalBalance = transactions
        .reduce((acc: number, curr: { amount: number }) => acc + curr.amount, 0)
        .toFixed(2);
    return (
        <div className="balance">
            <h4>Your Balance</h4>
            <h3 id="balance">${totalBalance}</h3>
        </div>
    )
}

export default Balance;