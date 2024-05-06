import axios from "axios";

export const dashboardProvider = () => {
    return axios.get(`http://localhost:3000/dashboard`)
};
