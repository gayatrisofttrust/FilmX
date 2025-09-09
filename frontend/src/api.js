import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getUsers = async () => {
    const res = await axios.get(`${API_URL}/users`);
    return res.data;
};

export const activateSubscription = async (userId) => {
    const res = await axios.post(`${API_URL}/subscriptions/activate`, { user_id: userId });
    return res.data;
};

export const createPayment = async (userId, amount) => {
    const res = await axios.post(`${API_URL}/payments`, { user_id: userId, amount });
    return res.data;
};
