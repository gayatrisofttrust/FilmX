import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const ActivateSubscription: React.FC = () => {
    const [userId, setUserId] = useState("");
    const [message, setMessage] = useState("");

    const handleActivate = async () => {
        try {
            const res = await axios.post(`${API_URL}/subscriptions`, { user_id: userId });
            setMessage(res.data.success ? "Activated!" : "Failed");
        } catch {
            setMessage("Failed");
        }
    };

    return (
        <div>
            <h2>Activate Subscription</h2>
            <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={e => setUserId(e.target.value)}
            />
            <button onClick={handleActivate}>Activate</button>
            <div>{message}</div>
        </div>
    );
};
