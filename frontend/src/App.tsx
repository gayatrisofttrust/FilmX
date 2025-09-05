import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Purchases from "./pages/Purchases";

const App: React.FC = () => {
    return (
        <Router>
            <nav style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
                <Link to="/">Dashboard</Link> |{" "}
                <Link to="/profile">Profile</Link> |{" "}
                <Link to="/purchases">Purchases</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/purchases" element={<Purchases />} />
            </Routes>
        </Router>
    );
};

export default App;
