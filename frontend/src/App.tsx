import React from "react";
import { UserList } from "./pages/UserList";
import { ActivateSubscription } from "./pages/ActivateSubscription";
import { Payment } from "./pages/Payment";
import "./App.css";

const App: React.FC = () => (
    <div>
        <h1>FilmX Dashboard</h1>
        <UserList />
        <ActivateSubscription />
        <Payment />
    </div>
);
export default App;