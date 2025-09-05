import React from "react";

interface User {
    name: string;
    email: string;
}

const Profile: React.FC = () => {
    // Example static data for now
    const user: User = { name: "John Doe", email: "john@example.com" };

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Profile</h2>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
