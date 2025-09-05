import React, { useEffect, useState } from "react";

interface Stats {
    users: number;
    purchases: number;
    refunds: number;
}

const Dashboard: React.FC = () => {
    const [stats, setStats] = useState<Stats>({ users: 0, purchases: 0, refunds: 0 });
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
    useEffect(() => {
        fetch(`${apiUrl}/stats`)
            .then((res) => res.json())
            .then((data) => setStats(data))
            .catch((err) => console.error("Error fetching stats:", err));
    }, []);

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Dashboard</h2>
            <p>Users: {stats.users}</p>
            <p>Purchases: {stats.purchases}</p>
            <p>Refunds: {stats.refunds}</p>
        </div>
    );
};

export default Dashboard;
