import React, { useEffect, useState } from "react";

interface Purchase {
    id: number;
    item: string;
    amount: number;
}

const Purchases: React.FC = () => {
    const [purchases, setPurchases] = useState<Purchase[]>([]);
    const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:4000";
    useEffect(() => {
        fetch(`${apiUrl}/purchases`)
            .then((res) => res.json())
            .then((data) => setPurchases(data))
            .catch((err) => console.error("Error fetching purchases:", err));
    }, []);

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Purchases</h2>
            <ul>
                {purchases.map((p) => (
                    <li key={p.id}>
                        {p.item} – ${p.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Purchases;
