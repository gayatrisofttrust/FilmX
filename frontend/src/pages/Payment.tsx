import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const Payment: React.FC = () => {
    const [userId, setUserId] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handlePayment = async () => {
        try {
            const res = await axios.post(`${API_URL}/payments`, {
                user_id: userId,
                amount: parseFloat(amount),
            });
            setMessage(res.data.success ? "Payment successful!" : "Payment failed");
        } catch {
            setMessage("Payment failed");
        }
    };

    return (
        <div>
            <h2>Make Payment</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <button onClick={handlePayment}>Pay</button>
            <div>{message}</div>
        </div>
    );
};
