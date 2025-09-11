import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const UserList: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`${API_URL}/users`)
            .then(res => setUsers(res.data))
            .catch(err => console.error("API error:", err));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((u) => (
                    <li key={u.id}>{u.name} ({u.email})</li>
                ))}
            </ul>
        </div>
    );
};
